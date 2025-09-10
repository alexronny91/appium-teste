const NavigationPage = require('../pageobjects/navigation.page')
const LoginPage = require('../pageobjects/login.page')
const FormsPage = require('../pageobjects/forms.page')
const allure = require('@wdio/allure-reporter').default

describe('Fluxo aplicativo', () => {
    it('Realizar login e preencher forms', async () => {
        await NavigationPage.goTo('Login')
        await LoginPage.login('teste@teste.com','12345678')
        await LoginPage.btnOkAlert.click()
        allure.addStep('Fluxo completo - Login realizado com sucesso')
        await NavigationPage.goTo('Forms')
        await FormsPage.fillInput('Fluxo Completo')
        await FormsPage.pressActiveButton()
        await FormsPage.BtnOkAlert.click()
        allure.addStep('Fluxo completo - Formulário preenchido com sucesso')
    })
})
