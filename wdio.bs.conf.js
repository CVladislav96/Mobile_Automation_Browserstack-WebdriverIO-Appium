require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: 'hub.browserstack.com',
  port: 443,
  path: '/wd/hub',
  protocol: 'https',

  specs: ['./test/specs/**/*.test.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Samsung Galaxy S22',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.BROWSERSTACK_APP_URL,
    'bstack:options': {
      projectName: 'Wikipedia Appium Tests',
      buildName: 'Build ' + new Date().toISOString().slice(0, 10),
      sessionName: 'Wikipedia Regression',
      debug: true,
      networkLogs: true,
    },
  }],

  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 120000 },
  reporters: ['spec'],

  services: ['browserstack'],
};