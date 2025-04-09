import { ValidationAcceptor } from "langium";
import { isClassType, isFunctionType, isNilType, TypeDescription, typeToString } from "./descriptions.js";
import { getClassChain } from "./infer.js";
import { BinaryExpression } from "../generated/ast.js";

export function isAssignable(from: TypeDescription, to: TypeDescription): boolean {
    if (isClassType(from)) {
        if (!isClassType(to)) {
            return false;
        }
        if(from.isArray != to.isArray)
            return false;

        const fromLit = from.literal;
        const fromChain = getClassChain(fromLit);
        const toClass = to.literal;
        for (const fromClass of fromChain) {
            if (fromClass === toClass) {
                return true;
            }
        }
        return false;
    }
    if (isNilType(from)) {
        return isClassType(to);
    }
    if (isFunctionType(from)) {
        if (!isFunctionType(to)) {
            return false;
        }
        if (!isAssignable(from.returnType, to.returnType)) {
            return false;
        }
        if (from.parameters.length !== to.parameters.length) {
            return false;
        }
        for (let i = 0; i < from.parameters.length; i++) {
            const fromParam = from.parameters[i];
            const toParam = to.parameters[i];
            if (!isAssignable(fromParam.type, toParam.type)) {
                return false;
            }
        }
        return true;
    }
    if(isClassType(to)){
        return typeToString(from) === typeToString(to);
    }
    return from.$type === to.$type;
}

export function setErrorMessage(from: TypeDescription, to: TypeDescription, expr: BinaryExpression, accept: ValidationAcceptor): void {
    if (isClassType(from)) {
        if (!isClassType(to)) {
            return;
        }
        accept('error', `BinaryExpression: Type '${typeToString(from)}${from.isArray ? '[]' : ''}' is not assignable to type '${typeToString(to)}${to.isArray ? '[]' : ''}'.`, {
            node: expr,
            property: 'right'
        });
    }
}