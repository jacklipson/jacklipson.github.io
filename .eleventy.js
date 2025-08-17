const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Copies src/assets to docs/assets
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");

    eleventyConfig.addPlugin(mathjaxPlugin);

    eleventyConfig.addFilter("indexOf", function(array, item) {
        return array.indexOf(item);
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};