import { Diagnostic } from "@volar/language-server";

export interface SourceMap {
    LineNumberFrom: number;
    LineNumberTo: number;
    Delta: number;
    IncludeId: string;
    IncludedFrom: string[];
    IncludeLength?: number; // Optional: Length of the included content
}

interface IncludeContent {
    [includeId: string]: string; // Simulated include content
}

export function findIncludeRange(
    diagnostic: Diagnostic,
    sourceMaps: SourceMap[]
): SourceMap | undefined {
    for (const element of sourceMaps) {
        if (diagnostic.range.start.line >= element.LineNumberFrom && diagnostic.range.end.line <= element.LineNumberTo) {
            return element;
        }
    }
    return undefined;
}

export function adjustDiagnosticLine(
    diagnostic: Diagnostic,
    sourceMaps: SourceMap[]
): Diagnostic {
    let adjustedLine = diagnostic.range.start.line;

    const sourceMap = findIncludeRange(diagnostic, sourceMaps);
    if (sourceMap) {
        // Inside an include block
        adjustedLine = diagnostic.range.start.line - sourceMap.Delta;
        return {
            ...diagnostic,
            range: {
                start: { line: adjustedLine, character: 0 },
                end: { line: adjustedLine, character: sourceMap.IncludeLength || diagnostic.range.end.character }
            },
            message: `[${sourceMap.IncludeId}] ${diagnostic.message}`
        };
    }

    // Outside include blocks — adjust based on cumulative Delta before this line
    const totalDeltaBefore = sourceMaps
        .filter(map => map.LineNumberTo < diagnostic.range.start.line)
        .reduce((sum, map) => sum + map.Delta, 0);

    adjustedLine = diagnostic.range.start.line - totalDeltaBefore;

    return {
        ...diagnostic,
        range: {
            start: { line: adjustedLine, character: diagnostic.range.start.character },
            end: { line: adjustedLine, character: diagnostic.range.end.character }
        }
    };
}

export function resolveIncludesAndGenerateSourceMap(
    originalScript: string,
    includeContents: IncludeContent
): { script: string; SourceMaps: SourceMap[] } {
    const lines = originalScript.split("\n");
    const resultLines: string[] = [];
    const sourceMaps: SourceMap[] = [];

    let globalLineNumber = 0;
    const delta = globalLineNumber;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const includeMatch = line.match(/\/\/\/\s*<include\s+includeId="(.*?)">/);

        if (includeMatch) {
            const includeId = includeMatch[1];
            const includeCode = includeContents[includeId]?.split("\n") || [];

            let includeStartLine = globalLineNumber;
            //let includeLength = includeCode.length - 1;

            for (const incLine of includeCode) {
                resultLines.push(incLine);
                //includeLength += incLine.length;
                globalLineNumber++;
            }

            const includeEndLine = globalLineNumber;

            sourceMaps.push({
                LineNumberFrom: includeStartLine,
                LineNumberTo: includeEndLine - 1,
                Delta: delta,
                IncludeId: includeId,
                IncludedFrom: [`:${i}`],
                IncludeLength: includeMatch[0].length
            });

            includeStartLine = globalLineNumber;


        } else {
            resultLines.push(lines[i]);
            globalLineNumber++;
        }
    }

    return {
        script: resultLines.join("\n"),
        SourceMaps: sourceMaps
    };
}
