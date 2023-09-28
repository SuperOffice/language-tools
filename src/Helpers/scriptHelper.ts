import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { ResponseData, ScriptEntity } from '../Api/getScripts';

export async function saveScriptDataLocally(script: ScriptEntity) {
    // Sanitize the path (for example, remove the '#' at the beginning)
    let sanitizedPath = script.path.replace(/^#/, '');

    // Use the path module to join the paths and make sure they're valid for the OS
    const fullPath = path.join(vscode.workspace.rootPath || '', sanitizedPath);

    // Check if directory exists, if not create it
    if (!fs.existsSync(path.dirname(fullPath))) {
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    }

    // Now, write your script data to this directory
    fs.writeFileSync(fullPath, JSON.stringify(script, null, 2));  // This will save the script data as a formatted JSON file
}

export async function findScriptByPrimaryKey(data: ResponseData, primaryKey: string) {
     const script = data.value.find(script => script.PrimaryKey === primaryKey);
     if (script) {
        await saveScriptDataLocally(script);
     } else {
         console.log('Script with PrimaryKey $primaryKey not found');
     }
}