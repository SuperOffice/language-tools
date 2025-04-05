import { CRMScriptGlobal } from './CRMScriptGlobal.js';
import { CRMScriptNetServer } from './CRMScriptNetServer.js';
import { CRMScriptNative } from './CRMScriptNative.js';
import { Enums } from './Enums.js';

export const builtins = [
    CRMScriptGlobal,
    CRMScriptNetServer,
    CRMScriptNative,
    Enums
].join('\n');