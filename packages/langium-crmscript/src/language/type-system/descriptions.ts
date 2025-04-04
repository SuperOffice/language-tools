
import { AstNode } from "langium";
import {
    BooleanExpression,
    Class,
    Enum,
    EnumMember,
    NumberExpression,
    StringExpression
} from "../generated/ast.js"

export type TypeDescription =
    | NilTypeDescription
    | VoidTypeDescription
    | BooleanTypeDescription
    | StringTypeDescription
    | IntegerTypeDescription
    | FloatTypeDescription
    | FunctionTypeDescription
    | ClassTypeDescription
    | EnumTypeDescription
    | EnumMemberTypeDescription
    | ErrorType
    ;

export interface NilTypeDescription {
    readonly $type: "nil"
}

export function createNilType(): NilTypeDescription {
    return {
        $type: "nil"
    };
}

export function isNilType(item: TypeDescription): item is NilTypeDescription {
    return item.$type === "nil";
}

export interface VoidTypeDescription {
    readonly $type: "void"
}

export function createVoidType(): VoidTypeDescription {
    return {
        $type: "void"
    }
}

export function isVoidType(item: TypeDescription): item is VoidTypeDescription {
    return item.$type === "void";
}
export interface BooleanTypeDescription {
    readonly $type: "Bool"
    readonly literal?: BooleanExpression
}

export function createBooleanType(literal?: BooleanExpression): BooleanTypeDescription {
    return {
        $type: "Bool",
        literal
    };
}

export function isBooleanType(item: TypeDescription): item is BooleanTypeDescription {
    return item.$type === "Bool";
}

export interface StringTypeDescription {
    readonly $type: "String"
    readonly literal?: StringExpression
}

export function createStringType(literal?: StringExpression): StringTypeDescription {
    return {
        $type: "String",
        literal
    };
}

export function isStringType(item: TypeDescription): item is StringTypeDescription {
    return item.$type === "String";
}

export interface IntegerTypeDescription {
    readonly $type: "Integer",
    readonly literal?: NumberExpression
}

export function createIntegerType(literal?: NumberExpression): IntegerTypeDescription {
    return {
        $type: "Integer",
        literal
    };
}
export interface FloatTypeDescription {
    readonly $type: "Float",
    readonly literal?: NumberExpression
}

export function createFloatType(literal?: NumberExpression): FloatTypeDescription {
    return {
        $type: "Float",
        literal
    };
}

export interface FunctionTypeDescription {
    readonly $type: "function"
    readonly returnType: TypeDescription
    readonly parameters: FunctionParameter[]
}

export interface FunctionParameter {
    name: string
    type: TypeDescription
}

export function createFunctionType(returnType: TypeDescription, parameters: FunctionParameter[]): FunctionTypeDescription {
    return {
        $type: "function",
        parameters,
        returnType
    };
}

export function isFunctionType(item: TypeDescription): item is FunctionTypeDescription {
    return item.$type === "function";
}

export interface ClassTypeDescription {
    readonly $type: "class"
    readonly literal: Class
}

export function createClassType(literal: Class): ClassTypeDescription {
    return {
        $type: "class",
        literal
    };
}

export function isClassType(item: TypeDescription): item is ClassTypeDescription {
    return item.$type === "class";
}

export interface EnumTypeDescription {
    readonly $type: "enum"
    readonly literal: Enum
}

export function createEnumType(literal: Enum): EnumTypeDescription {
    return {
        $type: "enum",
        literal
    };
}

export function isEnumType(item: TypeDescription): item is EnumTypeDescription {
    return item.$type === "enum";
}



export interface EnumMemberTypeDescription {
    readonly $type: "enumMember"
    readonly literal: EnumMember
}
export function createEnumMemberType(literal: EnumMember): EnumMemberTypeDescription {
    return {
        $type: "enumMember",
        literal
    };
}

export function isEnumMemberType(item: TypeDescription): item is EnumMemberTypeDescription {
    return item.$type === "enumMember";
}
export interface ErrorType {
    readonly $type: "error"
    readonly source?: AstNode
    readonly message: string
}

export function createErrorType(message: string, source?: AstNode): ErrorType {
    return {
        $type: "error",
        message,
        source
    };
}

export function isErrorType(item: TypeDescription): item is ErrorType {
    return item.$type === "error";
}

export function typeToString(item: TypeDescription): string {
    if (isClassType(item)) {
        return item.literal.name;
    } else if (isFunctionType(item)) {
        const params = item.parameters.map(e => `${e.name}: ${typeToString(e.type)}`).join(', ');
        return `(${params}) => ${typeToString(item.returnType)}`;
    } else {
        return item.$type;
    }
}