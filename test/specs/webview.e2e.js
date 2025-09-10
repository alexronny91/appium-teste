const NavigationPage = require('../pageobjects/navigation.page')
const WebViewPage = require('../pageobjects/webview.page')

describe('Navegação webview', () => {
    
    it('Validar abertura e fechamento do menu', async () => {
        await NavigationPage.goTo('Webview')
        await WebViewPage.BtnMenuWebview.waitForDisplayed()
        await WebViewPage.BtnMenuWebview.click()
        await WebViewPage.BtnX.waitForDisplayed()
        await WebViewPage.BtnX.click()
        await WebViewPage.BtnX.waitForDisplayed({ reverse: true })
        expect(await WebViewPage.BtnX.isDisplayed()).toBe(false)
    })
})
