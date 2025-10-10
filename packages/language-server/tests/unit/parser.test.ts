import { describe, it, expect } from 'vitest';
import { adjustDiagnosticLine, findIncludeRange, resolveIncludesAndGenerateSourceMap, SourceMap } from '../../src/parser/parser';
import { Diagnostic, Range } from "@volar/language-server";

interface ScriptData {
    Script: string;
    IncludeContents: { [includeId: string]: string };
    ExpectedScript: string;
    ExpectedSourceMaps: SourceMap[];
    ExpectedDiagnostics?: Diagnostic[];
}


function createScriptAndSourceMapTest(): ScriptData {
    /* READABLE FORMAT:

    const foo = 1;\n
    /// <include includeId=\"ts-lib\">\n
    const foo2 = 1;\n
    /// <include includeId=\"ts-printContext\">
    */
    const originalScript = "const foo = 1;\n/// <include includeId=\"ts-lib\">\nconst foo2 = 1;\n/// <include includeId=\"ts-printContext\">\nconst bar = \"123\";";

    const include1 = `cons myIncludeVar = "This String is included from other file!";\nconsole.log(myIncludeVar);`;
    const include2 = `context.result.body = JSON.stringify(context);`;

    const includeContents = {
        "ts-lib": include1,
        "ts-printContext": include2
    };

    const expectedScript = originalScript.replace("/// <include includeId=\"ts-lib\">", include1).replace("/// <include includeId=\"ts-printContext\">", include2);

    const expectedSourceMaps = [
        { LineNumberFrom: 1, LineNumberTo: 2, Delta: 0, IncludedFrom: [":1"], IncludeLength: "/// <include includeId=\"ts-lib\">".length, IncludeId: "ts-lib" },
        { LineNumberFrom: 4, LineNumberTo: 4, Delta: 0, IncludedFrom: [":3"], IncludeLength: "/// <include includeId=\"ts-printContext\">".length, IncludeId: "ts-printContext" }
    ];

    const expectedDiagnostics = [
        Diagnostic.create(Range.create(1, 0, 1, "/// <include includeId=\"ts-lib\">".length), "[ts-lib] const is not valid. It should be const!")
    ];

    return { Script: originalScript, IncludeContents: includeContents, ExpectedScript: expectedScript, ExpectedSourceMaps: expectedSourceMaps, ExpectedDiagnostics: expectedDiagnostics };
}

describe('Parser utilities', () => {
    it('Check if diagnostic is in include range', () => {

        const testData = createScriptAndSourceMapTest();
        if (testData.ExpectedDiagnostics && testData.ExpectedDiagnostics.length > 0) {
            const result = findIncludeRange(testData.ExpectedDiagnostics[0], testData.ExpectedSourceMaps);
            expect(result).not.toBeUndefined();
        } else {
            throw new Error("ExpectedDiagnostics is undefined or empty");
        }
    });

    it('parse script produce editedScript and assert script', () => {
        const testData = createScriptAndSourceMapTest();
        const result = resolveIncludesAndGenerateSourceMap(testData.Script, testData.IncludeContents);
        expect(result.script).toBe(testData.ExpectedScript);
    });

    it('parse script produce editedScript and assert sourceMap', () => {
        const testData = createScriptAndSourceMapTest();
        const result = resolveIncludesAndGenerateSourceMap(testData.Script, testData.IncludeContents);
        expect(result.SourceMaps).toEqual(testData.ExpectedSourceMaps);
    });


    it('Match diagnostics inside include range', () => {
        const testData = createScriptAndSourceMapTest();

        if (testData.ExpectedDiagnostics) {

            const insideDiagnostics = Diagnostic.create(Range.create(1, 0, 1, 4), "const is not valid. It should be const!");

            const adjusted = adjustDiagnosticLine(insideDiagnostics, testData.ExpectedSourceMaps);
            expect(adjusted.range).toEqual(testData.ExpectedDiagnostics[0].range);
        }
    });

    it('Match diagnostics outside include range', () => {
        const testData = createScriptAndSourceMapTest();

        if (testData.ExpectedDiagnostics) {

            const outsideDiagnostics = Diagnostic.create(Range.create(3, 0, 3, 4), "Something is wrong but its outside an includes so who cares!");
            const adjusted = adjustDiagnosticLine(outsideDiagnostics, testData.ExpectedSourceMaps);

            expect(adjusted.range).toEqual(outsideDiagnostics.range);
        }
    });
});
