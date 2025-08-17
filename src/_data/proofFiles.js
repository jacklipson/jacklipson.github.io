const fs = require("fs");
const path = require("path");

const proofsDir = path.join(__dirname, "../glossary/cute proofs");

let proofFiles = [];

if (fs.existsSync(proofsDir)) {
  proofFiles = fs.readdirSync(proofsDir)
    .filter(f => !f.startsWith(".") && f.endsWith(".md"))
    .sort(); // optional: alphabetic order
}

module.exports = proofFiles;