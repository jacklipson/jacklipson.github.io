const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Copies src/assets to docs/assets
    eleventyConfig.addPassthroughCopy("src/styles");
    // eleventyConfig.addPassthroughCopy("src/content"); // Copies src/img to _site/img

    eleventyConfig.addPlugin(mathjaxPlugin);


    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};