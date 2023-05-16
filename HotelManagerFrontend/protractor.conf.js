exports.config = {
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    specs: ['src/specs/E2E/app.e2e-spec.ts'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};
