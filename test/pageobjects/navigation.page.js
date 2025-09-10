const { $ } = require('@wdio/globals')
const Page = require('./page')

class NavigationPage extends Page {
    get navHome() { return $('~Home') }
    get navWebview() { return $('~Webview') }
    get navLogin() { return $('~Login') }
    get navForms() { return $('~Forms') }
    get navSwipe() { return $('~Swipe') }
    get navDrag() { return $('~Drag') }

    async goTo(section) {
        switch(section){
            case 'Home': await this.navHome.click(); break
            case 'Webview': await this.navWebview.click(); break
            case 'Login': await this.navLogin.click(); break
            case 'Forms': await this.navForms.click(); break
            case 'Swipe': await this.navSwipe.click(); break
            case 'Drag': await this.navDrag.click(); break
        }
    }

    open () {
        return super.open('')
    }
}

module.exports = new NavigationPage()
