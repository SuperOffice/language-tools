# SuperOffice Language Tools

This repository contains all the editor tooling required for working with Typescript for SuperOffice (.tsfso files).

It contains an implementation of the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/), powered by [Volar](https://volarjs.dev/), and is currently under development.

## Motivation

With the [Typescript for SuperOffice](https://github.com/SuperOffice/javascript-for-superoffice)-project ongoing it felt like a suitable time to add support for creating scripts outside of SuperOffice. This will enhance the developer experience, and open new possibilities for how you work with and debug your scripts.

## Packages

This repository is a monorepo managed through [pnpm](https://pnpm.io/).

### [`@superoffice/language-server`](packages/language-server)

The SuperOffice language server, powered by [Volar](https://volarjs.dev/), contains the implementation of the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) and is currently under development.

This module acts as the Language Server Protocol (LSP) language Server. It provides intellisense for the vscode extension, but could be used by any client (vscode, monaco, vim etc).
It also handles %ejscript%-nuggets and has basic support for HTML/css/javascript outside of these nuggets. This is experimental but could be useful in cases where one would like to create html-pages.

### [`@superoffice/vscode`](packages/vscode)

This module acts as a Language Server Protocol (LSP) language client. Its primary responsibility is to communicate with the [`@superoffice/language-server`](packages/language-server) module (acting as an LSP server) and integrate the language services provided by the server into the VS Code editor. This architecture allows for the reuse of language services across different editors and IDEs, with the implementation of the corresponding LSP client. In this case, @volar/vscode is the LSP client implementation for VS Code.

#### Features

- View all scripts in an online tenant
- Download single or folders of scripts

## Getting Started

1. `git clone https://github.com/SuperOffice/language-tools.git`
2. `code .\language-tools\`
3. `pnpm i`
4. `Run&debug` -> `Launch client without extensions`

## How-to use the extension

1. Click on the SuperOffice Icon on the right navigation bar
2. Click 'Login' to start the authenticationflow  
    Note: This will start the Native App Flow, and you will have to follow the steps described [here](#authentication-flow-for-native-app-with-pkce)
3. After authentication the tab will be populated with the scripts belonging to your tenant.   Note: Depending if your tenant is 'cold' it could take a little while for it to be read to execute the API request that fetches all scripts.
4. When right-clicking on a script, in the treeView, it will give you options to preview or download.
5. When you have downloaded a script you can go back to your workspace and see the script has been created. If you right-click this script you will se a new menu-item, 'SuperOffice', which contains 2 execution-options: Execute and ExecuteLocally.  
Note: ExecuteLocally will launch Node and automatically attach to the process, and will start debugging the execution.

Images/details of the functionality can be found [here](#feature-details)

## Background

There are already 3 different tools created to download and upload scripts and screens to/from SuperOffice. The original/first example can be found here: [Kodesentralen ExpanderSync][1]
Based on this there is created 1 in C# (by a SuperOffice consultant) and 1 in python (by Cloud Connection).  
All of these require a CRMScript to be inserted into the customer's solution, which makes the script and screens available externally. Even though this works it would be better if they used the API to fetch this data.  

Giving support for developing scripts outside of SuperOffice is something our competitors already have. Salesforce, for example, already have good support for developing and debugging:
[Salesforce Extension Pack][2]

## Authentication Flow

The extension uses the Native App Flow (Authorization Code Flow with PKCE):
[Authorization Code flow | SuperOffice Docs][3]

For a better user-experience this should be 1 common app, which all users of the extension use. The Native App Flow requires you to log in to SuperOffice and approve the application, so it should not be a security risk to share the ClientID for all users of the extension.  

## Vscode

### AuthenticationProvider

We need an AuthenticationProvider to handle the session. A custom AuthenticationProvider will make use of standard vscode capabilities, and make it possible to share the AuthenticationState for multiple extensions. In other words, if we or a partner decide to create an additional extension, they can make use of the already authenticated user and can fetch the existing session.
This also works best as it integrates into the design on vscode and we do not need to create something  

### UX

[ViewContainer – Views | Visual Studio Code Extension API][viewContainerDoc]

[View – Views | Visual Studio Code Extension API][viewsDoc]

[Treeview – Views | Visual Studio Code Extension API][treeViewDoc]

### API

The uses the following API requests

#### GetAllScripts - '.../v1/Script/’

This API-call will fetch all scripts in SuperOffice: [GET Script | SuperOffice Docs][getAllScriptsDoc]
This will be used as the data populating the treeview.

#### GetScriptEntity - ‘.../v1/Script/{uniqueIdentifier}’

This API-call will fetch one script entity: [GET Script/{uniqueIdentifier} | SuperOffice Docs][getScriptEntityDoc]

#### ExecuteScript - ‘.../v1/Agents/CRMScript/ExecuteScriptByString’

This API-call will execute a single scrip passed inn as a string: [GET Agents/CRMScript/ExecuteScriptByString | SuperOffice Docs][executeScriptByStringDoc]

#### ExecuteScriptLocally - ‘localhost/script’

This is a local API-call that gives toward the local Node Application. The NodeApp is explained further down in the document

## Node

The new Node application that executes JavaScript is in a restricted Kubernetes environment that does not allow access for external applications. It is NOT an option to open the cluster for external attachment.  
A workaround for this is to get a copy of this Node and run it locally. This way you can attach to the node and step-through the code execution. This is a significant improvement to the existing functionality that is inside SuperOffice, as that ‘only’ gives you tracings after the code is executed.  

When you have authenticated with the Native App Flow in vscode you get an access_token and webapi_uri. These values need to be set as header when communicating with the node:  
x-apiendpoint  
x-accesstoken  

This is then used by the node to execute the request. This flow makes it flexible and easy to work with the same Node towards different environments.  

Local debugging is dependent on this Node and needs to be either bundled with the extension OR be a feature-toggle in the extension (which will only make it possible to run the code if you have the Node/feature enabled).

It has also been theorized, but not created, that you can feature-toggle this also online, and have online pass values from the cloud down to your local environment. For this to work you will also need the node running locally, and we need ngrok or like handle the forward.  

## Feature details

### viewContainer for SuperOffice

![Alt text](assets/viewContainer.png?raw=true "ViewContainer")

### Authentication flow for Native App with PKCE

![Alt text](assets/authFlow.gif?raw=true "Test")

### TreeView of scripts in the tenant

![Alt text](assets/getScriptsResult.png?raw=true "getScriptsResult")

### Option to preview the script (creates a file in virtual storage)

### Option to download the script (creates a file in local workspace, in the correct folder)

![Alt text](assets/downloadScriptOption.png?raw=true "downloadScriptOption")

![Alt text](assets/scriptCreatedInWorkspace.png?raw=true "scriptCreatedInWorkspace")

### Option to download folder of scripts (creates all the folders and files in the local workspace)

### Option to execute the script (from local workspace), this utilizes the ExecuteScriptFromString-endpoint

Execute the script from right-click

![Alt text](assets/executeScriptOption.png?raw=true "executeScriptOption")

ExampleScript

![Alt text](assets/exampleExecuteScript.png?raw=true "executeResult")

Result is presented as informationmessage (down right)

![Alt text](assets/executeResult.png?raw=true "executeResult")

**Enjoy!**

## Other thoughts/ideas

### Replace Treeview with webview

Replacing the treeview with a webview will make it much more flexible to add logic/functionality. A webview is not restricted to the bounds of vscode, and we can create a modern design either with vanilla HTML or for instance react. It will also make it possible to make it more SuperOffice-like.

### List scripts that have changed in your local workspace

Similar to how GIT handles keeping track of your changed files. In short GIT handles this by storing a SHA1 value of each file/script in your local workspace. When a change is done to a document you create a new SHA1-value and compare it to the existing one, if and if they are not identical you consider the file as changed. It is then listed under ‘changed files.  

Similar logic can be added to our extension, where we create a sha1-string when you download a file and store it in a file.

It is NOT suggested/recommended we recreate all what GIT has to offer, but this small feature would make it much easier to know what files you have locally that is changed. You could in theory also compare local files with what is stored in the online tenant when you open a workspace, but it needs to be tested to see how much of a performance impact this is.

### Provide intellisense with the extension

Today the user of the extension also needs to add the [NPM package(https://www.npmjs.com/package/@superoffice/webapi)] to get proper intellisense. The optimal solution would be that this is not required if you have this extension installed, but it will also require us to create a new fileExtension that can provide this intellisense.  

<!-- Reference links -->

[1]: https://community.superoffice.com/en/technical/forums/general-forums/announcements/kodesentralen-releases-expandersync-a-tool-to-get-customizations-into-a-local-file-structure/
[2]: https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode
[3]: https://docs.superoffice.com/en/authentication/online/sign-in-user/auth-code-flow.html
[viewContainerDoc]: https://code.visualstudio.com/api/ux-guidelines/views#view-containers
[viewsDoc]: https://code.visualstudio.com/api/ux-guidelines/views
[treeViewDoc]: https://code.visualstudio.com/api/ux-guidelines/views#tree-views
[getAllScriptsDoc]: https://docs.superoffice.com/en/api/reference/restful/rest/Script/v1Script_GetAll.html
[getScriptEntityDoc]: https://docs.superoffice.com/en/api/reference/restful/rest/Script/v1Script_GetCRMScriptByUniqueIdentifier.html
[executeScriptByStringDoc]: https://docs.superoffice.com/en/api/reference/restful/agent/CRMScript_Agent/v1CRMScriptAgent_ExecuteScriptByString.html
