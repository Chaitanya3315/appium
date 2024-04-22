import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';


Given(/^I am at login page$/, async () => {
    await LoginPage.waitForLoginPage();
    console.log("login page loaded");
});

Then(/^I login with Email with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    await LoginPage.loginInwithEmail();
    await LoginPage.loginWithUser(username , password);
    await LoginPage.submit();
});




