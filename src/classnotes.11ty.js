const fs = require("fs");
const path = require("path");

// Import your site.json data so we can loop through classes
const siteData = require("./_data/site.json");

function getFilesForClass(className) {
  const targetDir = path.join(__dirname, `glossary/class notes/${className}`);

  if (!fs.existsSync(targetDir)) {
    return []; // in case a folder doesn't exist
  }

  return fs.readdirSync(targetDir).filter(f => !f.startsWith("."));
}

module.exports = class {
  data() {
    return {
      // This tells Eleventy to create *one page per class*
      pagination: {
        data: "site.classes",   // comes from site.json
        size: 1,
        alias: "className"
      },
      permalink: data => `${data.className}.json`,
      eleventyExcludeFromCollections: true,
    };
  }

  render({ className }) {
    const files = getFilesForClass(className);
    return JSON.stringify(files, null, 2);
  }
};