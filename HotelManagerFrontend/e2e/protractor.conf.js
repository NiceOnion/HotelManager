exports.config = {
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    specs: ['e2e/specs '],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};
