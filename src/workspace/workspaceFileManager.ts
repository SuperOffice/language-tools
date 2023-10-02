import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { TokenSet } from 'openid-client';
import { setTokenSetFromFile } from '../services/tokenService';

/*export async function findScriptByPrimaryKey(data: ScriptResponseData, primaryKey: string) {
    const script = data.value.find(script => script.PrimaryKey === primaryKey);
    if (script) {
        await writeDataToFile(script, script.path);
    } else {
        console.log('Script with PrimaryKey $primaryKey not found');
    }
}*/

//TEMP
const SUO_FILE_NAME: string = '.suo';

type FileReadResult<T> = {
    data?: T;
    error?: string;
};

export async function writeDataToFile(data: any, dataPath: string): Promise<string> {
    if (vscode.workspace.workspaceFolders !== undefined) {
        const fullPathToFile = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, dataPath);

        // Check if directory exists, if not create it
        if (!fs.existsSync(path.dirname(fullPathToFile))) {
            fs.mkdirSync(path.dirname(fullPathToFile), { recursive: true });
        }
        // Now, write your data to this directory
        try {
            fs.writeFileSync(fullPathToFile, data);
            console.log(`Written to file at: ${fullPathToFile}`);
            return fullPathToFile;
        } catch (err) {
            console.error(`Error writing to file: ${err}`);
            return "";
        }
    }
    else {
        vscode.window.showErrorMessage("VSCODE-SUPEROFFICE: Working folder not found, open a folder an try again");
        return "";
    }
}

export async function readDataFromFile(fullPath: string): Promise<FileReadResult<any>> {
    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
        return { error: `VSCODE-SUPEROFFICE: File at path ${fullPath} does not exist.` };
    }

    // Read the file content
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    // Check if the file is empty
    if (fileContent.trim().length === 0) {
        return { error: `VSCODE-SUPEROFFICE: File at path ${fullPath} is empty.` };
    }

    // Parse the JSON content
    try {
        const jsonData = JSON.parse(fileContent);
        return { data: jsonData };
    } catch (err) {
        return { error: `VSCODE-SUPEROFFICE: Error parsing JSON from file: ${err}` };
    }
}


export async function checkAndValidateSuoFile(rootPath: string): Promise<boolean> {
    const suoFilePath = path.join(rootPath, SUO_FILE_NAME);
    if (!fs.existsSync(suoFilePath)) {
        console.log(`No ${SUO_FILE_NAME} file found.`);
        return false;
    }

    const result = await readDataFromFile(suoFilePath);
    
    if (result.error) {
        vscode.window.showErrorMessage(result.error);
        return false;
    }

    if (!validateSuoFileContent(result.data) || result.data === null) {
        vscode.window.showErrorMessage("VSCODE-SUPEROFFICE: Suo file is not valid. Please login again.");
        return false;
    }

    await setTokenSetFromFile(new TokenSet(result.data));
    // Here, suoFileContent is inferred to be of type TokenSet
    // You can process it further if needed

    return true; // Return true since it's a successful validation
}



const validateSuoFileContent = (obj: any): obj is TokenSet => {
    return typeof obj === 'object' &&
        typeof obj.access_token === 'string' &&
        typeof obj.refresh_token === 'string';
    // Add further checks for other properties as needed
};
