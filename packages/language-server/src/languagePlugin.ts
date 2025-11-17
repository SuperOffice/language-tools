import {
    CodeMapping,
    forEachEmbeddedCode,
    type LanguagePlugin,
    VirtualCode,
} from '@volar/language-core';
import { TypeScriptExtraServiceScript } from '@volar/typescript';
import path from 'path';
import ts, { ModuleResolutionKind } from 'typescript';
import { URI } from 'vscode-uri';
import { LanguageService, LanguageType } from './languageService.js';

export function getLanguagePlugin(): LanguagePlugin<URI, TsfsoVirtualCode> {
    return {
        getLanguageId(uri): string | undefined {
            if (uri.path.endsWith('.tsfso')) {
                return 'tsfso';
            }
        },

        createVirtualCode(uri, languageId, snapshot): TsfsoVirtualCode | undefined {
            if (languageId === 'tsfso') {
                return new TsfsoVirtualCode(uri, snapshot, languageId);
            }
        },
        typescript: {
            extraFileExtensions: [{ extension: 'tsfso', isMixedContent: true, scriptKind: ts.ScriptKind.TS }],
            getServiceScript(): undefined {
                return undefined;
            },
            getExtraServiceScripts(fileName, root): TypeScriptExtraServiceScript[] {
                const scripts: TypeScriptExtraServiceScript[] = [];
                for (const code of forEachEmbeddedCode(root)) {
                    if (code.languageId === 'javascript') {
                        scripts.push({
                            fileName: fileName + '.' + code.id + '.js',
                            code,
                            extension: '.js',
                            scriptKind: 1 satisfies ts.ScriptKind.JS,
                        });
                    }
                    else if (code.languageId === 'typescript') {
                        scripts.push({
                            fileName: fileName + '.' + code.id + '.ts',
                            code,
                            extension: '.ts',
                            scriptKind: 3 satisfies ts.ScriptKind.TS,
                        });
                    }
                }
                return scripts;
            },
            resolveLanguageServiceHost(host): ts.LanguageServiceHost {
                const baseCompilationSettings = host.getCompilationSettings();
                // Set compiler options
                const newSettings = {
                    ...baseCompilationSettings,
                    module: ts.ModuleKind.ESNext,
                    moduleResolution: ModuleResolutionKind.NodeNext,
                    //moduleDetection: ts.ModuleDetectionKind.Legacy,
                };

                return {
                    ...host,
                    getCompilationSettings: () => newSettings,
                    getScriptFileNames: (): string[] => {
                        const fileNames = host.getScriptFileNames();
                        const addedFileNames: string[] = [];
                        addedFileNames.push(
                            ...['./global-webapi.d.ts'].map((filePath) =>
                                ts.sys.resolvePath(path.resolve(__dirname, filePath)),
                            ),
                        );

                        return [...fileNames, ...addedFileNames]
                    }
                };
            }
        }
    };
}

class TsfsoVirtualCode implements VirtualCode {
    id = 'root';
    languageId = 'tsfso';
    mappings: CodeMapping[] = []; // Change this type according to your needs
    embeddedCodes: VirtualCode[] = [];
    editedTextDocument: string = '';

    constructor(
        public uri: URI,
        public snapshot: ts.IScriptSnapshot,
        public scriptType: string
    ) {
        this.onSnapshotUpdated();
    }

    public update(newSnapshot: ts.IScriptSnapshot): void {
        this.snapshot = newSnapshot;
        this.onSnapshotUpdated();
    }

    private onSnapshotUpdated(): void {
        this.mappings = [
            {
                sourceOffsets: [0],
                generatedOffsets: [0],
                lengths: [this.snapshot.getLength()],
                data: {
                    verification: true,
                    completion: true,
                    semantic: true,
                    navigation: true,
                    structure: true,
                    format: true,
                },
            },
        ];

        const documentText = this.snapshot.getText(0, this.snapshot.getLength());
        const service = new LanguageService();
        const codeblocks = service.scan(documentText);

        let editedDocumentText: string = documentText;

        const includeBlocks = codeblocks.filter(block => block.type === LanguageType.Include);
        includeBlocks.forEach((block, index) => {
            let content = documentText.substring(block.range[0], block.range[1]);
            editedDocumentText = editedDocumentText.replace(content, ' '.repeat(content.length));

            const contentLength = content.length;
            if (block.type === 'include' && block.fileName) {
                content = service.readFileContent(this.uri, block.fileName);
            }

            this.embeddedCodes.push({
                id: `${block.type}_${index}_${contentLength}`,
                languageId: 'typescript',
                snapshot: service.createSnapshot(content, block.range, block.type),
                mappings: [service.createMapping(block.range[0], contentLength)],
                embeddedCodes: [],
            });

            // collect parts for editedDocumentTextParts
            editedDocumentText = editedDocumentText.replace(content, ' '.repeat(content.length));
            //editedDocumentTextParts(block.range[0], block.range[1]);
        });

        this.embeddedCodes.push({
            id: `tsfso_${this.embeddedCodes.length}_0`,
            languageId: 'typescript',
            snapshot: service.createSnapshot(editedDocumentText, [0, editedDocumentText.length], LanguageType.Typescript),
            mappings: [service.createMapping(0, editedDocumentText.length)],
            embeddedCodes: [],
        });

        // create an editedDocumentText where all ranges in includeBlocks are filtered out
        //const editedDocumentText = documentText.replace(editedDocumentTextParts, '');

        // codeblocks.forEach((block, index) => {
        //     let content = documentText.substring(block.range[0], block.range[1]);

        //     const contentLength = content.length;
        //     if (block.type === 'include' && block.fileName) {
        //         content = service.readFileContent(this.uri, block.fileName);
        //     }

        //     this.embeddedCodes.push({
        //         id: `${block.type}_${index}_${contentLength}`,
        //         languageId: 'typescript',
        //         snapshot: service.createSnapshot(content, block.range, block.type),
        //         mappings: [service.createMapping(block.range[0], contentLength)],
        //         embeddedCodes: [],
        //     });
        // });
    }
}
