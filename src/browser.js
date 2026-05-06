import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const configPath = path.resolve('config/browser.config.json');

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
      timeoutMs: 30000
    };
  }

  const raw = fs.readFileSync(configPath, 'utf-8');
  return JSON.parse(raw);
}

export async function createBrowserSession(options = {}) {
  const config = loadBrowserConfig();

  const browser = await chromium.launch({
    headless: options.headless ?? config.headless
  });

  const context = await browser.newContext({
    viewport: options.viewport ?? config.viewport
  });

  const page = await context.newPage();
  page.setDefaultTimeout(options.timeoutMs ?? config.timeoutMs);

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
    return loadBrowserConfig().defaultUrl;
  }

  if (inputUrl.startsWith('http://') || inputUrl.startsWith('https://')) {
    return inputUrl;
  }

  return `https://${inputUrl}`;
}