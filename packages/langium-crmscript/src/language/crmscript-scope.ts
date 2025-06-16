import { AstUtils, DefaultScopeProvider, DocumentCache, EMPTY_SCOPE, MapScope, ReferenceInfo, Scope } from "langium";
import { Class, Enum, Grammar, MemberCall } from "./generated/ast.js";
import { isClassType, isEnumType } from "./type-system/descriptions.js";
import { getClassChain, getEnumChain, inferType } from "./type-system/infer.js";
import { LangiumServices } from "langium/lsp";
import { dirname, join } from "path";

export class CrmscriptScopeProvider extends DefaultScopeProvider {

    protected documentCache: DocumentCache<string, Scope>;

    constructor(services: LangiumServices) {
        super(services);
        this.documentCache = new DocumentCache<string, Scope>(services.shared);
    }

    override getScope(context: ReferenceInfo): Scope {
        if (context.property === 'element') {
            const memberCall = context.container as MemberCall;
            const previous = memberCall.previous;
            if (!previous) {
                return super.getScope(context);
            }

            const previousType = inferType(previous, new Map());
            if (isClassType(previousType)) {
                return this.scopeClassMembers(previousType.literal);
            }
            if (isEnumType(previousType)) {
                return this.scopeEnumMembers(previousType.literal);
            }
            return EMPTY_SCOPE;
        }
        return super.getScope(context);
    }

    protected override getGlobalScope(referenceType: string, context: ReferenceInfo): Scope {
        const document = AstUtils.getDocument(context.container);
        const currentUri = document.uri;
        return this.documentCache.get(currentUri, referenceType, () => {
            const currentDir = dirname(currentUri.path);

            const uris = new Set<string>();

            uris.add(document.textDocument.uri);
            uris.add("builtins:/library.crmscript-definition");
            const grammar = document.parseResult.value as Grammar;
            if (grammar.includes) {
                for (const fileImport of grammar.includes) {
                    const filePath = join(currentDir, fileImport.file);
                    const uri = currentUri.with({ path: filePath });
                    uris.add(uri.toString());
                }
            }
            return new MapScope(this.indexManager.allElements(referenceType, uris));
        });
    }

    private scopeClassMembers(classItem: Class): Scope {
        const allMembers = getClassChain(classItem).flatMap(e => e.members);
        return this.createScopeForNodes(allMembers);
    }

    private scopeEnumMembers(enumItem: Enum): Scope {
        const allMembers = getEnumChain(enumItem).flatMap(e => e.enumMembers);
        return this.createScopeForNodes(allMembers);
    }
}
