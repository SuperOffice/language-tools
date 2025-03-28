grammar CrmscriptDefinition

entry DefinitionUnit:
    (definitionelements+=DefinitionElement)*;

DefinitionElement:
    Class |
    ExpressionBlock;

Class returns DefinitionNamedElement: 
    {infer Class} 'Class' name=ID '{'
    members+=ClassMember*
'}';

ClassMember: MethodMember | FieldMember;

 MethodMember:
     returnType=[Class:ID] name=ID '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' ';';

FieldMember:
    returnType=[Class:ID] name=ID ';';

Parameter: type=[Class:ID] name=ID ;

ExpressionBlock: '{'
    definitionelements+=DefinitionElement*
'}';

type DefinitionNamedElement = Class | FieldMember;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;