import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChatPage extends Page {
    /**
     * define selectors using getter methods
     */
    constructor(){
        super();
        this.CHAT_PAGE_LOADED = '';

    }

    get ChatPageLoaded (){return $(this.CHAT_PAGE_LOADED)};

    async waitForChatPage(){
        await this.ChatPageLoaded.waitForDisplayed({ timeout : 120 * 1000 , timeoutMsg : "Chat page not loaded in 2 mins"});
    }
   
}

export default new ChatPage();
