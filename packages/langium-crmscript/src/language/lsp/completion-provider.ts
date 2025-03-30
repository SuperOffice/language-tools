import { AstNodeDescription } from "langium";
import { CompletionValueItem, DefaultCompletionProvider } from "langium/lsp";

export class CrmscriptCompletionProvider extends DefaultCompletionProvider  {
    protected override createReferenceCompletionItem(nodeDescription: AstNodeDescription): CompletionValueItem {
        const kind = this.nodeKindProvider.getCompletionItemKind(nodeDescription);
        const documentation = this.getReferenceDocumentation(nodeDescription);
        if(nodeDescription.type == "MethodMember"){
            return { 
                nodeDescription, 
                kind, 
                documentation, 
                detail: nodeDescription.type + "()", 
                sortText: '0' 
            }; 
        }
        return {
            nodeDescription,
            kind,
            documentation,
            detail: nodeDescription.name,
            sortText: '0'
        };
    }
}