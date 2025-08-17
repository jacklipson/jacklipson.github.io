const fs = require("fs");
const path = require("path");
const site = require("./site.json"); // your site.json with "classes": [...]

function getFilesForClass(className) {
  const targetDir = path.join(__dirname, `../glossary/class notes/${className}`);
  if (!fs.existsSync(targetDir)) return [];

  return fs.readdirSync(targetDir)
    .filter(f => !f.startsWith(".") && f.startsWith("lec") && f.endsWith(".md"))
    .sort((a, b) => {
      // extract number from 'lec##.md'
      const numA = parseInt(a.match(/\d+/)[0], 10);
      const numB = parseInt(b.match(/\d+/)[0], 10);
      return numA - numB;
    });
}

const classFiles = {};

site.classes.forEach(cls => {
  // convert spaces to underscores for keys
  const key = cls.replace(/ /g, "_");
  classFiles[key] = getFilesForClass(cls);
});

module.exports = classFiles;