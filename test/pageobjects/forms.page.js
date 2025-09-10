const { $ } = require('@wdio/globals')
const Page = require('./page')

class FormsPage extends Page {
    get inputField() { return $('~text-input') }
    get textResult() { return $('~input-text-result') }
    get switchButton() { return $('~switch') }
    get switchText() { return $('~switch-text') }
    get dropdown() { return $('android=new UiSelector().resourceId("text_input")') }
    get btnActive() { return $('~button-Active') }
    get btnInactive() { return $('~button-Inactive') }
    get MsgBtnActive() { return $('android=new UiSelector().text("This button is")') }
    get BtnOkAlert() { return $('android=new UiSelector().text("OK")') }
    get dropdownOptions() { return $$('android=new UiSelector().resourceId("com.wdiodemoapp:id/select_dialog_listview")') }
    get dropdownOptionAppium() { return $('android=new UiSelector().text("Appium is awesome")') }

    async fillInput(text) {
        await this.inputField.setValue(text)
    }

    async changeSwitch() {
        await this.switchButton.click()
    }

    async selectDropdown() {
        await this.dropdown.click()
        await this.dropdownOptionAppium.click()
    }

    async pressActiveButton() {
        await this.btnActive.click()
    }

    open() {
        return super.open('forms')
    }
}

module.exports = new FormsPage()
