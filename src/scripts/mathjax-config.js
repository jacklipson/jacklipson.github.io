window.MathJax = {
  loader: {
      load: ['[tex]/mathtools']
    },
  tex: {
    packages: { '[+]': ['ams', 'mathtools', 'graphicx'] },
    macros: {
      Q: "{\\mathbb{Q}}",
      R: "{\\mathbb{R}}",
      Z: "{\\mathbb{Z}}",
      N: "{\\mathbb{N}}",
      C: "{\\mathbb{C}}",
      H: "{\\mathbb{H}}",
      F: "{\\mathbb{F}}",
      O: "{\\mathbb{O}}",
      P: "{\\mathbb{P}}",
      OO: "{\\mathcal{O}}",
      aa: "{\\mathfrak{a}}",
      bb: "{\\mathfrak{b}}",
      cc: "{\\mathfrak{c}}",
      mm: "{\\mathfrak{m}}",
      pp: "{\\mathfrak{p}}",
      qq: "{\\mathfrak{q}}",
      zz: "{\\mathfrak{z}}",
      norm: ["{\\lVert #1 \\rVert}", 1],  // one-argument macro
      inv: "{^{-1}}",
      ol: "\\overline",
      0: "{\\varnothing}",
      Hom: "{\\text{Hom}}",
      Frac: "{\\text{Frac}\\;}",
      Tr: "{\\text{Tr}}",
      im: "{\\text{im}\\;}",
      sur: "{\\;\\twoheadrightarrow\\;}",
      inj: "{\\;\\hookrightarrow\\;}",
      reflectbox: ["\\style{display:inline-block; transform:scaleX(-1)}{#1}", 1],
      mapsfrom: "{\\;\\mathrel{\\reflectbox{\\mapsto}}\\;}",
      coloneq: "{\\;\\coloneqq\\;}" // coloneqq is identical, just old legacy command since coloneq breaks :/
    },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']]
  }
};