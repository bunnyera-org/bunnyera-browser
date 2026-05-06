# BunnyEra Browser

BunnyEra Browser is the AI browser automation module of the BunnyEra ecosystem.

It provides webpage access, automated browsing, screenshot capture, and browser task execution for BunnyEra Claw and future AI workflows.

## Repository Role

```txt
bunnyera-browser = BunnyEra AI browser automation module
Features
Visit webpages with Playwright
Capture full-page screenshots
Read webpage title and final URL
Provide browser automation utilities
Support BunnyEra Claw execution workflows
Prepare browser control for AI agents
Project Structure
bunnyera-browser/
├─ config/
│  ├─ default.json
│  └─ browser.config.json
├─ models/
│  └─ README.md
├─ screenshots/
│  └─ .gitkeep
├─ src/
│  ├─ index.js
│  ├─ browser.js
│  ├─ visit.js
│  └─ screenshot.js
├─ .env.example
├─ .gitignore
├─ LICENSE
├─ package.json
└─ README.md
Install
npm install

Install Playwright Chromium browser:

npm run install:browsers
Usage

Show module information:

npm start

Visit a webpage:

npm run visit -- https://example.com

Capture a screenshot:

npm run screenshot -- https://example.com

Screenshots are saved to:

screenshots/
BunnyEra Ecosystem

This repository connects with:

bunnyera-claw
bunnyera-console
bunnyera-ai
bunnyera-internal-workflows
Roadmap
Add browser task JSON format
Add login state detection
Add page content extraction
Add webpage form automation
Add screenshot comparison
Add BunnyEra Claw RPC integration
Add local browser session profiles
License

MIT


---

# 10. 检查 `.gitignore`

```powershell
notepad .gitignore

建议改成：

node_modules/
.env
.env.local
dist/
build/
coverage/
.DS_Store
screenshots/*.png
screenshots/*.jpg
screenshots/*.jpeg