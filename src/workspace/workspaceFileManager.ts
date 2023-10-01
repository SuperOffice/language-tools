import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { ScriptResponseData } from '../services/types';

/*export async function findScriptByPrimaryKey(data: ScriptResponseData, primaryKey: string) {
    const script = data.value.find(script => script.PrimaryKey === primaryKey);
    if (script) {
        await writeDataToFile(script, script.path);
    } else {
        console.log('Script with PrimaryKey $primaryKey not found');
    }
}*/

export async function writeDataToFile(data: any, dataPath: string) {
        // Check if directory exists, if not create it
        if (!fs.existsSync(path.dirname(dataPath))) {
            fs.mkdirSync(path.dirname(dataPath), { recursive: true });
        }
        // Now, write your data to this directory
        try {
            fs.writeFileSync(dataPath, data);
            console.log(`Written to file at: ${dataPath}`);
        } catch (err) {
            console.error(`Error writing to file: ${err}`);
        }
}

export async function readDataFromFile(dataPath: string): Promise<any> {
    if (vscode.workspace.workspaceFolders !== undefined) {
        // Use the path module to join the paths and make sure they're valid for the OS
        const fullPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, dataPath);

        // Check if the file exists
        if (!fs.existsSync(fullPath)) {
            vscode.window.showErrorMessage(`VSCODE-SUPEROFFICE: File at path ${fullPath} does not exist.`);
            return null;
        }

        // Read the file content
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        // Parse the JSON content
        try {
            const jsonData = JSON.parse(fileContent);
            return jsonData;
        } catch (err) {
            vscode.window.showErrorMessage(`VSCODE-SUPEROFFICE: Error parsing JSON from file: ${err}`);
            return null;
        }
    }
    else {
        vscode.window.showErrorMessage("VSCODE-SUPEROFFICE: Working folder not found, open a folder and try again");
        return null;
    }
}