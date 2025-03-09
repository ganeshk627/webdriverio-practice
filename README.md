# wdio-appium-basic



# 00. Pre-requisites:
1. [Node Js](https://nodejs.org/en/)
2. Java
3. [Android Studio](https://developer.android.com/studio)
4. [Appium Inspector](https://github.com/appium/appium-inspector/releases)
5. Appium Server or Appium Server GUI
- For MacOS and Linux (CLI) : ```sudo npx install -g appium```
- For Windows, MacOS and Linux (GUI): [Download Appium Desktop](https://github.com/appium/appium-desktop/releases)





# 01. Project Setup

To create new npm project
```bash
npm init -y
```
# 02. Install Dependencies

## 2.1 To install `wdio`
```bash
npm install @wdio/cli
```
(or)
```bash
npm i @wdio/cli -D
```

## 2.2 To install `appium`
```bash
npx install appium
```

## 2.3 To install `uiautomator2` library for Android
```bash
appium driver install uiautomator2
```

## 2.4 To install `ts-node`

```bash
npm install ts-node --save-dev
```

If `ts-node` is not installed, you will get below error.
```c
Execution of 1 workers started at 2024-02-25T12:22:43.500Z

2024-02-25T12:22:43.515Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-02-25T12:22:43.519Z INFO @wdio/appium-service: Will spawn Appium process: node /Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/wdio-appium-basic/node_modules/appium/index.js --base-path / --address localhost --port 4723 --relaxed-security
2024-02-25T12:22:44.737Z ERROR @wdio/appium-service: WARN
2024-02-25T12:22:44.738Z ERROR @wdio/cli:utils: A service failed in the 'onPrepare' hook
Error: WARN
    at Socket.<anonymous> (file:///Users/ganeshk/Automation%20Testing/Automation%20Testing/workdone/VSCode/wdio-appium-basic/node_modules/@wdio/appium-service/build/launcher.js:172:28)
    at Object.onceWrapper (node:events:628:26)
    at Socket.emit (node:events:513:28)
    at Socket.emit (node:domain:489:12)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)

Continue...
2024-02-25T12:22:44.739Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2024-02-25T12:22:44.740Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.conf.js
[0-0] Error: "ts-node/esm/transpile-only 'resolve'" did not call the next hook in its chain and did not explicitly signal a short circuit. If this is intentional, include `shortCircuit: true` in the hook's return.
[0-0]     at new NodeError (node:internal/errors:387:5)
[0-0]     at ESMLoader.resolve (node:internal/modules/esm/loader:852:13)
[0-0]     at ESMLoader.getModuleJob (node:internal/modules/esm/loader:431:7)
[0-0]     at async Promise.all (index 0)
[0-0]     at ESMLoader.import (node:internal/modules/esm/loader:533:24)
[0-0]     at loadESM (node:internal/process/esm_loader:91:5)
[0-0]     at handleMainPromise (node:internal/modules/run_main:65:12)
[0-0] FAILED
2024-02-25T12:22:44.933Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2024-02-25T12:22:44.933Z INFO @wdio/cli:launcher: Run onComplete hook

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:01  

2024-02-25T12:22:44.934Z INFO @wdio/local-runner: Shutting down spawned worker
2024-02-25T12:22:45.023Z INFO @wdio/appium-service: Appium started with ID: 2241
2024-02-25T12:22:45.185Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2024-02-25T12:22:45.185Z INFO @wdio/local-runner: shutting down
```



# 03. To create config file,

```bash
npx wdio config
```
 Select the configurations in Terminal as below:

 ```bash
ganeshk@Ganesh’s MacBook Pro wdio-appium-basic % npx wdio config

===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "wdio-appium-basic" was detected at "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/wdio-appium-basic", 
correct? Yes
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
? Which mobile environment you'ld like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? 
? Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No
? Do you want to add a service to your test setup? appium
? Do you want me to run `npm install` Yes


Installing packages using npm:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- @wdio/appium-service@latest
- appium-uiautomator2-driver



up to date, audited 1307 packages in 5s

116 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
✔ Success!

Creating a WebdriverIO config file...
✔ Success!

Adding "wdio" script to package.json
✔ Success!

🤖 Successfully setup project at /Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/wdio-appium-basic 🎉

Join our Discord Community Server and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://discord.webdriver.io

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio

To run your tests, execute:
$ cd /Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/wdio-appium-basic
$ npm run wdio

? Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? Yes

👋 Hello, Appium user ✨

? Select an option Exit
Exiting Appium Installer...

ganeshk@Ganesh’s MacBook Pro wdio-appium-basic % 
 ```


# 04. Creating Test Structure
Create tests under `test/specs` as below:
```javascript
//first-test.js
describe('first launch', ()=>{
    it('test', ()=>{
    })
})
```


# 05. Running Tests

## To run all the tests,
```bash
npx wdio
```
(or)
```bash
npx wdio wdio.conf.js
```

# 06. Locating Elements

## 6.1 Start Appium Server either CLI or GUI

### 6.1.1 Using Command Line Interface (CLI):

```bash
appium -p 4723
```
or
```bash
appium
```
or
```bash
npx appium
```
or
```bash
appium server -a 127.0.0.1 -p 4723
```
or
```bash
# To trigger test from local network (not working)
appium server -a 0.0.0.0 -p 4723 --allow-cors
```


### 6.1.2 Using GUI or CLI

#### 6.1.2.1 Using GUI
1. Open Appium Server Application
2. Set host: ```0.0.0.0``` and port: ```4723```
3. Click 'startServer' button

## 6.2 Connect Server with Appium Inspector
1. Open Appium Inspector Application
2. Set Remote Host: ```127.0.0.1```, Remote Path: ```4723``` and Remote Path: ```/``` or ```/wd/hub```
2. Set the capabilities one by one or direct json as below
```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:platformVersion": "9.0",
  "appium:deviceName": "Pixel 6 Pro API 28",
  "appium:app": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/wdio-appium-basic/app/android/ApiDemos-debug.apk"
}
```
3. Then click 'Start Session' button

## 6.3 Pick the Locator and use it

## 6.4 Locator Strategies
1. Accessibility Id --> Always remains same for android and ios; so it is preferred over other lsocator
2. Class name/Tag Name --> Not unique mostly; Ex: TextView, Button, Layout
3. Xpath --> Go-to selector after Accessibility id coz of dynamic and flexible; cons-> long and difficult to ready
4. Resource id --> Sometimes  not unique but can be used if you know that element will have a specific resource-id;




Resources
---------
[DOC: Getting started](https://app.eu-central-1.saucelabs.com/getting-started/automatedtesting)

[DOC: Getting started - Appium](https://app.eu-central-1.saucelabs.com/getting-started/guides/appium)

[GITHUB: Saucelabs my-demo-app-rn](https://github.com/saucelabs/my-demo-app-rn/releases)

---------