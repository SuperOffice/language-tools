export type NodeRequest = {
    scriptbody: string;
    parameters: string;
    eventData: string;
};

export interface NodeResponse {
    result: string;
    variables: string;
    eventData: string;
    traceRun: string
}