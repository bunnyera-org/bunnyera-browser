import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';


const configPath = path.resolve(
  'config/browser.config.json'
);



export function loadBrowserConfig() {

  if (!fs.existsSync(configPath)) {

    return {

      defaultUrl: 'https://example.com',

      headless: true,

      viewport: {
        width: 1440,
        height: 900
      },

      screenshotDir: 'screenshots',

      timeoutMs: 30000,

      browserPath: null

    };

  }


  const raw = fs.readFileSync(
    configPath,
    'utf-8'
  );


  return {

    defaultUrl: 'https://example.com',

    headless: true,

    viewport: {
      width: 1440,
      height: 900
    },

    screenshotDir: 'screenshots',

    timeoutMs: 30000,

    browserPath: null,

    ...JSON.parse(raw)

  };

}




function findBrowserExecutable() {


  const candidates = [

    // Windows Chrome
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',

    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'

  ];



  for (const file of candidates) {

    if (fs.existsSync(file)) {

      return file;

    }

  }



  return null;

}





export async function createBrowserSession(options = {}) {


  const config = loadBrowserConfig();


  let executablePath =
    options.executablePath ??
    config.browserPath;



  if (!executablePath) {

    executablePath = findBrowserExecutable();

  }



  const launchOptions = {


    headless:
      options.headless ??
      config.headless,



    args: [

      '--disable-blink-features=AutomationControlled',

      '--disable-dev-shm-usage',

      '--no-first-run',

      '--no-default-browser-check'

    ]

  };



  if (executablePath) {

    launchOptions.executablePath =
      executablePath;

  }



  const browser =
    await chromium.launch(
      launchOptions
    );



  const context =
    await browser.newContext({

      viewport:

        options.viewport ??
        config.viewport,


      locale:

        options.locale ??
        'en-US',


      timezoneId:

        options.timezoneId ??
        undefined

    });



  const page =
    await context.newPage();



  page.setDefaultTimeout(

    options.timeoutMs ??
    config.timeoutMs

  );



  return {

    browser,

    context,

    page,

    config

  };

}





export function ensureDirectory(dir) {


  if (!fs.existsSync(dir)) {

    fs.mkdirSync(dir, {

      recursive: true

    });

  }

}





export function normalizeUrl(inputUrl) {


  if (!inputUrl) {

    return loadBrowserConfig()
      .defaultUrl;

  }



  if (

    inputUrl.startsWith('http://') ||

    inputUrl.startsWith('https://')

  ) {

    return inputUrl;

  }



  return `https://${inputUrl}`;

}