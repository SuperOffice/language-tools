/******************************************************************************
 * This file was generated by langium-cli 3.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export const CrmscriptTerminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    NUMBER: /[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?/,
    STRING: /"[^"]*"|'[^']*'/,
    EJSCRIPT_START: /%EJSCRIPT_START%/,
    EJSCRIPT_END: /%EJSCRIPT_END%/,
    SCRIPT_END: /%>/,
    SCRIPT_START: /<%/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};

export type CrmscriptTerminalNames = keyof typeof CrmscriptTerminals;

export type CrmscriptKeywordNames = 
    | "!"
    | "!="
    | "("
    | ")"
    | "*"
    | "+"
    | ","
    | "-"
    | "."
    | "/"
    | ";"
    | "<"
    | "<="
    | "="
    | "=="
    | ">"
    | ">="
    | "Class"
    | "and"
    | "else"
    | "false"
    | "for"
    | "if"
    | "nil"
    | "or"
    | "print"
    | "return"
    | "this"
    | "true"
    | "while"
    | "{"
    | "}";

export type CrmscriptTokenNames = CrmscriptTerminalNames | CrmscriptKeywordNames;

export type ClassMember = FieldMember | MethodMember;

export const ClassMember = 'ClassMember';

export function isClassMember(item: unknown): item is ClassMember {
    return reflection.isInstance(item, ClassMember);
}

export type DefinitionElement = FunctionDeclaration | NamedElement;

export const DefinitionElement = 'DefinitionElement';

export function isDefinitionElement(item: unknown): item is DefinitionElement {
    return reflection.isInstance(item, DefinitionElement);
}

export type Expression = BinaryExpression | BooleanExpression | MemberCall | NilExpression | NumberExpression | StringExpression | UnaryExpression;

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export type NamedElement = Class | FieldMember | FunctionDeclaration | MethodMember | VariableDeclaration;

export const NamedElement = 'NamedElement';

export function isNamedElement(item: unknown): item is NamedElement {
    return reflection.isInstance(item, NamedElement);
}

export type Statement = Expression | ExpressionBlock | ForStatement | IfStatement | PrintStatement | ReturnStatement | WhileStatement;

export const Statement = 'Statement';

export function isStatement(item: unknown): item is Statement {
    return reflection.isInstance(item, Statement);
}

export type Type = FunctionDeclaration | NamedElement;

export const Type = 'Type';

export function isType(item: unknown): item is Type {
    return reflection.isInstance(item, Type);
}

export interface BinaryExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'BinaryExpression';
    left: Expression;
    operator: '!=' | '*' | '+' | '-' | '/' | '<' | '<=' | '=' | '==' | '>' | '>=' | 'and' | 'or';
    right: Expression;
}

export const BinaryExpression = 'BinaryExpression';

export function isBinaryExpression(item: unknown): item is BinaryExpression {
    return reflection.isInstance(item, BinaryExpression);
}

export interface BooleanExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'BooleanExpression';
    value: boolean;
}

export const BooleanExpression = 'BooleanExpression';

export function isBooleanExpression(item: unknown): item is BooleanExpression {
    return reflection.isInstance(item, BooleanExpression);
}

export interface Class extends AstNode {
    readonly $container: DefinitionUnit | ExpressionBlock | ForStatement | Grammar;
    readonly $type: 'Class';
    members: Array<ClassMember>;
    name: string;
    parameters: Array<Parameter>;
}

export const Class = 'Class';

export function isClass(item: unknown): item is Class {
    return reflection.isInstance(item, Class);
}

export interface DefinitionUnit extends AstNode {
    readonly $type: 'DefinitionUnit';
    definitionelements: Array<DefinitionElement>;
}

export const DefinitionUnit = 'DefinitionUnit';

export function isDefinitionUnit(item: unknown): item is DefinitionUnit {
    return reflection.isInstance(item, DefinitionUnit);
}

export interface ExpressionBlock extends AstNode {
    readonly $container: ExpressionBlock | ForStatement | FunctionDeclaration | Grammar | IfStatement | WhileStatement;
    readonly $type: 'ExpressionBlock';
    statements: Array<Statement>;
    types: Array<Type>;
}

export const ExpressionBlock = 'ExpressionBlock';

export function isExpressionBlock(item: unknown): item is ExpressionBlock {
    return reflection.isInstance(item, ExpressionBlock);
}

export interface FieldMember extends AstNode {
    readonly $container: Class | DefinitionUnit | ExpressionBlock | ForStatement | Grammar;
    readonly $type: 'FieldMember';
    name: string;
    type: Reference<Class>;
}

export const FieldMember = 'FieldMember';

export function isFieldMember(item: unknown): item is FieldMember {
    return reflection.isInstance(item, FieldMember);
}

export interface ForStatement extends AstNode {
    readonly $container: ExpressionBlock | Grammar;
    readonly $type: 'ForStatement';
    block: ExpressionBlock;
    condition?: Expression;
    counter?: NamedElement;
    execution?: Expression;
}

export const ForStatement = 'ForStatement';

export function isForStatement(item: unknown): item is ForStatement {
    return reflection.isInstance(item, ForStatement);
}

export interface FunctionDeclaration extends AstNode {
    readonly $container: DefinitionUnit | ExpressionBlock | ForStatement | Grammar;
    readonly $type: 'FunctionDeclaration';
    body: ExpressionBlock;
    name: string;
    parameters: Array<Parameter>;
    returnType: Reference<Class>;
}

export const FunctionDeclaration = 'FunctionDeclaration';

export function isFunctionDeclaration(item: unknown): item is FunctionDeclaration {
    return reflection.isInstance(item, FunctionDeclaration);
}

export interface Grammar extends AstNode {
    readonly $type: 'Grammar';
    statements: Array<Statement>;
    types: Array<Type>;
}

export const Grammar = 'Grammar';

export function isGrammar(item: unknown): item is Grammar {
    return reflection.isInstance(item, Grammar);
}

export interface IfStatement extends AstNode {
    readonly $container: ExpressionBlock | Grammar;
    readonly $type: 'IfStatement';
    block: ExpressionBlock;
    condition: Expression;
    elseBlock?: ExpressionBlock;
}

export const IfStatement = 'IfStatement';

export function isIfStatement(item: unknown): item is IfStatement {
    return reflection.isInstance(item, IfStatement);
}

export interface MemberCall extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'MemberCall';
    arguments: Array<Expression>;
    element?: Reference<NamedElement>;
    explicitOperationCall: boolean;
    previous?: Expression;
}

export const MemberCall = 'MemberCall';

export function isMemberCall(item: unknown): item is MemberCall {
    return reflection.isInstance(item, MemberCall);
}

export interface MethodMember extends AstNode {
    readonly $container: Class | DefinitionUnit | ExpressionBlock | ForStatement | Grammar;
    readonly $type: 'MethodMember';
    name: string;
    parameters: Array<Parameter>;
    returnType: Reference<Class>;
}

export const MethodMember = 'MethodMember';

export function isMethodMember(item: unknown): item is MethodMember {
    return reflection.isInstance(item, MethodMember);
}

export interface NilExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'NilExpression';
    value: 'nil';
}

export const NilExpression = 'NilExpression';

export function isNilExpression(item: unknown): item is NilExpression {
    return reflection.isInstance(item, NilExpression);
}

export interface NumberExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'NumberExpression';
    value: number;
}

export const NumberExpression = 'NumberExpression';

export function isNumberExpression(item: unknown): item is NumberExpression {
    return reflection.isInstance(item, NumberExpression);
}

export interface Parameter extends AstNode {
    readonly $container: Class | FunctionDeclaration | MethodMember;
    readonly $type: 'Parameter';
    name: string;
    type: Reference<Class>;
}

export const Parameter = 'Parameter';

export function isParameter(item: unknown): item is Parameter {
    return reflection.isInstance(item, Parameter);
}

export interface PrintStatement extends AstNode {
    readonly $container: ExpressionBlock | Grammar;
    readonly $type: 'PrintStatement';
    value: StringExpression;
}

export const PrintStatement = 'PrintStatement';

export function isPrintStatement(item: unknown): item is PrintStatement {
    return reflection.isInstance(item, PrintStatement);
}

export interface ReturnStatement extends AstNode {
    readonly $container: ExpressionBlock | Grammar;
    readonly $type: 'ReturnStatement';
    value?: Expression;
}

export const ReturnStatement = 'ReturnStatement';

export function isReturnStatement(item: unknown): item is ReturnStatement {
    return reflection.isInstance(item, ReturnStatement);
}

export interface StringExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | PrintStatement | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'StringExpression';
    value: string;
}

export const StringExpression = 'StringExpression';

export function isStringExpression(item: unknown): item is StringExpression {
    return reflection.isInstance(item, StringExpression);
}

export interface UnaryExpression extends AstNode {
    readonly $container: BinaryExpression | ExpressionBlock | ForStatement | Grammar | IfStatement | MemberCall | ReturnStatement | UnaryExpression | VariableDeclaration | WhileStatement;
    readonly $type: 'UnaryExpression';
    operator: '!' | '+' | '-';
    value: Expression;
}

export const UnaryExpression = 'UnaryExpression';

export function isUnaryExpression(item: unknown): item is UnaryExpression {
    return reflection.isInstance(item, UnaryExpression);
}

export interface VariableDeclaration extends AstNode {
    readonly $container: DefinitionUnit | ExpressionBlock | ForStatement | Grammar;
    readonly $type: 'VariableDeclaration';
    assignment: boolean;
    name: string;
    type: Reference<Class>;
    value?: Expression;
}

export const VariableDeclaration = 'VariableDeclaration';

export function isVariableDeclaration(item: unknown): item is VariableDeclaration {
    return reflection.isInstance(item, VariableDeclaration);
}

export interface WhileStatement extends AstNode {
    readonly $container: ExpressionBlock | Grammar;
    readonly $type: 'WhileStatement';
    block: ExpressionBlock;
    condition: Expression;
}

export const WhileStatement = 'WhileStatement';

export function isWhileStatement(item: unknown): item is WhileStatement {
    return reflection.isInstance(item, WhileStatement);
}

export type CrmscriptAstType = {
    BinaryExpression: BinaryExpression
    BooleanExpression: BooleanExpression
    Class: Class
    ClassMember: ClassMember
    DefinitionElement: DefinitionElement
    DefinitionUnit: DefinitionUnit
    Expression: Expression
    ExpressionBlock: ExpressionBlock
    FieldMember: FieldMember
    ForStatement: ForStatement
    FunctionDeclaration: FunctionDeclaration
    Grammar: Grammar
    IfStatement: IfStatement
    MemberCall: MemberCall
    MethodMember: MethodMember
    NamedElement: NamedElement
    NilExpression: NilExpression
    NumberExpression: NumberExpression
    Parameter: Parameter
    PrintStatement: PrintStatement
    ReturnStatement: ReturnStatement
    Statement: Statement
    StringExpression: StringExpression
    Type: Type
    UnaryExpression: UnaryExpression
    VariableDeclaration: VariableDeclaration
    WhileStatement: WhileStatement
}

export class CrmscriptAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return [BinaryExpression, BooleanExpression, Class, ClassMember, DefinitionElement, DefinitionUnit, Expression, ExpressionBlock, FieldMember, ForStatement, FunctionDeclaration, Grammar, IfStatement, MemberCall, MethodMember, NamedElement, NilExpression, NumberExpression, Parameter, PrintStatement, ReturnStatement, Statement, StringExpression, Type, UnaryExpression, VariableDeclaration, WhileStatement];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case BinaryExpression:
            case BooleanExpression:
            case MemberCall:
            case NilExpression:
            case NumberExpression:
            case StringExpression:
            case UnaryExpression: {
                return this.isSubtype(Expression, supertype);
            }
            case Class:
            case VariableDeclaration: {
                return this.isSubtype(NamedElement, supertype);
            }
            case Expression:
            case ExpressionBlock:
            case ForStatement:
            case IfStatement:
            case PrintStatement:
            case ReturnStatement:
            case WhileStatement: {
                return this.isSubtype(Statement, supertype);
            }
            case FieldMember:
            case MethodMember: {
                return this.isSubtype(ClassMember, supertype) || this.isSubtype(NamedElement, supertype);
            }
            case FunctionDeclaration: {
                return this.isSubtype(DefinitionElement, supertype) || this.isSubtype(NamedElement, supertype) || this.isSubtype(Type, supertype);
            }
            case NamedElement: {
                return this.isSubtype(DefinitionElement, supertype) || this.isSubtype(Type, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'FieldMember:type':
            case 'FunctionDeclaration:returnType':
            case 'MethodMember:returnType':
            case 'Parameter:type':
            case 'VariableDeclaration:type': {
                return Class;
            }
            case 'MemberCall:element': {
                return NamedElement;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case BinaryExpression: {
                return {
                    name: BinaryExpression,
                    properties: [
                        { name: 'left' },
                        { name: 'operator' },
                        { name: 'right' }
                    ]
                };
            }
            case BooleanExpression: {
                return {
                    name: BooleanExpression,
                    properties: [
                        { name: 'value', defaultValue: false }
                    ]
                };
            }
            case Class: {
                return {
                    name: Class,
                    properties: [
                        { name: 'members', defaultValue: [] },
                        { name: 'name' },
                        { name: 'parameters', defaultValue: [] }
                    ]
                };
            }
            case DefinitionUnit: {
                return {
                    name: DefinitionUnit,
                    properties: [
                        { name: 'definitionelements', defaultValue: [] }
                    ]
                };
            }
            case ExpressionBlock: {
                return {
                    name: ExpressionBlock,
                    properties: [
                        { name: 'statements', defaultValue: [] },
                        { name: 'types', defaultValue: [] }
                    ]
                };
            }
            case FieldMember: {
                return {
                    name: FieldMember,
                    properties: [
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case ForStatement: {
                return {
                    name: ForStatement,
                    properties: [
                        { name: 'block' },
                        { name: 'condition' },
                        { name: 'counter' },
                        { name: 'execution' }
                    ]
                };
            }
            case FunctionDeclaration: {
                return {
                    name: FunctionDeclaration,
                    properties: [
                        { name: 'body' },
                        { name: 'name' },
                        { name: 'parameters', defaultValue: [] },
                        { name: 'returnType' }
                    ]
                };
            }
            case Grammar: {
                return {
                    name: Grammar,
                    properties: [
                        { name: 'statements', defaultValue: [] },
                        { name: 'types', defaultValue: [] }
                    ]
                };
            }
            case IfStatement: {
                return {
                    name: IfStatement,
                    properties: [
                        { name: 'block' },
                        { name: 'condition' },
                        { name: 'elseBlock' }
                    ]
                };
            }
            case MemberCall: {
                return {
                    name: MemberCall,
                    properties: [
                        { name: 'arguments', defaultValue: [] },
                        { name: 'element' },
                        { name: 'explicitOperationCall', defaultValue: false },
                        { name: 'previous' }
                    ]
                };
            }
            case MethodMember: {
                return {
                    name: MethodMember,
                    properties: [
                        { name: 'name' },
                        { name: 'parameters', defaultValue: [] },
                        { name: 'returnType' }
                    ]
                };
            }
            case NilExpression: {
                return {
                    name: NilExpression,
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case NumberExpression: {
                return {
                    name: NumberExpression,
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case Parameter: {
                return {
                    name: Parameter,
                    properties: [
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case PrintStatement: {
                return {
                    name: PrintStatement,
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case ReturnStatement: {
                return {
                    name: ReturnStatement,
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case StringExpression: {
                return {
                    name: StringExpression,
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case UnaryExpression: {
                return {
                    name: UnaryExpression,
                    properties: [
                        { name: 'operator' },
                        { name: 'value' }
                    ]
                };
            }
            case VariableDeclaration: {
                return {
                    name: VariableDeclaration,
                    properties: [
                        { name: 'assignment', defaultValue: false },
                        { name: 'name' },
                        { name: 'type' },
                        { name: 'value' }
                    ]
                };
            }
            case WhileStatement: {
                return {
                    name: WhileStatement,
                    properties: [
                        { name: 'block' },
                        { name: 'condition' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}

export const reflection = new CrmscriptAstReflection();
