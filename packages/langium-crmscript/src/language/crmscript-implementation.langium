grammar CrmscriptImplementation

import "crmscript-definition";

entry Grammar:
    (
        includes+=Include
        | statements+=Statement
        | types+=Type
    )*;

Include:
    '#include'  file=STRING ';';

Statement:
    ExpressionBlock |
    IfStatement |
    WhileStatement |
    ForStatement |
    PrintStatement ';' |
    ReturnStatement ';' |
    Expression ';'
;

Type:
    VariableDeclaration ';' |
    FunctionDeclaration
;

IfStatement:
    'if' '(' condition=Expression ')' block=ExpressionBlock
    ('else' elseBlock=ExpressionBlock)?
;

WhileStatement:
    'while' '(' condition=Expression ')' block=ExpressionBlock
;

ForStatement:
    'for' '(' counter=VariableDeclaration? ';' condition=Expression? ';' execution=ForExecution? ')' block=ExpressionBlock
;

ForExecution:
    Expression | type=[VariableDeclaration:ID] '++';

PrintStatement:
    'print' '(' value=StringExpression ')'
;

ReturnStatement:
    'return' value=Expression?
;

ExpressionBlock:
    '{'
    (statements+=Statement | types+=Type)*
'}'
;

VariableDeclaration returns NamedElement:
    {infer VariableDeclaration} type=[Class:ID] (array?='[]')? (arrayOfArray?='[]')? name=ID (assignment?='=' value=(ConstructorCall | Expression))?
;

ConstructorCall:
    type=[Class:ID] '(' (params+=Parameter (',' params+=Parameter)*)? ')';

Expression:
    Assignment
;

Assignment infers Expression:
    Addition ({infer BinaryExpression.left=current} operator=('=') right=Addition)*
;

Addition infers Expression:
    Multiplication ({infer BinaryExpression.left=current} operator=('+' | '-') right=Multiplication)*
;

Multiplication infers Expression:
    Logical ({infer BinaryExpression.left=current} operator=('*' | '/') right=Logical)*
;

Logical infers Expression:
    Comparison ({infer BinaryExpression.left=current} operator=('and' | 'or') right=Comparison)*
;

Comparison infers Expression:
    MemberCall ({infer BinaryExpression.left=current} operator=('<' | '<=' | '>' | '>=' | '==' | '!=') right=MemberCall)*
;

MemberCall infers Expression:
    Primary
	({infer MemberCall.previous=current}
    // Member call with function call
        ("." element=[NamedElement:ID] (
		explicitOperationCall?='('
		(
		    arguments+=Expression (',' arguments+=Expression)*
		)?
		')')?
    // Chained function call
        | (
		explicitOperationCall?='('
		(
		    arguments+=Expression (',' arguments+=Expression)*
		)?
		')'))
    )*;

Primary infers Expression:
    '(' Expression ')' |
    UnaryExpression |
    StringExpression |
    BooleanExpression |
    NumberExpression |
    NilExpression |
    FeatureCall
;

FeatureCall infers Expression:
    {infer MemberCall}
	(element=[NamedElement:ID] | element=[NamedElement:'this'])
    // Optional function call after referencing an element
    (explicitOperationCall?='('
	(
	    arguments+=Expression (',' arguments+=Expression)*
	)?
	')')?
;

UnaryExpression:
    operator=('!' | '-' | '+') value=Expression
;

NumberExpression:
    value=NUMBER;
StringExpression:
    value=STRING;
BooleanExpression:
    value?='true' | 'false';
NilExpression:
    value='nil';


FunctionDeclaration:
    returnType=[Class:ID] (array?='[]')? (arrayOfArray?='[]')? name=ID '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' body=ExpressionBlock
;

type NamedElement = VariableDeclaration | FunctionDeclaration | Class | MethodMember | FieldMember | Enum | EnumMember;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal NUMBER returns number: /[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal EJSCRIPT_START: /%EJSCRIPT_START%(.*?)<%/;
hidden terminal EJSCRIPT_END: /%>(.*?)%EJSCRIPT_END%/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
