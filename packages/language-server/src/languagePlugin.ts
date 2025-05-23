import {
	CodeInformation,
	CodeMapping,
	forEachEmbeddedCode,
	type LanguagePlugin,
	Mapping,
	VirtualCode,
} from '@volar/language-core';
import { TypeScriptExtraServiceScript } from '@volar/typescript';
import { type Segment, toString as volarToString } from 'muggle-string';
import path from 'path';
import ts, { ModuleResolutionKind } from 'typescript';
import * as html from 'vscode-html-languageservice';
import { URI } from 'vscode-uri';

// Constants
const EJSCRIPT_START = '%EJSCRIPT_START%';
const EJSCRIPT_END = '%EJSCRIPT_END%';
const SCRIPT_START = '<%';
const SCRIPT_END = '%>';

const typescriptFeatures = {
	verification: true,
	completion: true,
	semantic: true,
	navigation: true,
	structure: true,
	format: false,
};

const htmlLs = html.getLanguageService();

export function getSuperOfficeLanguagePlugin(): LanguagePlugin<URI, SuperOfficeVirtualCode> {
	return {
		getLanguageId(uri) {
			if (uri.path.endsWith('.tsfso')) {
				return 'tsfso';
			}
		},

		createVirtualCode(_uri, languageId, snapshot) {
			if (languageId === 'tsfso') {
				return new SuperOfficeVirtualCode(snapshot, languageId);
			}

		},
		typescript: {
			extraFileExtensions: [{ extension: 'tsfso', isMixedContent: true, scriptKind: ts.ScriptKind.TS }],
			getServiceScript() {
				return undefined;
			},
			getExtraServiceScripts(fileName, root) {
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
			resolveLanguageServiceHost(host) {		
				// Set compiler options
				const newSettings = {
					...host.getCompilationSettings(),
					module: ts.ModuleKind.ESNext,
					moduleResolution: ModuleResolutionKind.NodeNext,
					moduleDetection: ts.ModuleDetectionKind.Force,
					
				};

				return {
					...host,
					getCompilationSettings: () => newSettings,
					getScriptFileNames: () => {
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

class SuperOfficeVirtualCode implements VirtualCode {
	id = 'root';
	languageId = 'tsfso';
	mappings: CodeMapping[] = []; // Change this type according to your needs
	embeddedCodes: VirtualCode[] = [];
	editedTextDocument: string = '';

	constructor(
		public snapshot: ts.IScriptSnapshot,
		public scriptType: string
	) {
		this.onSnapshotUpdated();
	}

	public update(newSnapshot: ts.IScriptSnapshot) {
		this.snapshot = newSnapshot;
		this.onSnapshotUpdated();
	}

	private onSnapshotUpdated() {
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

		this.embeddedCodes = [];
		this.embeddedCodes.push(
			...this.generateSuperOfficeCode(),
			...this.generateHtmlCode()
		);
	}

	private *generateSuperOfficeCode(): Generator<VirtualCode> {
		const superOfficeSegments = this.createSuperOfficeSegments(this.snapshot.getText(0, this.snapshot.getLength()));
		const generated = volarToString(superOfficeSegments);
		yield {
			id: this.scriptType,
			languageId: this.scriptType = 'typescript',
			snapshot: {
				getText: (start: number | undefined, end: number | undefined) => generated.slice(start, end),
				getLength: () => generated.length,
				getChangeRange: () => undefined,
			},
			mappings: buildMappings(superOfficeSegments),
			embeddedCodes: [],
		};
	}

	private createSuperOfficeSegments(textDocument: string): Segment<CodeInformation>[] {
		let start = 0;
		let end = 0;
		this.editedTextDocument = textDocument;
		const segments: Segment<CodeInformation>[] = [];

		if (textDocument.includes(EJSCRIPT_START) && textDocument.includes(EJSCRIPT_END)) {
			// Replace %EJSCRIPT_START% and %EJSCRIPT_END% with whitespace
			this.editedTextDocument = this.editedTextDocument.replace(new RegExp(EJSCRIPT_START, 'g'), match => ' '.repeat(match.length));
			this.editedTextDocument = this.editedTextDocument.replace(new RegExp(EJSCRIPT_END, 'g'), match => ' '.repeat(match.length));
			// Replace everything between <% and %> with whitespace
			this.editedTextDocument = this.editedTextDocument.replace(/<%[\s\S]*?%>/g, match => ' '.repeat(match.length));
			//Loop the content and find all script blocks
			while (start !== -1 && end !== -1) {
				start = textDocument.indexOf(SCRIPT_START, end);
				end = textDocument.indexOf(SCRIPT_END, start);
				if (start !== -1 && end !== -1) {
					const blockContent = textDocument.slice(start + SCRIPT_START.length, end);
					segments.push([blockContent, undefined, start + SCRIPT_START.length, typescriptFeatures]);
				}
			}
		}
		else {
			segments.push([textDocument, undefined, 0, typescriptFeatures]);
		}
		return segments;
	}

	private *generateHtmlCode(): Generator<VirtualCode> {
		const htmlSegments = this.createHtmlSegments(this.snapshot.getText(0, this.snapshot.getLength()));
		const generated = volarToString(htmlSegments);
		yield {
			id: 'html',
			languageId: 'html',
			snapshot: {
				getText: (start: number | undefined, end: number | undefined) => generated.slice(start, end),
				getLength: () => generated.length,
				getChangeRange: () => undefined,
			},
			mappings: buildMappings(htmlSegments),
			embeddedCodes: [...this.generateEmbeddedHtmlCodes()],
		};
	}

	private createHtmlSegments(textDocument: string): Segment<CodeInformation>[] {
		let start = 0;
		let end = 0;

		const segments: Segment<CodeInformation>[] = [];

		if (textDocument.includes(EJSCRIPT_START) && textDocument.includes(EJSCRIPT_END)) {
			//Create segment for first block between EJSCRIPT_START and SCRIPT_START
			start = textDocument.indexOf(EJSCRIPT_START) + EJSCRIPT_START.length;
			end = textDocument.indexOf(SCRIPT_START, start);
			segments.push([textDocument.slice(start, end), undefined, start, typescriptFeatures]);

			// Create segments for all inn-between script blocks
			while (start !== -1 && end !== -1) {
				// Update start to point to the end of the current SCRIPT_END
				start = textDocument.indexOf(SCRIPT_END, end);
				if (start !== -1) {
					start += SCRIPT_END.length; // Move start to the character after SCRIPT_END
				}

				// Update end to point to the start of the next SCRIPT_START
				end = textDocument.indexOf(SCRIPT_START, start);
				if (end !== -1) {
					// Check if there's an additional SCRIPT_END before the next SCRIPT_START
					const nextScriptEnd = textDocument.indexOf(SCRIPT_END, start);
					if (nextScriptEnd !== -1 && nextScriptEnd < end) {
						// If there's an additional SCRIPT_END, update end to point to it
						end = nextScriptEnd;
					}
				}

				// If both start and end are valid, push the segment
				if (start !== -1 && end !== -1) {
					segments.push([textDocument.slice(start, end), undefined, start, typescriptFeatures]);
				}
			}

			// Create segment for last block between SCRIPT_END and EJSCRIPT_END
			start = textDocument.lastIndexOf(SCRIPT_END) + SCRIPT_END.length;
			end = textDocument.indexOf(EJSCRIPT_END);
			segments.push([textDocument.slice(start, end), undefined, start, typescriptFeatures]);

		}

		return segments;
	}

	private *generateEmbeddedHtmlCodes(): Generator<VirtualCode> {
		const document = html.TextDocument.create('', 'html', 0, this.editedTextDocument);
		const htmlDocument = htmlLs.parseHTMLDocument(document);
		let styles = 0;
		let scripts = 0;

		for (const root of htmlDocument.roots) {
			if (root.tag === 'style' && root.startTagEnd !== undefined && root.endTagStart !== undefined) {
				const styleText = this.editedTextDocument.slice(root.startTagEnd, root.endTagStart);
				yield {
					id: 'style_' + styles++,
					languageId: 'css',
					snapshot: {
						getText: (start: number, end: number | undefined) => styleText.substring(start, end),
						getLength: () => styleText.length,
						getChangeRange: () => undefined,
					},
					mappings: [{
						sourceOffsets: [root.startTagEnd],
						generatedOffsets: [0],
						lengths: [styleText.length],
						data: {
							completion: true,
							format: true,
							navigation: true,
							semantic: true,
							structure: true,
							verification: true,
						},
					}],
					embeddedCodes: [],
				};
			}
			if (root.tag === 'script' && root.startTagEnd !== undefined && root.endTagStart !== undefined) {
				const text = this.editedTextDocument.slice(root.startTagEnd, root.endTagStart);
				const lang = root.attributes?.lang;
				const isTs = lang === 'ts' || lang === '"ts"' || lang === "'ts'";
				yield {
					id: 'script_' + scripts++,
					languageId: isTs ? 'typescript' : 'javascript',
					snapshot: {
						getText: (start: number, end: number | undefined) => text.substring(start, end),
						getLength: () => text.length,
						getChangeRange: () => undefined,
					},
					mappings: [{
						sourceOffsets: [root.startTagEnd],
						generatedOffsets: [0],
						lengths: [text.length],
						data: {
							completion: true,
							format: true,
							navigation: true,
							semantic: true,
							structure: true,
							verification: true,
						},
					}],
					embeddedCodes: [],
				};
			}
		}
	}
}

function buildMappings<T>(chunks: Segment<T>[]) {
	let length = 0;
	const mappings: Mapping<T>[] = [];
	for (const segment of chunks) {
		if (typeof segment === 'string') {
			length += segment.length;
		} else {
			mappings.push({
				sourceOffsets: [segment[2]],
				generatedOffsets: [length],
				lengths: [segment[0].length],
				data: segment[3]!,
			});
			length += segment[0].length;
		}
	}
	return mappings;
}