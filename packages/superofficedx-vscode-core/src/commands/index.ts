// Central exports for command registration
export { registerCommands } from './commandRegistration';
export { CommandKeys } from './commandKeys';
export type { CommandKey } from './commandKeys';

// Command type contracts and interfaces
export * from './types';

// Domain-specific command registrations (for selective use if needed)
export { registerAuthCommands, registerScriptCommands } from './handlers';
