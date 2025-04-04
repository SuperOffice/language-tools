import { Void } from './CRMScript.Global/Void.ts';
import { Bool } from './CRMScript.Global/Bool.ts';
import { Byte } from './CRMScript.Global/Byte.ts';
import { Date } from './CRMScript.Global/Date.ts';
import { DateTime } from './CRMScript.Global/DateTime.ts';
import { Float } from './CRMScript.Global/Float.ts';
import { Integer } from './CRMScript.Global/Integer.ts';
import { Long } from './CRMScript.Global/Long.ts';
import { String } from './CRMScript.Global/String.ts';
import { Time } from './CRMScript.Global/Time.ts';

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