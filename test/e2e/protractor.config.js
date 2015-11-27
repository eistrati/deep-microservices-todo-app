var config = {

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Tests/*.spec.js'],
    baseUrl: 'http://localhost:9001',

    //capabilities: {
    //    'browserName': 'chrome',
    //    'chromeOptions': {
    //        args: ['--test-type']
    //    }
    //},

    multiCapabilities: [{
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'ng-pattern-restrict Chrome build ' + process.env.TRAVIS_BUILD_NUMBER,
      browserName: 'firefox',
      seleniumVersion: '2.47.0'
    }, {
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'ng-pattern-restrict Chrome build ' + process.env.TRAVIS_BUILD_NUMBER,
      browserName: 'chrome',
      seleniumVersion: '2.48.2',
      chromedriverVersion: '2.20',
    }, {
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'ng-pattern-restrict Chrome build ' + process.env.TRAVIS_BUILD_NUMBER,
      browserName: 'internet explorer',
      seleniumVersion: '2.46.0'
    }],

    framework: 'jasmine2',


    jasmineNodeOpts: {
      // If true, display spec names.
      isVerbose: true,
      // If true, print colors to the terminal.
      showColors: true,
      // If true, include stack traces in failures.
      includeStackTrace: true,
      // Default time to wait in ms before a test fails.
      defaultTimeoutInterval: 50000,
    }
    ,
  };

exports.config = config;