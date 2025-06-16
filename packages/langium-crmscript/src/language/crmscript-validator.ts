import { MultiMap, NamedAstNode, stream, Stream, type AstNode, type ValidationAcceptor, type ValidationChecks } from 'langium';
import { ConstructorCall, Grammar, IfStatement, Include, isClass, isEnum, MemberCall, MethodMember, WhileStatement, type BinaryExpression, type CrmscriptAstType, type VariableDeclaration } from './generated/ast.js';
import type { CrmscriptServices } from './crmscript-module.js';
import { inferType } from './type-system/infer.js';
import { isAssignable, setErrorMessage } from './type-system/assignment.js';
import { isBooleanType, isEnumMemberType, TypeDescription, typeToString } from './type-system/descriptions.js';

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
        ],
        ConstructorCall: validator.checkConstructorCallType,
        MemberCall: validator.checkMemberCallParameters,
        IfStatement: validator.checkIfStatement,
        WhileStatement: validator.checkWhileStatement,
        Include: validator.checkIncludes,
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
            setErrorMessage(right, left, expr, accept);
        }
    }

    checkVariableDeclaration(decl: VariableDeclaration, accept: ValidationAcceptor): void {
        if (decl.type && decl.value) {
            const map = this.getTypeCache();
            const left = inferType(decl.type.$nodeDescription?.node, map);
            const right = inferType(decl.value, map);

            if (!isAssignable(right, left)) {
                accept('error', `VariableDeclaration: Type '${typeToString(right)}' is not assignable to type '${typeToString(left)}'.`, {
                    node: decl,
                    property: 'value'
                });
            }
        }
    }

    checkConstructorCallType(call: ConstructorCall, accept: ValidationAcceptor) {
        const typeDecl = call.type?.ref;
        if (!typeDecl || !isClass(typeDecl)) return;

        const constructors = typeDecl.constructors ?? [];

        const matchingCtor = constructors.find(ctor =>
            ctor.parameters.length === call.params.length //&&
            //ctor.params.every((param, i) => areTypesCompatible(param.type.ref, argTypes[i]))
        );

        if (!matchingCtor) {
            accept('error', `No matching constructor for ${typeDecl.name} accepting ${call.params.length} parameters`, {
                node: call,
                property: 'type'
            });
        }
    }

    checkMemberCallParameters(memberCall: MemberCall, accept: ValidationAcceptor) {

        const methodMember = memberCall.element?.ref as MethodMember;
        if (!methodMember) return;
        if (!methodMember.parameters) return;

        if (methodMember.parameters.length != memberCall.arguments.length) {
            accept('error', `Method requires ${methodMember.parameters.length} arguments`, {
                node: memberCall,
                property: 'arguments'
            });
        }

        else {
            for (let i = 0; i < memberCall.arguments.length; i++) {
                {
                    const map = this.getTypeCache();

                    const inferredArgumentType = inferType(memberCall.arguments[i], map);

                    const inferParameterType = inferType(methodMember.parameters[i].type.$nodeDescription?.node, map);

                    if (isEnum(inferParameterType)) {
                        accept('error', `Type '${typeToString(inferredArgumentType)}' is not assignable to type '${typeToString(inferParameterType)}'.`, {
                            node: memberCall.arguments[i],
                            property: 'arguments'
                        });
                    } //Enum is a valid type, so we skip it
                    //Override the validation, as enums always is an integer
                    else if (isEnumMemberType(inferredArgumentType)) {
                        if (methodMember.parameters[i].type.$refText != 'Integer') {
                            accept('error', `Type Integer is not assignable to type '${methodMember.parameters[i].type.$refText}'.`, {
                                node: memberCall.arguments[i],
                                property: 'arguments'
                            });
                        }
                    }
                    //else if (methodMember.parameters[i].type.$refText != inferredArgumentType.$type) {
                    else if (!isAssignable(inferredArgumentType, inferParameterType)) {
                        accept('error', `Type '${typeToString(inferredArgumentType)}' is not assignable to type '${methodMember.parameters[i].type.$refText}'.`, {
                            node: memberCall.arguments[i],
                            property: 'arguments'
                        });

                    }
                }
            }
        }
    }

    checkIfStatement(ifStatement: IfStatement, accept: ValidationAcceptor): void {
        const map = this.getTypeCache();
        const conditionType = inferType(ifStatement.condition, map);

        if (!isBooleanType(conditionType)) {
            accept('error', `Condition must be of type 'Bool'.`, {
                node: ifStatement,
                property: 'condition'
            });
        }
    }

    checkWhileStatement(whileStatement: WhileStatement, accept: ValidationAcceptor): void {
        const map = this.getTypeCache();
        const conditionType = inferType(whileStatement.condition, map);

        if (!isBooleanType(conditionType)) {
            accept('error', `Condition must be of type 'Bool'.`, {
                node: whileStatement,
                property: 'condition'
            });
        }
    }

    checkIncludes(include: Include, accept: ValidationAcceptor): void {
        if (!include.file) {
            return;
        }
        else {
            accept('info', `This is an include => '${include.file}'.`, { node: include, property: 'file' });
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
