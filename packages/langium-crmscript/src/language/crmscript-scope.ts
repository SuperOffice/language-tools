import { DefaultScopeProvider, EMPTY_SCOPE, ReferenceInfo, Scope } from "langium";
import { Class, Enum, MemberCall } from "./generated/ast.js";
import { isClassType, isEnumType } from "./type-system/descriptions.js";
import { getClassChain, getEnumChain, inferType } from "./type-system/infer.js";
import { LangiumServices } from "langium/lsp";

export class CrmscriptScopeProvider extends DefaultScopeProvider {

    constructor(services: LangiumServices) {
        super(services);
    }

    override getScope(context: ReferenceInfo): Scope {
        // target element of member calls
        if (context.property === 'element') {
            const memberCall = context.container as MemberCall;
            const previous = memberCall.previous;
            if (!previous) {
                return super.getScope(context);
            }
            const previousType = inferType(previous, new Map());
            if (isClassType(previousType)) {
                return this.scopeClassMembers(previousType.literal);
            }
            if (isEnumType(previousType)) {
                return this.scopeEnumMembers(previousType.literal);
            }
            return EMPTY_SCOPE;
        }
        return super.getScope(context);
    }

    // override getScope(context: ReferenceInfo): Scope {
    //     // target element of member calls
    //     if (context.property === 'element' && isMemberCall(context.container)) {
    //         const memberCall = context.container;
    //         const previous = memberCall.previous;
    //         if (!previous) {
    //             return super.getScope(context);
    //         }
    //         const previousType = inferType(previous, new Map());
    //         if (isClassType(previousType)) {
    //             return this.scopeClassMembers(previousType.literal);
    //         }
    //         // When the target of our member call isn't a class
    //         // This means it is either a primitive type or a type resolution error
    //         // Simply return an empty scope
    //         return EMPTY_SCOPE;
    //     }
    //     return super.getScope(context);
    // }

    private scopeClassMembers(classItem: Class): Scope {
        const allMembers = getClassChain(classItem).flatMap(e => e.members);
        return this.createScopeForNodes(allMembers);
    }

    private scopeEnumMembers(enumItem: Enum): Scope {
        const allMembers = getEnumChain(enumItem).flatMap(e => e.enumMembers);
        return this.createScopeForNodes(allMembers);
    }
}