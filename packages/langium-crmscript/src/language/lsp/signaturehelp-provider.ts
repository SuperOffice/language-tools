import { AstNode, CstNode, CstUtils, MaybePromise } from 'langium';
import { AbstractSignatureHelpProvider, } from 'langium/lsp';
import { ParameterInformation, SignatureHelp, SignatureInformation} from 'vscode-languageserver';
import { ConstructorCall, isConstructorCall } from '../generated/ast.js';


export const DefaultNameRegexp = /^[\w\p{L}]$/u;

export class CrmscriptSignatureHelpProvider extends AbstractSignatureHelpProvider  {
    
    protected override getSignatureFromElement(element: AstNode): MaybePromise<SignatureHelp | undefined> {
        if (isConstructorCall(element)) {
            return this.generateSignatureHelpFromConstructors(element);
        }        

        // const signatureHelp: SignatureHelp = { signatures: [], activeSignature: undefined, activeParameter: undefined };

        // const constructorCall = element as ConstructorCall;
        // constructorCall.type.ref?.constructors.forEach(constructorElements => {
        //         const label = `${constructorElements.$container.name}(` +
        //         constructorElements.parameters.map(p => `${p.type.$refText} ${p.name}`).join(', ') +
        //     `)`;

        //     const documentation = CstUtils.findCommentNode(constructorElements.$cstNode, ['ML_COMMENT']);
            
        //     const option = SignatureInformation.create(label, documentation?.text, ParameterInformation.create([constructorCall.type.$refText.length + 1, label.length - 1]));
        //     signatureHelp.signatures.push(option);
        // });
        // return signatureHelp;
        return undefined;
    }

    generateSignatureHelpFromConstructors(element: AstNode): MaybePromise<SignatureHelp | undefined> {
        const signatureHelp: SignatureHelp = { signatures: [], activeSignature: undefined, activeParameter: undefined };
        const constructorCall = element as ConstructorCall;
        constructorCall.type.ref?.constructors.forEach(constructorElements => {
                const label = `${constructorElements.$container.name}(` +
                constructorElements.parameters.map(p => `${p.type.$refText} ${p.name}`).join(', ') +
            `)`;

            const documentationText = this.getDocumentationTextFromNode(constructorElements.$cstNode);

            const option = SignatureInformation.create(label, documentationText, ParameterInformation.create([constructorCall.type.$refText.length + 1, label.length - 1]));
            signatureHelp.signatures.push(option);
        });
        return signatureHelp;
    }

    getDocumentationTextFromNode(node: CstNode | undefined): string {
        const documentationNode = CstUtils.findCommentNode(node, ['ML_COMMENT']);
        let documentationText = "Missing documentation";
        if(documentationNode){
            const match = documentationNode.text.match(/\/\*\*([\s\S]*?)\*\//);
            if (match) {
                documentationText = match[1].trim()
            }
        }
        return documentationText;
    }
}

