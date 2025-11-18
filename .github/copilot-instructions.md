# Copilot Instructions for SuperOffice Language Tools

# Project coding standards for TypeScript

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Explicit function return types, no-any.

## Repository Overview

Monorepo containing VS Code extensions for:
1. Core functionality in vscode
2. LSP server using Volar (TypeScript)
3. LSP server using Langium (CRMScript)

**Type:** Monorepo (pnpm workspace) | **Languages:** TypeScript | **Frameworks:** Volar, Langium, VS Code Extension API | **Size:** ~521 TS files | **Runtime:** Node.js 20.x | **Package Manager:** pnpm 8.x (REQUIRED)

## Build & Test Requirements

### Prerequisites
- **Node.js:** 20.x | **pnpm:** 8.x (install: `npm install -g pnpm@8`)
- **Critical:** ONLY pnpm works - npm/yarn will fail due to workspace config and preinstall hooks

### Installation
```bash
pnpm install  # ALWAYS run first
```

### Build Process

**Build order matters!** Some packages depend on outputs from others:

1. **Build langium-crmscript FIRST** (generates TS from .langium grammars):
   ```bash
   pnpm run build:langium-crmscript  # Outputs to src/language/generated/ & syntaxes/
   ```

2. **Build VS Code extensions:**
   ```bash
   pnpm run build:vscode-core      # Core extension (esbuild → dist/)
   pnpm run build:vscode-tsfso     # TS extension (esbuild → dist/)
   pnpm run build:vscode-crmscript # CRMScript extension (esbuild → out/*.cjs)
   ```

3. **CI Build Sequence:**
   ```bash
   pnpm install && pnpm run build:vscode-core && pnpm run build:vscode-tsfso && pnpm test && pnpm eslint .
   ```

### Testing

**Vitest** (7 tests, ~400ms):
```bash
pnpm test              # All tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # With coverage
```

**VS Code Extension Tests** (SKIP in CI/sandboxed environments - requires internet):
```bash
pnpm run test:core     # Fails offline: "getaddrinfo ENOTFOUND update.code.visualstudio.com"
```

### Linting

```bash
pnpm eslint .
```

## Project Structure

### Monorepo Layout
```
├── .github/workflows/ci.yml    # CI: test + lint jobs
├── packages/                   # 5 packages
│   ├── langium-crmscript/      # CRMScript LSP server (Langium)
│   ├── language-server/        # TypeScript LSP server (Volar)
│   ├── superofficedx-vscode-core/      # Core extension (auth, tree view, commands)
│   ├── superofficedx-vscode-crmscript/ # CRMScript client
│   └── superofficedx-vscode-tsfso/     # TypeScript client
├── test/                       # Extension dev workspace
├── eslint.config.mjs, package.json, pnpm-workspace.yaml, tsconfig.base.json, vitest.config.ts
```

### Package Details

#### 1. `superofficedx-vscode-core` (Core Extension)
Authentication, script browsing/execution for SuperOffice.

**Structure:** `src/extension.ts` (entry) | `commands/` | `providers/` (TreeView, auth, virtual FS) | `services/` (HTTP, FS, auth, Node) | `handlers/` | `container/` (DI) | `scripts/build.js` (esbuild + copy resources)
**Output:** `dist/extension.js`

#### 2. `language-server` (TypeScript LSP Server)
Volar-based LSP for TypeScript.

**Structure:** `src/server.ts` (entry) | `languagePlugin.ts` | `languageService.ts` | `typescriptPlugin.ts` | `parser/` | `tests/`
**Build:** None (bundled by vscode-tsfso)

#### 3. `superofficedx-vscode-tsfso` (TypeScript Client)
LSP client for .tsfso files.
**Structure:** `src/extension.ts` | `scripts/build.js` (bundles extension + language-server) | `syntaxes/tsfso.tmLanguage.json`
**Output:** `dist/extension.js`, `dist/server.js`

#### 4. `langium-crmscript` (CRMScript LSP Server)
Langium-based LSP for CRMScript.
**Structure:** `src/language/*.langium` (grammars) | `generated/` (AUTO-GENERATED - DO NOT EDIT) | `main.ts` | `langium-config.json` | `examples/`
**Build:** `pnpm run langium:generate` (generates TS from .langium)

#### 5. `superofficedx-vscode-crmscript` (CRMScript Client)
LSP client for .crmscript files.
**Structure:** `src/main.ts` | `scripts/esbuild.mjs` (bundles extension + langium server) | `syntaxes/`
**Output:** `out/*.cjs` (CommonJS for VS Code)

## CI/CD Pipeline

`.github/workflows/ci.yml` runs on push/PR to `main`, `develop`:
- **Test Job:** pnpm@8 + Node 20.x → `pnpm install` → build:vscode-core + build:vscode-tsfso → `pnpm test`
- **Lint Job:** pnpm@8 + Node 20.x → `pnpm install` → `pnpm eslint .`
- Jobs run independently (lint failures don't block tests)

## Common Issues

1. **Build fails:** Build langium-crmscript first: `pnpm run build:langium-crmscript`
2. **pnpm not found:** Install globally: `npm install -g pnpm@8`
3. **TSC errors:** Ensure package `tsconfig.json` extends `../../tsconfig.base.json`
4. **VS Code tests fail offline:** Expected. Skip `test:core` in CI/sandboxed environments
5. **Generated files modified:** Run `pnpm run build:langium-crmscript` to regenerate

## Development Workflow

1. `pnpm install`
2. Make changes to source files
3. Build affected packages: `build:vscode-core` / `build:vscode-tsfso` / `build:langium-crmscript`
4. Run `pnpm test` and `pnpm eslint .`
5. Debug via `.vscode/launch.json` configs: "superofficedx-vscode-core" / "tsfso" / "crmscript"

**Rules:**
- ❌ Don't edit `packages/langium-crmscript/src/language/generated/` (auto-generated)
- ❌ Don't edit `dist/` or `out/` (build outputs)
- ✅ Add explicit return types to functions
- ✅ Run `pnpm eslint .` before committing

## Pre-Commit Checklist

1. ✅ `pnpm install` (if dependencies changed)
2. ✅ Build affected packages (correct order!)
3. ✅ `pnpm test` (7 tests must pass)
4. ✅ `pnpm eslint .` (no NEW errors; 22 pre-existing OK)
5. ✅ Verify `dist/`/`out/` outputs exist
6. ✅ Don't commit generated files or build artifacts

**Trust these instructions** - validated through testing. Only explore further if information is incomplete or incorrect.
