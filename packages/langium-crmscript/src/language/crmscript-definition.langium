grammar CrmscriptDefinition

import "crmscript-implementation";

entry DefinitionUnit:
    (definitionelements+=DefinitionElement)*;

DefinitionElement:
    Class
;