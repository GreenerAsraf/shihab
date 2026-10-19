import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const pictureDir = path.join(projectRoot, "public", "picture");
const optimizedDir = path.join(pictureDir, "optimized");

if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

console.log("=== Image Optimization Script for @picture ===");
console.log(`Scanning: ${pictureDir}`);

const imageMappings = [
  { src: "shihab1.jpeg", targets: ["shihab-1.webp", "shihab1.webp"] },
  { src: "shihab2.jpeg", targets: ["shihab-2.webp", "shihab2.webp"] },
  { src: "shiahb3.png", targets: ["shihab-3.webp", "shihab3.webp", "shiahb3.webp"] },
  { src: "shihab4.jpeg", targets: ["shihab-4.webp", "shihab4.webp"] },
  { src: "shihab5.jpeg", targets: ["shihab-5.webp", "shihab5.webp"] },
];

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

for (const item of imageMappings) {
  const srcPath = path.join(pictureDir, item.src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`File not found: ${item.src}`);
    continue;
  }

  const stat = fs.statSync(srcPath);
  totalOriginalSize += stat.size;

  // Optimize primary target in optimized/
  const primaryOutPath = path.join(optimizedDir, item.targets[0]);
  await sharp(srcPath)
    .rotate() // preserve EXIF orientation
    .resize({
      width: 1600,
      height: 2000,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 85, effort: 6 })
    .toFile(primaryOutPath);

  const optStat = fs.statSync(primaryOutPath);
  totalOptimizedSize += optStat.size;

  // Copy to public/picture/ and create all target aliases
  for (const target of item.targets) {
    const copyPath = path.join(pictureDir, target);
    fs.copyFileSync(primaryOutPath, copyPath);
  }

  const savedPct = ((1 - optStat.size / stat.size) * 100).toFixed(1);
  console.log(
    `✓ ${item.src} (${(stat.size / 1024 / 1024).toFixed(2)} MB) -> ${item.targets[0]} (${(optStat.size / 1024).toFixed(1)} KB) [Reduced by ${savedPct}%]`
  );
}

const totalSavedPct = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
console.log("\n==============================================");
console.log(`Original Total:  ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Optimized Total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB (${(totalOptimizedSize / 1024).toFixed(1)} KB)`);
console.log(`Total Reduction: ${totalSavedPct}% reduction in payload!`);
console.log("==============================================");
