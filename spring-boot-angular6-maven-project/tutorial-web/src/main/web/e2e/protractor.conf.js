// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  specs: [
  //'C:/Users/Yosra/Documents/workspace_eclipse_oxygen/spring-boot-angular6-maven-project/tutorial-web/src/main/web/src/app/*.spec.ts'
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
	  
			    browserName: 'chrome',
			    chromeDriver: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
			    chromeOptions: {
			        'args': ['--start-maximized', 'disable-infobars', 'disable-gpu', 'incognito', '--headless']
			    },
			    'acceptInsecureCerts': true,
			    shardTestFiles: true,
			    maxInstances: 1
			
  },
  chromeOnly: true,
  //directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};