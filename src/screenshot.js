import path from 'path';
import {
  createBrowserSession,
  ensureDirectory,
  normalizeUrl
} from './browser.js';

function createScreenshotName() {
  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-');

  return `bunnyera-browser-${timestamp}.png`;
}

async function main() {
  const targetUrl = normalizeUrl(process.argv[2]);
  const session = await createBrowserSession();

  try {
    const screenshotDir = session.config.screenshotDir || 'screenshots';
    ensureDirectory(screenshotDir);

    const outputPath = path.join(screenshotDir, createScreenshotName());

    console.log(`[BunnyEra Browser] Opening: ${targetUrl}`);

    await session.page.goto(targetUrl, {
      waitUntil: 'networkidle'
    });

    await session.page.screenshot({
      path: outputPath,
      fullPage: true
    });

    const title = await session.page.title();

    console.log('');
    console.log('Screenshot result:');
    console.log(JSON.stringify({
      ok: true,
      title,
      url: session.page.url(),
      screenshot: outputPath
    }, null, 2));
  } catch (error) {
    console.error('');
    console.error('Screenshot failed:');
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  } finally {
    await session.browser.close();
  }
}

main();