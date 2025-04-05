import { AstNode, AstNodeDescription } from "langium";
import { CompletionValueItem, DefaultCompletionProvider } from "langium/lsp";
import { TypeDescription } from "../type-system/descriptions.js";
import { isEnumMember, isMethodMember, MethodMember } from "../generated/ast.js";
export class CrmscriptCompletionProvider extends DefaultCompletionProvider  {
    protected override createReferenceCompletionItem(nodeDescription: AstNodeDescription): CompletionValueItem {
        const kind = this.nodeKindProvider.getCompletionItemKind(nodeDescription);
        const documentation = this.getReferenceDocumentation(nodeDescription);

        if(isMethodMember(nodeDescription.node)){
            const methodMember = nodeDescription.node as MethodMember;
            
            const parametersString = methodMember.parameters.map(p => `${p.type.$refText} ${p.name}`).join(', ');
            const label = `${methodMember.name}(${parametersString})`;
            //methodMember.returnType.$refText
            return {
                nodeDescription,
                kind,
                documentation,
                detail: label,
                sortText: '0'
            };
        }

        if(isEnumMember(nodeDescription.node)){
            return {
                nodeDescription,
                kind,
                documentation,
                detail: 'Integer',
                sortText: '0'
            };
        }

        return {
            nodeDescription,
            kind,
            documentation,
            detail: nodeDescription.type,
            sortText: '0'
        };
    }

      private getTypeCache(): Map<AstNode, TypeDescription> {
            return new Map();
        }
}