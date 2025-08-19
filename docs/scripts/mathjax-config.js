window.MathJax = {
  tex: {
    packages: { '[+]': ['ams'] },
    macros: {
      Q: "{\\mathbb{Q}}",
      R: "{\\mathbb{R}}",
      Z: "{\\mathbb{Z}}",
      N: "{\\mathbb{N}}",
      C: "{\\mathbb{C}}",
      norm: ["{\\lVert #1 \\rVert}", 1],  // one-argument macro
      inv: "^{-1}",
      0: "{\\varnothing}"
    },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']]
  }
};