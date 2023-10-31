// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// time yarn add --dev karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter karma-verbose-reporter karma-htmlfile-reporter
// yarn add v1.22.19
// [1/4] Resolving packages...
// [2/4] Fetching packages...
// [3/4] Linking dependencies...
// [4/4] Building fresh packages...
// success Saved lockfile.
// success Saved 6 new dependencies.
// info Direct dependencies
// ├─ karma-chrome-launcher@3.1.1
// ├─ karma-coverage-istanbul-reporter@3.0.3
// ├─ karma-firefox-launcher@2.1.2
// └─ karma-spec-reporter@0.0.34
// info All dependencies
// ├─ colors@1.4.0
// ├─ istanbul-lib-source-maps@3.0.6
// ├─ karma-chrome-launcher@3.1.1
// ├─ karma-coverage-istanbul-reporter@3.0.3
// ├─ karma-firefox-launcher@2.1.2
// └─ karma-spec-reporter@0.0.34
// Done in 3.67s.

// real	0m3.937s
// user	0m4.385s
// sys	0m0.863s

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-verbose-reporter'),
      require('karma-spec-reporter'),
      require('karma-htmlfile-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    htmlReporter: {
      outputFile: 'docs/tests/units.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'for Angular fifteen project',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: false,
      showOnlyFailed: false
    },
    reporters: ['progress', 'kjhtml', 'verbose', 'spec', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['FirefoxHeadless'],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [ '-headless' ],
      },
    },
    singleRun: true,
    restartOnFileChange: true
  });
};
