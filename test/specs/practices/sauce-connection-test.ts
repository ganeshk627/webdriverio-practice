import { remote } from 'webdriverio';


const capabilities = {
    platformName: 'Android',
    'appium:app': 'storage:filename=Android-MyDemoAppRN.1.3.0.build-244.apk', // The filename of the mobile app
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
        build: 'appium-build-9LPSU',
        name: 'Connection test',
        //    deviceOrientation: 'PORTRAIT',
        // deviceOrientation: 'portrait', // Changed to 'portrait'

    },
};


async function runTest() {
    const driver = await remote({
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        hostname: 'ondemand.eu-central-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        capabilities,
    });

    // replace with commands and assertions
    await new Promise(resolve => setTimeout(resolve, 5000)); // sleep 5 seconds
    const jobStatus = 'passed'; // or 'failed'

    await driver.execute('sauce:job-result=' + jobStatus);
    await driver.deleteSession();
}

runTest().catch(console.error);

export { };