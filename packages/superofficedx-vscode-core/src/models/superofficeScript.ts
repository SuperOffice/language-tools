/**
 * Represents a SuperOffice script entity
 */
export interface SuperofficeScript {
    /** Unique identifier for the script */
    id: string;

    /** Display name of the script */
    name: string;

    /** Optional description of the script */
    description?: string;

    /** The script content/source code */
    content: string;

    /** Last modification timestamp */
    lastModified: Date;

    /** Version number (optional) */
    version?: number;

    /** Type of script */
    type: 'CRMScript' | 'MacroScript' | 'EjScript';

    /** Optional folder ID for organization */
    folderId?: string;

    /** Original content for change tracking (source control) */
    originalContent?: string;

    /** Whether the script has been modified since last sync (source control) */
    isModified?: boolean;
}

/**
 * Represents a change to a SuperOffice resource
 */
export interface SuperofficeResourceChange {
    /** URI of the changed resource */
    uri: string;

    /** Status of the change */
    status: 'modified' | 'added' | 'deleted' | 'untracked';

    /** Original content (if available) */
    originalContent?: string;

    /** Local content (if available) */
    localContent?: string;

    /** Remote script information (if available) */
    remoteScript?: SuperofficeScript;
}
