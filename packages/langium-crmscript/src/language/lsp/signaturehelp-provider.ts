import { AstNode, CstNode, CstUtils, MaybePromise } from 'langium';
import { AbstractSignatureHelpProvider, } from 'langium/lsp';
import { ParameterInformation, SignatureHelp, SignatureInformation} from 'vscode-languageserver';
import { ConstructorCall, isConstructorCall, isMemberCall, MemberCall, MethodMember } from '../generated/ast.js';


export const DefaultNameRegexp = /^[\w\p{L}]$/u;

export class CrmscriptSignatureHelpProvider extends AbstractSignatureHelpProvider  {
    
    protected override getSignatureFromElement(element: AstNode): MaybePromise<SignatureHelp | undefined> {
        if (isConstructorCall(element)) {
            return this.generateSignatureHelpFromConstructors(element);
        }        
        if(isMemberCall(element)){
            return this.generateSignatureHelpFromMemberCall(element);
        }
        return undefined;
    }

    generateSignatureHelpFromConstructors(element: AstNode): MaybePromise<SignatureHelp | undefined> {
        const signatureHelp: SignatureHelp = { signatures: [], activeSignature: undefined, activeParameter: undefined };
        const constructorCall = element as ConstructorCall;
        
        const constructors = constructorCall.type.ref?.constructors;
        if (!constructors) return signatureHelp;

        for (const constructorElements of constructors) {
            const parametersString = constructorElements.parameters.map(p => `${p.type.$refText} ${p.name}`).join(', ');
            const label = `${constructorElements.$container.name}(${parametersString})`;

            const documentationText = this.getDocumentationTextFromNode(constructorElements.$cstNode);
            
            const option = SignatureInformation.create(label, documentationText, ParameterInformation.create([constructorCall.type.$refText.length + 1, label.length - 1]));
            signatureHelp.signatures.push(option);
        }
  
        return signatureHelp;
    }

    generateSignatureHelpFromMemberCall(element: AstNode): MaybePromise<SignatureHelp | undefined> {
        const signatureHelp: SignatureHelp = { signatures: [], activeSignature: undefined, activeParameter: undefined };
        const memberCall = element as MemberCall;
        
        const methodMember = memberCall.element?.ref as MethodMember;
        if (!methodMember) return signatureHelp;

        const parametersString = methodMember.parameters.map(p => `${p.type.$refText} ${p.name}`).join(', ');
        const label = `${methodMember.name}(${parametersString})`;
        
        const documentationText = this.getDocumentationTextFromNode(methodMember.$cstNode);

        let start = methodMember.name.length + 1;
        let end = start + parametersString.length;
        if(parametersString.length === 0){
            start = 0;
            end = 0;
        }

        const option = SignatureInformation.create(label, documentationText, ParameterInformation.create([start, end]));
        signatureHelp.signatures.push(option);
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

