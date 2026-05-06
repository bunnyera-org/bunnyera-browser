import { loadBrowserConfig } from './browser.js';

function main() {
  const config = loadBrowserConfig();

  console.log('🐰 BunnyEra Browser');
  console.log('AI browser automation module for the BunnyEra ecosystem.');
  console.log('');
  console.log('Available commands:');
  console.log('- npm run visit -- <url>');
  console.log('- npm run screenshot -- <url>');
  console.log('- npm run install:browsers');
  console.log('');
  console.log('Current config:');
  console.log(JSON.stringify(config, null, 2));
}

main();