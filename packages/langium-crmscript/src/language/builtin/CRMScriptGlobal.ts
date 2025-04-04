import { Void } from './CRMScript.Global/Void.js';
import { Bool } from './CRMScript.Global/Bool.js';
import { Byte } from './CRMScript.Global/Byte.js';
import { Date } from './CRMScript.Global/Date.js';
import { DateTime } from './CRMScript.Global/DateTime.js';
import { Float } from './CRMScript.Global/Float.js';
import { Integer } from './CRMScript.Global/Integer.js';
import { Long } from './CRMScript.Global/Long.js';
import { String } from './CRMScript.Global/String.js';
import { Time } from './CRMScript.Global/Time.js';

export const CRMScriptGlobal = [
    Void,
    Bool,
    Byte,
    Date,
    DateTime,
    Float,
    Integer,
    Long,
    String,
    Time
].join('\n');