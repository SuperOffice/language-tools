grammar CrmscriptImplementation

import "crmscript-definition";

entry ImplementationUnit:
    (implementationelements+=ImplementationElement)*;

ImplementationElement:
    ExpressionBlock | 
    VariableDeclaration ';' |
    FunctionDeclaration |
    IfStatement | 
    WhileStatement | 
    ForStatement | 
    PrintStatement ';' | 
    ReturnStatement ';' | 
    Expression ';' 
;

VariableDeclaration returns ImplementationNamedElement:
    {infer VariableDeclaration} type=[Class:ID] name=ID (assignment?='=' value=Expression)? 
;

FunctionDeclaration:
    returnType=[Class:ID] name=ID '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' body=ExpressionBlock
;

IfStatement: 
    'if' '(' condition=Expression ')' block=ExpressionBlock
    ('else' elseBlock=ExpressionBlock)?
;

WhileStatement:
    'while' '(' condition=Expression ')' block=ExpressionBlock
;

ForStatement:
    'for' '(' counter=VariableDeclaration? ';' condition=Expression? ';' execution=Expression? ')' block=ExpressionBlock
;

PrintStatement: 'print' '(' value=StringExpression ')'
;

ReturnStatement: 'return' value=Expression? 
;

Expression:
    Assignment;

Assignment infers Expression:
    Addition ({infer BinaryExpression.left=current} operator=('=') right=Addition)*;

Addition infers Expression:
    Multiplication ({infer BinaryExpression.left=current} operator=('+' | '-') right=Multiplication)*;

Multiplication infers Expression:
    Logical ({infer BinaryExpression.left=current} operator=('*' | '/') right=Logical)*;

Logical infers Expression:
    Comparison ({infer BinaryExpression.left=current} operator=('and' | 'or') right=Comparison)*;

Comparison infers Expression:
    MemberCall ({infer BinaryExpression.left=current} operator=('<' | '<=' | '>' | '>=' | '==' | '!=') right=MemberCall)*;

MemberCall infers Expression:
    Primary
	({infer MemberCall.previous=current} 
        // Member call with function call
        ("." element=[ImplementationNamedElement:ID] (
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
    IntegerExpression |
    NilExpression |
    FeatureCall
;

FeatureCall infers Expression:
	{infer MemberCall}
	(element=[ImplementationNamedElement:ID] | element=[ImplementationNamedElement:'this'])
    // Optional function call after referencing an element
    (explicitOperationCall?='('
	(
	    arguments+=Expression (',' arguments+=Expression)*
	)?
	')')?;

UnaryExpression:
   operator=('!' | '-' | '+') value=Expression
;

IntegerExpression: value=INT;
StringExpression: value=STRING;
BooleanExpression: value?='true' | 'false';
NilExpression: value='nil';

type ImplementationNamedElement = VariableDeclaration | FunctionDeclaration;