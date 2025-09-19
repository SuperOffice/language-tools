// import { test, expect } from './workbox';
// import {  } from '@playwright/test';
// import { AuthenticationService } from '../src/services/authenticationService';

// test('should be able to execute the first test of the example project', async ({ workbox, page }) => {
//     const authenticationService = new AuthenticationService();
//     const authorizeUrl = await authenticationService.generateAuthorizeUrl('sod');

//     // Create a page.
//     await page.goto(authorizeUrl);
//     await page.getByPlaceholder('E-mail address').fill('eivind.fasting@superoffice.com');
//     await page.getByText("Next").click();

//     // Alternative way with a predicate. Note no await.
//     // const responsePromise = page.waitForResponse(response =>
//     //     response.url() === 'http://127.0.0.1:8000'
//     // );

//     //console.log(responsePromise);

//     console.log(authorizeUrl);
//     expect(authorizeUrl).not.toBeNull();
//     expect(workbox).not.toBeNull();
// });
