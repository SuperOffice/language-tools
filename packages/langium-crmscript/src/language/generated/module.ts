/******************************************************************************
 * This file was generated by langium-cli 3.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import type { LangiumSharedCoreServices, LangiumCoreServices, LangiumGeneratedCoreServices, LangiumGeneratedSharedCoreServices, LanguageMetaData, Module } from 'langium';
import { CrmscriptAstReflection } from './ast.js';
import { CrmscriptDefinitionGrammar, CrmscriptImplementationGrammar } from './grammar.js';

export const CrmscriptDefinitionLanguageMetaData = {
    languageId: 'crmscript-definition',
    fileExtensions: ['.crmscript-definition'],
    caseInsensitive: false,
    mode: 'development'
} as const satisfies LanguageMetaData;

export const CrmscriptImplementationLanguageMetaData = {
    languageId: 'crmscript',
    fileExtensions: ['.crmscript'],
    caseInsensitive: false,
    mode: 'development'
} as const satisfies LanguageMetaData;

export const CrmscriptGeneratedSharedModule: Module<LangiumSharedCoreServices, LangiumGeneratedSharedCoreServices> = {
    AstReflection: () => new CrmscriptAstReflection()
};

export const CrmscriptDefinitionGeneratedModule: Module<LangiumCoreServices, LangiumGeneratedCoreServices> = {
    Grammar: () => CrmscriptDefinitionGrammar(),
    LanguageMetaData: () => CrmscriptDefinitionLanguageMetaData,
    parser: {}
};

export const CrmscriptImplementationGeneratedModule: Module<LangiumCoreServices, LangiumGeneratedCoreServices> = {
    Grammar: () => CrmscriptImplementationGrammar(),
    LanguageMetaData: () => CrmscriptImplementationLanguageMetaData,
    parser: {}
};
