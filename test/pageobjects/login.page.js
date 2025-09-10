const { $ } = require('@wdio/globals')
const Page = require('./page')

class LoginPage extends Page {
    get inputEmail() { return $('~input-email') }
    get inputPassword() { return $('~input-password') }
    get inputRepeatPassword() { return $('~input-repeat-password') }
    get btnLogin() { return $('~button-LOGIN') }
    get tabSignUp() { return $('~button-sign-up-container') }
    get btnSignUp() { return $('~button-SIGN UP') }
    get msgSuccess() { return $('android=new UiSelector().resourceId("android:id/alertTitle")') }
    get btnOkAlert() { return $('android=new UiSelector().resourceId("android:id/button1")') }
    get msgErrorEmail() { return $('//android.widget.TextView[@text="Please enter a valid email address"]') }
    get msgErrorPassword() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]') }
    get msgErrorRepeatPassword() { return $('//android.widget.TextView[@text="Please enter the same password"]') }

    async login(email, password) {
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    async signup(email, password) {
        await this.tabSignUp.click()
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.inputRepeatPassword.setValue(password)
        await this.btnSignUp.click()
    }

    open() {
        return super.open('login')
    }
}

module.exports = new LoginPage()
