const fs = require("node:fs");
const path = require("node:path");

module.exports = function () {
  const directory = path.join(__dirname, "../../assets/french data");

  const files = fs
    .readdirSync(directory)
    .filter((file) => /^unit-\d+\.json$/.test(file) || file === "misc.json")
    .sort((a, b) => {
      if (a === "misc.json") return 1;
      if (b === "misc.json") return -1;

      const idA = Number(a.match(/\d+/)[0]);
      const idB = Number(b.match(/\d+/)[0]);
      return idA - idB;
    });

  const units = files.map((file) => {
    const filePath = path.join(directory, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    return file === "misc.json" ? { ...data, isMisc: true } : data;
  });

  return { units };
};