const fs = require("node:fs");
const path = require("node:path");

module.exports = function () {
  const filePath = path.join(
    __dirname,
    "../../assets/french-units.json"
  );

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};