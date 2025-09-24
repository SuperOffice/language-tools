import path from "path";
import { URI } from "vscode-uri";
import fs from "fs";
import ts from "typescript";
import { CodeMapping } from "@volar/language-core";
import { Position } from "@volar/language-server";

interface IncludeDirective {
    fileName: string | null;
    range: [number, number];
    type: LanguageType;
    startPosition: Position;
    endPosition: Position;
}

enum LanguageType {
    Include = 'include',
    Typescript = 'tsfso',
}

export const typescriptFeatures = {
    verification: true,
    completion: true,
    semantic: true,
    navigation: true,
    structure: true,
    format: false,
};

interface ILanguageService {
    scan(text: string): IncludeDirective[];
    readFileContent(uri: URI, fileName: string): string;
    createSnapshot(content: string, range: [number, number], type: LanguageType): ts.IScriptSnapshot;
    createMapping(sourceOffset: number, length: number): CodeMapping;
    getPosition(text: string, offset: number): { line: number; character: number };
}

export class LanguageService implements ILanguageService {
    private readonly includeRegex = /#include\s+'([^']+\.tsfso)';/g;

    public scan(text: string): IncludeDirective[] {
        const results: IncludeDirective[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = this.includeRegex.exec(text)) !== null) {
            const includeStart = match.index;

            // Add preceding Typescript block
            if (includeStart > lastIndex) {
                results.push({
                    fileName: null,
                    range: [lastIndex, includeStart],
                    type: LanguageType.Typescript,
                    startPosition: this.getPosition(text, lastIndex),
                    endPosition: this.getPosition(text, includeStart),
                });
            }

            // Add the include directive
            results.push({
                fileName: match[1],
                range: [match.index, this.includeRegex.lastIndex],
                type: LanguageType.Include,
                startPosition: this.getPosition(text, match.index),
                endPosition: this.getPosition(text, this.includeRegex.lastIndex),
            });

            lastIndex = this.includeRegex.lastIndex;
        }

        // Add remaining Typescript block after last include
        if (lastIndex < text.length) {
            results.push({
                fileName: null,
                range: [lastIndex, text.length],
                type: LanguageType.Typescript,
                startPosition: this.getPosition(text, lastIndex),
                endPosition: this.getPosition(text, text.length),
            });
        }

        return results;
    }
    public readFileContent(uri: URI, fileName: string): string {
        const directoryPath = path.dirname(uri.fsPath);
        const includeFilePath = path.resolve(directoryPath, fileName);

        try {
            return fs.readFileSync(includeFilePath, 'utf8');
        } catch {
            return '// File not found: ' + fileName;
        }
    }
    public createSnapshot(content: string, range: [number, number], type: LanguageType): ts.IScriptSnapshot {
        if (type === LanguageType.Include) {
            content = content + 'export {};'; // Ensure it's treated as a module
        }

        return {
            getText: () => content,
            getLength: () => range[1] - range[0],
            getChangeRange: () => undefined,
        };
    }
    public createMapping(sourceOffset: number, length: number): CodeMapping {
        return {
            sourceOffsets: [sourceOffset],
            generatedOffsets: [0],
            lengths: [length],
            data: typescriptFeatures,
        };
    }
    public getPosition(text: string, offset: number): Position {
        let line = 0;
        let character = 0;

        for (let i = 0; i < offset; i++) {
            if (text.charAt(i) === '\n') {
                line++;
                character = 0;
            } else {
                character++;
            }
        }

        return Position.create(line, character);
    }
}
