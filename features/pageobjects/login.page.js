import { expect , $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    constructor(){
        super();
        this.LOGIN_PAGE_LOADED = '//android.widget.TextView[@text="Say hello to a whole new way to (pay)roll"]';
        this.CONTINUE_WITH_EMAIL = '//android.widget.Button[@text="Continue with email"]';
        this.LOGIN_USERNAME = '//android.webkit.WebView[@text="Roll"]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText[1]';
        this.LOGIN_PASSWORD = '//android.webkit.WebView[@text="Roll"]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText[2]';
        this.LOGIN_SUBMIT = '//android.widget.Button[@text="Submit"]';
    }

    get loginPageLoaded (){ return $(this.LOGIN_PAGE_LOADED)};
    get continueWithEmail (){ return $(this.CONTINUE_WITH_EMAIL)};
    get loginUsername (){ return $(this.LOGIN_USERNAME)};
    get loginPassword (){ return $(this.LOGIN_PASSWORD)};
    get loginSubmit (){ return $(this.LOGIN_SUBMIT)}

    async waitForLoginPage(){
        await this.loginPageLoaded.waitForDisplayed({ timeout : 120 * 1000 , timeoutMsg : "APP Login page not loaded in 2 mins"});
    }

    async loginInwithEmail(){
        await this.continueWithEmail.waitForDisplayed({ timeout : 30 * 1000 , timeoutMsg : "Continue with Email button not loaded"});
        await this.continueWithEmail.click();
    }

    async loginWithUser(username , password){
        await this.loginUsername.waitForDisplayed({ timeout : 30 * 1000 , timeoutMsg : "Email Input box not loaded"});
        (await this.loginUsername).setValue(username);
        await this.loginPassword.waitForDisplayed({ timeout : 30 * 1000 , timeoutMsg : "Password Input box not loaded"});
        (await this.loginPassword).setValue(password);
    }

    async submit(){
        (await this.loginSubmit).waitForDisplayed({ timeout : 30 * 1000 , timeoutMsg : "Password Input box not loaded"});
        (await this.loginSubmit).click();
    }
}

export default new LoginPage();
