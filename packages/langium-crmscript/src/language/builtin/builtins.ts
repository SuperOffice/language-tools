import { CRMScriptGlobal } from './CRMScriptGlobal.js';
import { CRMScriptNetServer } from './CRMScriptNetServer.js';
import { CRMScriptNative } from './CRMScriptNative.js';

export const builtins = [
    CRMScriptGlobal,
    CRMScriptNetServer,
    CRMScriptNative
].join('\n');