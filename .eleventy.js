const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Copies src/assets to docs/assets
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");

    eleventyConfig.addPlugin(mathjaxPlugin);

    eleventyConfig.addFilter("indexOf", function(array, item) {
        return array.indexOf(item);
    });

    eleventyConfig.addFilter("customDateFormat", (dateObj) => {
        if (!dateObj) return "";

        const d = new Date(dateObj + "T12:00:00");

        // Get weekday, date, month, year
        const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
        const day = d.getDate(); // numeric day
        const month = d.toLocaleDateString("en-US", { month: "long" });
        const year = d.getFullYear();

        return `${day} ${month} ${year} - ${weekday}`;
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};