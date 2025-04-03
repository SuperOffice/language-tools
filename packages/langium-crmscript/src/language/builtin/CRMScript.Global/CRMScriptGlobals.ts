import { String } from './String.js';
import { Integer } from './Integer.js';
import { Float } from './Float.js';
import { Bool } from './Bool.js';
import { Map } from './Map.js';

// Merge all into a single string
export const CRMScriptGlobals = [
    String,
    Integer,
    Float,
    Bool,
    Map
  ].join('\n');