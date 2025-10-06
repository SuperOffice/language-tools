// global-webapi.d.ts
// Get updated Icontext and SOWebApi from => https://dev.azure.com/superoffice/CRM/_git/FileSet?path=/Modules/monaco/api/Carriers.ts

import { WebApi } from "@superoffice/webapi";

interface Icontext {
  result: {
      body: string,
      status: number
  },
  variables: object,
  eventData: {
    inputValues: Map<string, string>,
    headers: Map<string, string>,
    blockExecution: boolean,
    navigateTo: string,
    message: string,
    showDialog: string,
    outputValues: Map<string, string>,
    stateValues: Map<string, string>,
    exception: string,
    cgiVariables: Map<string, string>,
    cgiContent: string
  }
}

declare global {
  /**
   * A globally accessible instance of the WebApi class.
   */
  const soApi: WebApi;

  /**
   * A globally accessible instance of the context object.
   */
  const context: Icontext;
}
