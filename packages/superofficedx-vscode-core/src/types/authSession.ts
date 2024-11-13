import { AuthenticationSession } from "vscode";
import { UserClaims } from "./userClaims";

export interface SuperOfficeAuthenticationSession extends AuthenticationSession {
    contextIdentifier: string;
    refreshToken?: string;
    webApiUri: string;
    claims: UserClaims;
    expiresAt?: number;
};