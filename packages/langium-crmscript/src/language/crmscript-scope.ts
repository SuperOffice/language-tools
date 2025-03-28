import { DefaultScopeProvider, EMPTY_SCOPE, ReferenceInfo, Scope } from "langium";
import { Class, isMemberCall } from "./generated/ast.js";
import { isClassType } from "./type-system/descriptions.js";
import { getClassChain, inferType } from "./type-system/infer.js";
import { LangiumServices } from "langium/lsp";

export class CrmscriptScopeProvider extends DefaultScopeProvider {

    constructor(services: LangiumServices) {
        super(services);
    }

    // override getScope(context: ReferenceInfo): Scope {
    //     // target element of member calls
    //     if (context.property === 'element') {
    //         // for now, `this` and `super` simply target the container class type
    //         if (context.reference.$refText === 'this') {
    //             const classItem = AstUtils.getContainerOfType(context.container, isClass);
    //             if (classItem) {
    //                 return this.scopeClassMembers(classItem);
    //             } else {
    //                 return EMPTY_SCOPE;
    //             }
    //         }
    //         const memberCall = context.container as MemberCall;
    //         const previous = memberCall.previous;
    //         if (!previous) {
    //             return super.getScope(context);
    //         }
    //         const previousType = inferType(previous, new Map());
    //         if (isClassType(previousType)) {
    //             return this.scopeClassMembers(previousType.literal);
    //         }
    //         return EMPTY_SCOPE;
    //     }
    //     return super.getScope(context);
    // }

    // private scopeClassMembers(classItem: Class): Scope {
    //     const allMembers = getClassChain(classItem).flatMap(e => e.members);
    //     return this.createScopeForNodes(allMembers);
    // }

    override getScope(context: ReferenceInfo): Scope {
        // target element of member calls
        if (context.property === 'element' && isMemberCall(context.container)) {
            const memberCall = context.container;
            const previous = memberCall.previous;
            if (!previous) {
                return super.getScope(context);
            }
            const previousType = inferType(previous, new Map());
            if (isClassType(previousType)) {
                return this.scopeClassMembers(previousType.literal);
            }
            // When the target of our member call isn't a class
            // This means it is either a primitive type or a type resolution error
            // Simply return an empty scope
            return EMPTY_SCOPE;
        }
        return super.getScope(context);
    }

    private scopeClassMembers(classItem: Class): Scope {
        // Since Lox allows class-inheritance,
        // we also need to look at all members of possible super classes for scoping
        const allMembers = getClassChain(classItem).flatMap(e => e.members);
        return this.createScopeForNodes(allMembers);
    }
}