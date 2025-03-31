import { MultiMap, NamedAstNode, stream, Stream, type AstNode, type ValidationAcceptor, type ValidationChecks } from 'langium';
import { Grammar, type BinaryExpression, type CrmscriptAstType, type VariableDeclaration } from './generated/ast.js';
import type { CrmscriptServices } from './crmscript-module.js';
import { inferType } from './type-system/infer.js';
import { isAssignable } from './type-system/assigment.js';
import { TypeDescription, typeToString } from './type-system/descriptions.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: CrmscriptServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CrmscriptValidator;
    const checks: ValidationChecks<CrmscriptAstType> = {
        VariableDeclaration: validator.checkVariableDeclaration,
        BinaryExpression: validator.checkBinaryExpression,
        Grammar: [
            validator.checkUniqueVariableName
        ]
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CrmscriptValidator {
    checkBinaryExpression(expr: BinaryExpression, accept: ValidationAcceptor): void {
        const map = this.getTypeCache();
        const left = inferType(expr.left, map);
        const right = inferType(expr.right, map);
        if (!isAssignable(right, left)) {
            accept('error', `Type '${typeToString(right)}' is not assignable to type '${typeToString(left)}'.`, {
                node: expr,
                property: 'right'
            });
        }
    }

    checkVariableDeclaration(decl: VariableDeclaration, accept: ValidationAcceptor): void {    
    if (decl.type && decl.value) {
            const map = this.getTypeCache();
            const left = inferType(decl.type.$nodeDescription?.node, map);
            const right = inferType(decl.value, map);
            if (!isAssignable(right, left)) {
                accept('error', `Type '${typeToString(right)}' is not assignable to type '${typeToString(left)}'.`, {
                    node: decl,
                    property: 'value'
                });
            }
        }
    }

    private getTypeCache(): Map<AstNode, TypeDescription> {
        return new Map();
    }

    checkUniqueVariableName(grammar: Grammar, accept: ValidationAcceptor): void {
        const extractor = (grammar: Grammar) => stream(grammar.types);
        this.checkUniqueName(grammar, accept, extractor, 'type');
    }

    private checkUniqueName(grammar: Grammar, accept: ValidationAcceptor, extractor: (grammar: Grammar) => Stream<NamedAstNode>, uniqueObjName: string): void {
        const map = new MultiMap<string, { name: string } & AstNode>();
        extractor(grammar).forEach(e => map.add(e.name, e));

        for (const [, types] of map.entriesGroupedByKey()) {
            if (types.length > 1) {
                types.forEach(e => {
                    accept('error', `A ${uniqueObjName}'s name has to be unique.`, { node: e, property: 'name' });
                });
            }
        }
    }
}
