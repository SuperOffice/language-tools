import type { AstNode, ValidationAcceptor, ValidationChecks } from 'langium';
import type { BinaryExpression, CrmscriptAstType, VariableDeclaration } from './generated/ast.js';
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
        BinaryExpression: validator.checkBinaryExpression
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


}
