const { $ } = require('@wdio/globals')
const Page = require('./page')

class WebViewPage extends Page {
    get NavWebview() { return $('~Webview') }
    get BtnMenuWebview() { return $('//android.widget.Button[@text="Toggle navigation bar"]') }
    get TextMain () { return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]') }
    get BtnX() { return $('//android.widget.Button[@text="Close navigation bar"]') }

    open () {
        return super.open('')
    }
}

module.exports = new WebViewPage()