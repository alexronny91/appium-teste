const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const NavigationPage = require('../pageobjects/navigation.page')
const allure = require('@wdio/allure-reporter').default

describe('Formulários de login e cadastro', () => {
    before(async () => {
        await NavigationPage.goTo('Login')
        allure.addStep('Before - Navegar até a tela de Login');
    })

    it('Login com usuário e senha dentro das regras', async () => {
        await NavigationPage.goTo('Login')
        await LoginPage.login('teste@teste.com', '12345678')
        await LoginPage.msgSuccess.waitForDisplayed()
        const msg = await LoginPage.msgSuccess.getText()
        expect(msg).toEqual('Success')
        await LoginPage.btnOkAlert.click()
    })
    
    it('Mensagens de erro no formulário de cadastro', async () => {
        await LoginPage.login('teste', '1234')
        await Promise.all([
            LoginPage.msgErrorEmail.waitForDisplayed(),
            LoginPage.msgErrorPassword.waitForDisplayed()
        ])
        const msgErrorEmail = await LoginPage.msgErrorEmail.getText()
        const msgErrorPassword = await LoginPage.msgErrorPassword.getText()
        expect(msgErrorEmail).toEqual('Please enter a valid email address')
        expect(msgErrorPassword).toEqual('Please enter at least 8 characters')
    })

    it('Cadastro de novo usuário', async () => {
        await LoginPage.signup('teste@teste.com', '12345678')
        await LoginPage.msgSuccess.waitForDisplayed()
        const msg = await LoginPage.msgSuccess.getText()
        expect(msg).toEqual('Signed Up!')
        await LoginPage.btnOkAlert.click()
    })

    it('Mensagens de erro no formulário de cadastro', async () => {
        await LoginPage.signup('teste', '1234')
        await Promise.all([
            LoginPage.msgErrorEmail.waitForDisplayed(),
            LoginPage.msgErrorPassword.waitForDisplayed(),
            LoginPage.msgErrorRepeatPassword.waitForDisplayed()
        ])
        const msgErrorEmail = await LoginPage.msgErrorEmail.getText()
        const msgErrorPassword = await LoginPage.msgErrorPassword.getText()
        const msgErrorRepeatPassword = await LoginPage.msgErrorRepeatPassword.getText()
        expect(msgErrorEmail).toEqual('Please enter a valid email address')
        expect(msgErrorPassword).toEqual('Please enter at least 8 characters')
        expect(msgErrorRepeatPassword).toEqual('Please enter the same password')
    })
})

