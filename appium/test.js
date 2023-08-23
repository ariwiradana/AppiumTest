const {remote} = require('webdriverio');

const selectorById = id => {
  return `android=new UiSelector().resourceId("${id}")`;
};

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.appiumtest',
  'appium:appActivity': '.MainActivity',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const firstName = await driver.$(selectorById('firstName'));
    await firstName.setValue('Ari');

    const lastName = await driver.$(selectorById('lastName'));
    await lastName.setValue('Wiradana');

    const email = await driver.$(selectorById('email'));
    await email.setValue('ariwiradana5@gmail.com');

    const password = await driver.$(selectorById('password'));
    await password.setValue('IniPasswordSaya');

    const button = await driver.$(selectorById('button'));
    await button.click();

    // // Type or enter text into the input field
  } finally {
    await driver.pause(5000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
