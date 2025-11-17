# Authentication Resources

This folder contains HTML templates used during the OAuth authentication flow.

## Files

### `auth-success.html`

- **Purpose**: Displayed to users after successful SuperOffice authentication
- **Features**:
  - Modern, professional design matching VS Code aesthetic
  - Clear success messaging with animated checkmark
  - Guidance to return to VS Code
  - Responsive layout

### `auth-error.html`

- **Purpose**: Displayed when authentication fails
- **Features**:
  - Error messaging with placeholder for dynamic error details
  - Professional error styling
  - Guidance for retry actions
  - Template variable: `{{ERROR_MESSAGE}}` - replaced with actual error message

### `logo.svg`

- **Purpose**: SuperOffice logo used in the extension

## Usage

These templates are loaded by the `AuthenticationService` class during the OAuth callback process:

```typescript
// Success page
res.end(this.loadHtmlTemplate('auth-success.html'));

// Error page with dynamic message
const errorHtml = this.loadHtmlTemplate('auth-error.html')
    .replace('{{ERROR_MESSAGE}}', errorMessage);
res.end(errorHtml);
```

## Build Process

The build script automatically copies these files from `resources/` to `dist/resources/` during the build process to ensure they're available at runtime.
