import { createBrowserSession, normalizeUrl } from './browser.js';

async function main() {
  const targetUrl = normalizeUrl(process.argv[2]);
  const session = await createBrowserSession();

  try {
    console.log(`[BunnyEra Browser] Visiting: ${targetUrl}`);

    await session.page.goto(targetUrl, {
      waitUntil: 'domcontentloaded'
    });

    const title = await session.page.title();
    const url = session.page.url();

    console.log('');
    console.log('Visit result:');
    console.log(JSON.stringify({
      ok: true,
      title,
      url
    }, null, 2));
  } catch (error) {
    console.error('');
    console.error('Visit failed:');
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  } finally {
    await session.browser.close();
  }
}

main();