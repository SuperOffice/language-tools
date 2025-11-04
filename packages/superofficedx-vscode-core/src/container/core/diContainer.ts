/**
 * Simple Dependency Injection Container for the SuperOffice VS Code extension
 */
export type ServiceFactory<T = unknown> = () => T;
export type ServiceKey = string | symbol;

export class DIContainer {
    private services = new Map<ServiceKey, ServiceFactory>();
    private singletons = new Map<ServiceKey, unknown>();

    /**
     * Register a service factory
     */
    register<T>(key: ServiceKey, factory: ServiceFactory<T>): void {
        this.services.set(key, factory);
    }

    /**
     * Register a singleton service factory
     */
    registerSingleton<T>(key: ServiceKey, factory: ServiceFactory<T>): void {
        this.register(key, () => {
            if (!this.singletons.has(key)) {
                this.singletons.set(key, factory());
            }
            return this.singletons.get(key) as T;
        });
    }

    /**
     * Register an existing instance as a singleton
     */
    registerInstance<T>(key: ServiceKey, instance: T): void {
        this.singletons.set(key, instance);
        this.register(key, () => instance);
    }

    /**
     * Resolve a service by key
     */
    resolve<T>(key: ServiceKey): T {
        const factory = this.services.get(key);
        if (!factory) {
            throw new Error(`Service not registered: ${String(key)}`);
        }
        return factory() as T;
    }

    /**
     * Check if a service is registered
     */
    isRegistered(key: ServiceKey): boolean {
        return this.services.has(key);
    }

    /**
     * Clear all registrations (useful for testing)
     */
    clear(): void {
        this.services.clear();
        this.singletons.clear();
    }
}
