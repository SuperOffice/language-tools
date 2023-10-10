import { StateResponse } from "../types/types";
import { httpPublicRequest } from "./httpService";
import { CONFIG_SYSTEMSERVICE } from '../config';

export const getTenantState = async (environment: string, contextIdentifier: string): Promise<StateResponse> => {

    const response = await httpPublicRequest<StateResponse>('GET', CONFIG_SYSTEMSERVICE.STATE_URI_TEMPLATE(environment, contextIdentifier));

    if (!response.ok) {
        throw new Error(`Error getting state for ${contextIdentifier}: ${response.statusText}`);
    }
    return response.body;
};
