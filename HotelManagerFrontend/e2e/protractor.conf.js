exports.config = {
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    specs: ['Tests/*.e2e.spec.ts'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        require('ts-node').register({
            project: './tsconfig.json'
        })
    }
};
