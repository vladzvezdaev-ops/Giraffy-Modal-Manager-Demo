#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const distDir = path.join(__dirname, "..", "dist");

function writeNoJekyll(dir) {
  const target = path.join(dir, ".nojekyll");
  try {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(target, "");
      console.log("Created", target);
      return true;
    }
  } catch (err) {
    console.error("Failed to create .nojekyll in", dir, err);
  }
  return false;
}

const ok1 = writeNoJekyll(outDir);
const ok2 = writeNoJekyll(distDir);

if (!ok1 && !ok2) {
  console.error("No output directory found (out/ or dist/). Run build first.");
  process.exit(1);
}
