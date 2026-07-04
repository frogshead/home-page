import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'static', 'images', 'projects');

const projects = [
  { url: 'https://ratakierros.fi/',                    file: 'ratakierros.jpg' },
  { url: 'https://arewegoneyet.xn--viitamki-5za.fi/', file: 'arewegoneyet.jpg' },
  { url: 'https://chess.xn--viitamki-5za.fi/',        file: 'chess.jpg' },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

for (const { url, file } of projects) {
  console.log(`Screenshotting ${url}…`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({
    path: join(outDir, file),
    type: 'jpeg',
    quality: 85,
    clip: { x: 0, y: 0, width: 1280, height: 800 },
  });
  console.log(`  → ${file}`);
}

await browser.close();
