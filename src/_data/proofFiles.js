const fs = require("fs");
const path = require("path");

const proofsDir = path.join(__dirname, "../glossary/cute proofs");

function getProofs(dir) {
  const items = fs.readdirSync(dir).filter(f => !f.startsWith("."));
  const result = {
    files: [],
    folders: {}
  };

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recurse into subfolder
      result.folders[item] = getProofs(fullPath);
    } else if (item.endsWith(".md")) {
      result.files.push(item);
    }
  }

  result.files.sort();
  return result;
}

let proofFiles = {};
if (fs.existsSync(proofsDir)) {
  proofFiles = getProofs(proofsDir);
}

module.exports = proofFiles;