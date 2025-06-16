import { AstNode, AstNodeDescription, DefaultScopeComputation, LangiumDocument } from "langium";
import { Grammar } from "./generated/ast.js";

export class CrmscriptScopeComputation extends DefaultScopeComputation {
    override async computeExports(document: LangiumDocument<AstNode>): Promise<AstNodeDescription[]> {
        const grammar = document.parseResult.value as Grammar;
        if (!grammar.types) {
            return [];
        }
        return grammar.types
            .map(p => this.descriptions.createDescription(p, p.name));
    }
}