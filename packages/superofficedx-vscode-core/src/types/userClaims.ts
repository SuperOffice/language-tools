import { IdTokenClaims } from "openid-client";

export interface UserClaims extends IdTokenClaims {
    "http://schemes.superoffice.net/identity/ctx": string;
    "http://schemes.superoffice.net/identity/netserver_url": string;
    "http://schemes.superoffice.net/identity/webapi_url": string;
}
