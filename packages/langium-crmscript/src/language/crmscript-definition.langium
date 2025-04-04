grammar CrmscriptDefinition

import "crmscript-implementation";

entry DefinitionUnit:
    (definitionelements+=DefinitionElement)*;

DefinitionElement:
    Class |
    FunctionDeclaration | 
    Enum
    ;

Class returns NamedElement:
    {infer Class} 'class' name=ID '{'
    constructors+=Constructor*
    members+=ClassMember*
'}';

Constructor:
    'constructor' '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' ';' ;

ClassMember: MethodMember | FieldMember;

MethodMember:
    returnType=[Class:ID] name=ID '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' ';';

Parameter: type=[Class:ID] name=ID
;

FieldMember:
    type=[Class:ID] name=ID ';'
;

Enum returns NamedElement:
    {infer Enum} 'enum' name=ID '{' (enumMembers+=EnumMember (',' enumMembers+=EnumMember)*)? '}'
    ;

EnumMember:
    name=ID
;