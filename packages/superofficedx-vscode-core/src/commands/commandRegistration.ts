import { DIContainer } from '../container/core/diContainer';
import { registerAuthCommands } from './handlers/authCommands';
import { registerScriptCommands } from './handlers/scriptCommands';

/**
 * Central command registration coordinator.
 * Delegates to domain-specific command registration modules.
 */
export function registerCommands(container: DIContainer): void {
    // Register commands by domain
    registerAuthCommands(container);
    registerScriptCommands(container);
}
