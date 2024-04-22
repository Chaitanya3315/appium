import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import ChatPage from '../pageobjects/chat.page.js';

Given(/^Chat page is loaded$/, async () => {
    await ChatPage.waitForChatPage();
    console.log("chat page loaded");
});




