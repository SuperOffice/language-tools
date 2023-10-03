import * as vscode from 'vscode';
import { mkdir, readFile, writeFile } from 'fs/promises';
import * as path from 'path';
import { TokenSet } from 'openid-client';
import { setTokenSetFromFile } from '../services/tokenService';
import { CONFIG } from '../config';

async function getRootPath(): Promise<string> {
    const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri?.fsPath;
    if (!rootPath) {
        throw new Error("Working folder not found, open a folder and try again");
    }
    return rootPath;
}

function handleError(err: any): Error {
    return err instanceof Error ? new Error(err.message) : new Error(String(err));
}

export async function writeFileAsync(relativePath: string, data: string): Promise<string> {
    try {
        const fullPath = path.join(await getRootPath(), relativePath);

        // Ensure the directory exists
        await mkdir(path.dirname(fullPath), { recursive: true });

        // Write the file
        await writeFile(fullPath, data);

        //return the fullPath to the new file created
        return fullPath;
    } catch (err) {
        throw handleError(err);
    }
}

export async function readFileAsync(relativePath: string): Promise<string> {
    try {
        return await readFile(path.join(await getRootPath(), relativePath), 'utf-8');
    } catch (err) {
        throw handleError(err);
    }
}

export async function getSuoFile(): Promise<boolean> {
    try {
        const resultString = await readFileAsync(CONFIG.SUO_FILE_NAME);

        if (!resultString.trim()) {
            console.log('SUO file is empty.');
            return false;
        }

        let result;
        try {
            result = JSON.parse(resultString);
        } catch {
            throw new Error("Failed to parse SUO file.");
        }
        if (!validateSuoFileContent(result)) {
            throw new Error("Suo file is invalid. Please login again.");
        }

        await setTokenSetFromFile(new TokenSet(result));
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

const validateSuoFileContent = (obj: any): obj is TokenSet => {
    return typeof obj === 'object' &&
        typeof obj.access_token === 'string';
    //typeof obj.refresh_token === 'string';
    // Add further checks for other properties as needed
};

