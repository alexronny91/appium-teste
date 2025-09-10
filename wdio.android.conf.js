const fs = require('fs')
const allure = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'MotoG84',
        'appium:platformVersion': '15.0',
        'appium:app': 'C:\\Workspace\\appium-teste\\apps\\android\\android.wdio.native.app.v1.0.8.apk',
        'appium:automationName': 'UiAutomator2'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    services: ['appium'],
    appium: {
        command: 'appium'
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            const screenshot = await browser.takeScreenshot();
            allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
        }
    },
    onPrepare: function () {
        const env = [
            'Platform=Android',
            'Device=MotoG84',
            'AndroidVersion=15.0',
            'AppVersion=1.0.8'
        ].join('\n');
        fs.writeFileSync('./allure-results/environment.properties', env);
    },
}
