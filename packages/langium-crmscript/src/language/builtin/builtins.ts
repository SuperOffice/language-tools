import { CRMScriptGlobal } from './CRMScriptGlobal.js';
import { CRMScriptNetServer } from './CRMScriptNetServer.js';
import { CRMScriptNative } from './CRMScriptNative.js';
import { todos } from './todo.js';
export const builtins = [
    CRMScriptGlobal,
    CRMScriptNetServer,
    CRMScriptNative,
    todos
].join('\n');
