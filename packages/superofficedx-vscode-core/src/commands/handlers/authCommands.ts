import { ExtensionContext, commands } from 'vscode';
import { DIContainer, ConfigurationKeys } from '../../container';
import { CommandKeys } from '../commandKeys';
import { startNativeAppFlow } from '../implementations/auth';

/**
 * Factory for creating authentication-related command handlers
 */
class AuthCommandFactory {
    createStartNativeAppFlowCommand() {
        return async (): Promise<void> => startNativeAppFlow();
    }
}

/**
 * Register all authentication-related commands
 */
export function registerAuthCommands(container: DIContainer): void {
    const context = container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
    const authFactory = new AuthCommandFactory();

    context.subscriptions.push(
        commands.registerCommand(CommandKeys.StartNativeAppFlow, authFactory.createStartNativeAppFlowCommand()),
    );
}
