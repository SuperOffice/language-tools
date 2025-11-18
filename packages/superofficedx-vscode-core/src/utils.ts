/* eslint-disable @typescript-eslint/no-explicit-any */
import { Disposable, Event, EventEmitter, ExtensionContext } from "vscode";
import { ScriptEntity } from "./types/odata/script";

export interface PromiseAdapter<T, U> {
    (
        value: T,
        resolve:
            (value: U | PromiseLike<U>) => void,
        reject:
            (reason: any) => void
    ): any;
}

const passthrough = (value: any, resolve: (value?: any) => void): void => resolve(value);

/**
 * Return a promise that resolves with the next emitted event, or with some future
 * event as decided by an adapter.
 *
 * If specified, the adapter is a function that will be called with
 * `(event, resolve, reject)`. It will be called once per event until it resolves or
 * rejects.
 *
 * The default adapter is the passthrough function `(value, resolve) => resolve(value)`.
 *
 * @param event the event
 * @param adapter controls resolution of the returned promise
 * @returns a promise that resolves or rejects as specified by the adapter
 */
export function promiseFromEvent<T, U>(event: Event<T>, adapter: PromiseAdapter<T, U> = passthrough): { promise: Promise<U>; cancel: EventEmitter<void> } {
    let subscription: Disposable;
    const cancel = new EventEmitter<void>();

    return {
        promise: new Promise<U>((resolve, reject) => {
            cancel.event(() => reject('Cancelled'));
            subscription = event((value: T) => {
                try {
                    Promise.resolve(adapter(value, resolve, reject))
                        .catch(reject);
                } catch (error) {
                    reject(error);
                }
            });
        }).then(
            (result: U) => {
                subscription.dispose();
                return result;
            },
            error => {
                subscription.dispose();
                throw error;
            }
        ),
        cancel
    };
}

/**
 *
 * @param context the extension context
 * @returns a string with {publisher}.{name} from package.json
 */
export function getPackageExtensionName(context: ExtensionContext): string {
    return `${getPackagePublisher(context)}.${getPackageName(context)}`;
}

/**
 *
 * @param context the extension context
 * @returns a string with {displayName} from package.json
 */
export function getPackageDisplayName(context: ExtensionContext): string {
    const displayName = context.extension.packageJSON.displayName;
    return displayName;
}


/**
*
* @param context the extension context
* @returns a string with {publisher} from package.json
*/
export function getPackagePublisher(context: ExtensionContext): string {
    const publisher = context.extension.packageJSON.publisher;
    return publisher;
}

/**
*
* @param context the extension context
* @returns a string with {name} from package.json
*/
export function getPackageName(context: ExtensionContext): string {
    const name = context.extension.packageJSON.name;
    return name;
}

export function getCustomScheme(): string {
    return 'suo';
}

export function getFileType(scriptEntity: ScriptEntity): string | undefined {
    if (scriptEntity.Type === 1) {
        return '.crmscript'
    }
    else if (scriptEntity.Type === 2) {
        return '.tsfso'
    }
    return undefined
}
