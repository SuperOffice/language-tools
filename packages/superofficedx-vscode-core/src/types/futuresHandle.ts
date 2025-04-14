export type FuturesHandle =
{
    resolveHandle: (value: string|PromiseLike<string>)=>void,
    rejectHandle: (reason?: any)=>void,
};