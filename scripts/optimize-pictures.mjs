import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const pictureDir = path.join(projectRoot, "public", "picture");

console.log("=== Image Optimization Script for @picture ===");
console.log(`Scanning: ${pictureDir}`);

const imageMappings = [
  { src: "shihab1.jpeg", target: "shihab-1.webp" },
  { src: "shihab2.jpeg", target: "shihab-2.webp" },
  { src: "shiahb3.png",  target: "shihab-3.webp" },
  { src: "shihab4.jpeg", target: "shihab-4.webp" },
  { src: "shihab5.jpeg", target: "shihab-5.webp" },
];

let processedCount = 0;
let totalOriginalSize = 0;
let totalOptimizedSize = 0;

for (const item of imageMappings) {
  const srcPath = path.join(pictureDir, item.src);
  if (!fs.existsSync(srcPath)) {
    continue;
  }

  const stat = fs.statSync(srcPath);
  totalOriginalSize += stat.size;

  const targetPath = path.join(pictureDir, item.target);
  await sharp(srcPath)
    .rotate() // preserve EXIF orientation
    .resize({
      width: 1600,
      height: 2000,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 85, effort: 6 })
    .toFile(targetPath);

  const optStat = fs.statSync(targetPath);
  totalOptimizedSize += optStat.size;
  processedCount++;

  const savedPct = ((1 - optStat.size / stat.size) * 100).toFixed(1);
  console.log(
    `✓ ${item.src} (${(stat.size / 1024 / 1024).toFixed(2)} MB) -> ${item.target} (${(optStat.size / 1024).toFixed(1)} KB) [Reduced by ${savedPct}%]`
  );
}

if (processedCount === 0) {
  console.log("✓ All pictures in public/picture are already fully optimized to WebP.");
  console.log("Current active files:");
  fs.readdirSync(pictureDir).forEach((file) => {
    if (file.endsWith(".webp")) {
      const size = (fs.statSync(path.join(pictureDir, file)).size / 1024).toFixed(1);
      console.log(`  - ${file} (${size} KB)`);
    }
  });
} else {
  const totalSavedPct = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
  console.log("\n==============================================");
  console.log(`Original Total:  ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB (${(totalOptimizedSize / 1024).toFixed(1)} KB)`);
  console.log(`Total Reduction: ${totalSavedPct}% reduction in payload!`);
  console.log("==============================================");
}
