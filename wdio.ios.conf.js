exports.config = {
    runner: 'local',
    specs: ['./tests/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14',
        'appium:platformVersion': '17.0',
        'appium:app': 'C:\\Workspace\\appium-teste\\apps\\ios\\wdiodemoapp.app',
        'appium:automationName': 'XCUITest'
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
    }
}
