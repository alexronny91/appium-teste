const FormsPage = require('../pageobjects/forms.page')
const NavigationPage = require('../pageobjects/navigation.page')

describe('Componentes de formulários', () => {
    before(async () => {
        await NavigationPage.goTo('Forms')
    })

    it('Preencher input, selecionar opção no dropdown e clicar no botão ', async () => {
        const text = 'Teste'
        await FormsPage.fillInput(text)
        await FormsPage.textResult.waitForDisplayed()
        const result = await FormsPage.textResult.getText()
        expect(result).toEqual(text)
    })

    it('Trocar o estado do switch', async () => {
        await FormsPage.changeSwitch()
        const text = await FormsPage.switchText.getText()
        expect(text).toBe('Click to turn the switch OFF')
    })

    it('Selecionar opção no dropdown', async () => {
        await FormsPage.selectDropdown()
        const selectedOption = await FormsPage.dropdown.getText()
        expect(selectedOption).toBe('Appium is awesome')
    })

    it('Clicar no botão Active', async () => {
        await FormsPage.pressActiveButton()
        await FormsPage.MsgBtnActive.waitForDisplayed()
        const msg = await FormsPage.MsgBtnActive.getText()
        expect(msg).toContain('This button is')
        await FormsPage.BtnOkAlert.click()
    })

    it('Validar que o botão Inactive existe', async () => {
        const isBtnInactiveDisplayed = await FormsPage.btnInactive.isDisplayed()
        expect(isBtnInactiveDisplayed).toBe(true)
    })
})
