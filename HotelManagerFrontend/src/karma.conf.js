module.exports = function (config) {
    config.set({
        // Base path that will be used to resolve all patterns (e.g., files, exclude)
        basePath: '',

        // Frameworks to use
        frameworks: ['jasmine', '@angular-devkit/build-angular'],

        // List of files/patterns to load in the browser
        files: [
            // Angular dependencies
            { pattern: './node_modules/@angular/**/*.js', included: false, watched: true },
            { pattern: './node_modules/rxjs/**/*.js', included: false, watched: true },

            // Test-specific dependencies
            { pattern: './src/test.ts', watched: true }
        ],

        // List of files/patterns to exclude
        exclude: [],

        // Preprocess matching files before serving them to the browser
        preprocessors: {
            './src/test.ts': ['@angular-devkit/build-angular']
        },

        // Test results reporter to use
        reporters: ['progress', 'kjhtml'],

        // Web server port
        port: 9876,

        // Enable/disable colors in the output (reporters and logs)
        colors: true,

        // Logging level
        logLevel: config.LOG_INFO,

        // Enable/disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers
        browsers: ['Chrome'],

        // Custom browser launchers
        restartOnFileChange: true,
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--remote-debugging-port=9222'
                ]
            }
        },

        // Continuous Integration mode
        singleRun: false,

        // Concurrency level
        concurrency: Infinity,

        // Angular CLI configuration
        angularCli: {
            environment: 'dev'
        },

        // Webpack configuration (if needed)
        webpack: {
            // ...
        },
    });
};
