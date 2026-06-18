import sharp from 'sharp';
import { readdirSync, unlinkSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const dir = '/home/runner/workspace/artifacts/adulis-food/public/factory';
const files = readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const input = join(dir, file);
  const outName = basename(file, extname(file)) + '.webp';
  const output = join(dir, outName);
  await sharp(input).webp({ quality: 82, effort: 4 }).toFile(output);
  const inKB = (statSync(input).size / 1024).toFixed(0);
  const outKB = (statSync(output).size / 1024).toFixed(0);
  console.log(`${file} → ${outName}  ${inKB}KB → ${outKB}KB`);
  unlinkSync(input);
}
console.log('Done');
