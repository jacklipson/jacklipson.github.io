module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets"); // Copies src/img to _site/img
    eleventyConfig.addPassthroughCopy("styles"); // Copies src/img to _site/img

    return {
        dir: {
            output: "docs"
        }
    }

    // return {
    // dir: {
    //     input: "src",
    //     output: "_site"
    // };
    // };
};