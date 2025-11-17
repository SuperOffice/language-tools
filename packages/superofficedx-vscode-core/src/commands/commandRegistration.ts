import { DIContainer } from '../container';
import { registerAuthCommands, registerScriptCommands } from './handlers';

/**
 * Central command registration coordinator.
 * Delegates to domain-specific command registration modules.
 */
export function registerCommands(container: DIContainer): void {
    // Register commands by domain
    registerAuthCommands(container);
    registerScriptCommands(container);
}
