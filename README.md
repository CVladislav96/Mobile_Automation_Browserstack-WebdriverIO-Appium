# Mobile Automation - BrowserStack + WebdriverIO + Appium

This repository contains a mobile automation project for the Wikipedia Android app using WebdriverIO, Appium, and BrowserStack.

## Project Overview

- Local test configuration: `wdio.conf.js`
- BrowserStack configuration: `wdio.bs.conf.js`
- Test specs: `test/specs/*.test.js`
- Local APK: `apps/wikipedia.apk`

## APK Download

Download the APK used for local tests here:

- [Download Wikipedia APK](./apps/wikipedia.apk)

> The local APK file is available at `apps/wikipedia.apk`.

## Prerequisites

- Node.js and npm
- Android SDK / Android emulator
- Appium server for local execution
- BrowserStack account for remote execution

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Update `.env` with your BrowserStack credentials and app URL:

```env
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_key
BROWSERSTACK_APP_URL=bs://your_app_url
```

## Run Local Tests

The local configuration uses an Android emulator and the APK from `apps/wikipedia.apk`.

```bash
npm test
```

## Run BrowserStack Tests

The BrowserStack configuration uses `wdio.bs.conf.js` and reads credentials from `.env`.

```bash
npm run test:bs
```

## Notes

- Local tests require Appium running on `localhost:4723`.
- BrowserStack tests require valid `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, and a BrowserStack app URL.
- The repository includes the Wikipedia APK file at `apps/wikipedia.apk` for local automation.
