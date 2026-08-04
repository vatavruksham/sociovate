/**
 * Sociovate — Image Inventory Check
 * Run: node scripts/check-images.mjs
 */
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const required = [
  'images/hero-dashboard.jpg',
  'images/og.jpg',
  'images/features/content-calendar.jpg',
  'images/features/auto-publish.jpg',
  'images/features/analytics-dashboard.jpg',
  'images/features/unified-inbox.jpg',
  'images/features/ai-draft-generator.jpg',
  'images/features/multi-brand-management.jpg',
];

console.log('Checking Sociovate local images...');
let missing = 0;
for (const rel of required) {
  const filepath = join(PUBLIC_DIR, rel);
  if (existsSync(filepath)) console.log(`  \u2713 ${rel}`);
  else {
    console.error(`  \u2717 missing: ${rel}`);
    missing += 1;
  }
}
if (missing) {
  console.error(`\n${missing} image(s) missing. See IMAGE-GUIDE.md.`);
  process.exit(1);
}
console.log('\nAll local images present.');
