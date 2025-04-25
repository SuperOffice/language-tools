# SuperOffice Language Tools

This repository contains all the editor tooling required for working with Typescript and CRMScripts in SuperOffice.

It contains an implementation of the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/), powered by [Volar](https://volarjs.dev/) (for TypeScript) and `vcode-languageserver` (for CRMScript), and is currently under development.

## Motivation

With the [Typescript for SuperOffice](https://github.com/SuperOffice/typescript-for-superoffice)-project ongoing it felt like a suitable time to add support for creating scripts outside of SuperOffice. This will enhance the developer experience, and open new possibilities for how you work with and debug your scripts.

## Packages

This repository is a monorepo managed through [pnpm](https://pnpm.io/).

### [`@superoffice/superofficedx-vscode-core`](packages/superofficedx-vscode-core)

This is the core extension that enables you to work with scripts in vscode.

#### Features

##### viewContainer for SuperOffice

![Alt text](assets/viewContainer.png?raw=true "ViewContainer")

##### Authentication flow for Native App with PKCE

Select environment

![Alt text](assets/selectEnvironment.png?raw=true "SelectEnvironment")

Start Authentication

![Alt text](assets/startAuthentication.png?raw=true "startAuthentication")

Input credentials in new browser-tab and close after completion

![Alt text](assets/closeAuthenticationWindow.png?raw=true "startAuthentication")

##### TreeView of scripts in the tenant

![Alt text](assets/getScriptsResult.png?raw=true "getScriptsResult")

##### Option to preview the script (creates a file with DocumentContentProvider)

##### Option to download the script (creates a file in local workspace, in the correct folder)

![Alt text](assets/downloadScriptOption.png?raw=true "downloadScriptOption")

![Alt text](assets/scriptCreatedInWorkspace.png?raw=true "scriptCreatedInWorkspace")

##### Option to download folder of scripts (creates all the folders and files in the local workspace)

##### Option to execute the script (from local workspace), this utilizes the ExecuteScriptFromString-endpoint

Execute the script from right-click

![Alt text](assets/executeScriptOption.png?raw=true "executeScriptOption")

ExampleScript

![Alt text](assets/exampleExecuteScript.png?raw=true "executeResult")

Result is presented as informationmessage (down right)

![Alt text](assets/executeResult.png?raw=true "executeResult")

NB: This option is only available for file extensions .tsfso (Typescript for SuperOffice).

### For TypeScript

#### [`@superoffice/language-server`](packages/language-server)

The SuperOffice language server, powered by [Volar](https://volarjs.dev/), contains the implementation of the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) and is currently under development.

This module acts as the Language Server Protocol (LSP) language Server. It provides intellisense for the vscode extension, but could be used by any client (vscode, monaco, vim etc).
It also handles %ejscript%-nuggets and has basic support for HTML/css/javascript outside of these nuggets. This is experimental but could be useful in cases where one would like to create html-pages.

#### [`superofficedx-vscode-tsfso`](packages/superofficedx-vscode-tsfso)

This module acts as a Language Server Protocol (LSP) language client. Its primary responsibility is to communicate with the [`@superoffice/language-server`](packages/language-server) module (acting as an LSP server) and integrate the language services provided by the server into the VS Code editor. This architecture allows for the reuse of language services across different editors and IDEs, with the implementation of the corresponding LSP client. In this case, @volar/vscode is the LSP client implementation for VS Code.

### For CRMScript

#### [`superofficedx-vscode-crmscript`](packages/superofficedx-vscode-crmscript)

This module acts as a Language Server Protocol (LSP) language client. Its primary responsibility is to communicate with the [`@superoffice/langium-crmscript`](packages/langium-crmscript) module (acting as an LSP server) and integrate the language services provided by the server into the VS Code editor. This architecture allows for the reuse of language services across different editors and IDEs, with the implementation of the corresponding LSP client. In this case default @vscode-languageserver is the LSP client implementation for VS Code.

#### [`langium-crmscript`](packages/langium-crmscript)

Langium is a general purpose language that can be used to define a programming language.
The purpose of this is to be able to provide intellisense, code completions among other LSP features.
In this case it will function as the LSP Server, providing these features to [`superofficedx-vscode-crmscript`](packages/superofficedx-vscode-crmscript).

## Getting Started

1. `git clone https://github.com/SuperOffice/language-tools.git`
2. `code .\language-tools\`
3. `pnpm i`
4. `Run&debug` -> `Launch client without extensions`

## How to run `superofficedx-vscode-tsfso`

1. `Run&debug` -> `superofficedx-vscode-tsfso`
This will open up a new instance of vscode with the extension enabled. Note that all other extensions will be DISABLED, but you can enable them by removing `--disable-extensions` as an argument in `launch.json`.

## How to run `superofficedx-vscode-crmscript`

1. `Run&debug` -> `superofficedx-vscode-crmscript`
This will open up a new instance of vscode with the extension enabled. Note that all other extensions will be DISABLED, but you can enable them by removing `--disable-extensions` as an argument in `launch.json`.

Running this extension will spawn a childprocess with the LSP server. Launch.json is set up to enable `autoAttachChildProcesses`, so if you set a breakpoint in [`langium-crmscript`](packages/langium-crmscript/) it should be triggered by editing a document.

## How-to use the Core extension

1. `Run&debug` -> `Core Extension`
2. Click on the SuperOffice Icon on the right navigation bar
3. Click 'Login' to start the authenticationflow  
    Note: This will start the Native App Flow, and you will have to follow the steps described [here](#authentication-flow-for-native-app-with-pkce)
4. After authentication the tab will be populated with the scripts belonging to your tenant.   Note: Depending if your tenant is 'cold' it could take a little while for it to be read to execute the API request that fetches all scripts.
5. When right-clicking on a script, in the treeView, it will give you options to preview or download.
6. When you have downloaded a script you can go back to your workspace and see the script has been created. If you right-click this script you will se a new menu-item, 'SuperOffice', which contains 2 execution-options: Execute and ExecuteLocally.  
Note: ExecuteLocally will launch Node and automatically attach to the process, and will start debugging the execution.

## Other thoughts/ideas

### Replace Treeview with webview

Replacing the treeview with a webview will make it much more flexible to add logic/functionality. A webview is not restricted to the bounds of vscode, and we can create a modern design either with vanilla HTML or for instance react. It will also make it possible to make it more SuperOffice-like.
