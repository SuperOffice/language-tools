import { ExtensionContext, commands, window } from 'vscode';
import { DIContainer } from '../../container/core/diContainer';
import { ConfigurationKeys } from '../../container/configurations/configurationKeys';
import { CommandKeys } from '../commandKeys';
import { SourceControlService } from '../../services/sourceControlService';

/**
 * Factory for creating source control-related command handlers
 */
class SourceControlCommandFactory {
    constructor(private readonly sourceControlService: SourceControlService) { }

    createRefreshCommand() {
        return async (): Promise<void> => {
            try {
                await this.sourceControlService.refresh();
                window.showInformationMessage('SuperOffice Source Control: Refresh completed successfully');
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                window.showErrorMessage(`SuperOffice Source Control: Refresh failed - ${errorMessage}`);
                console.error('Source control refresh error:', error);
            }
        };
    }

    createTestModifyCommand() {
        return async (): Promise<void> => {
            try {
                // Test: modify first script and refresh view
                const script = this.sourceControlService.getDataService().getAllScripts()[0];
                if (script) {
                    const newContent = script.content + '\n\n// Modified for testing: ' + new Date().toISOString();
                    this.sourceControlService.getDataService().modifyScript(script.id, newContent);
                    await this.sourceControlService.refresh();
                    window.showInformationMessage(`Modified script: ${script.name} - check source control view`);
                } else {
                    window.showWarningMessage('No scripts available to modify');
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                window.showErrorMessage(`Test modify failed - ${errorMessage}`);
                console.error('Test modify error:', error);
            }
        };
    }
}

/**
 * Register all source control-related commands
 */
export function registerSourceControlCommands(container: DIContainer): void {
    const context = container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
    const sourceControlService = container.resolve<SourceControlService>(ConfigurationKeys.SourceControlService);

    const commandFactory = new SourceControlCommandFactory(sourceControlService);

    context.subscriptions.push(
        commands.registerCommand(CommandKeys.SourceControlRefresh, commandFactory.createRefreshCommand()),
        commands.registerCommand(CommandKeys.SourceControlTestModify, commandFactory.createTestModifyCommand())
    );
}
