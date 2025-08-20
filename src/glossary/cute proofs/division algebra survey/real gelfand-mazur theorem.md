---
layout: layouts/proof.njk
title: real gelfand-mazur theorem
publish_date: "2025-08-19"
---

the <b>real gelfand-mazur theorem</b> is a generalization of the <u><a href = "../complex gelfand-mazur theorem">complex gelfand-mazur theorem</a></u>.

this version says the following:

<div class = "thm-box" name = "gelfand-mazur (real)">
    any real normed associative division algebra $A$ is isometrically isomorphic to one of $\R, \C, \H$.
</div>

here's a refresher on normed division algebras:

<div class = "subthm-box" type = "def" name="associative algebra">
    an <u>associaitve algebra</u> $A$ is a (possibly non-commutative nor unital) ring that is a module over a commutative ring (usually a field) $k$ such that $$c(xy) = (cx)y  = x(cy) \quad \text{for} \quad c \in k, \; x, y \in A.$$
</div>

<div class = "subthm-box" type = "def" name = "normed algebra, division algebra">
    a <u>normed algebra</u> $(A, ||\cdot||)$ is an associative algebra over $\R$ or $\C$ with a norm such that: $$||xy|| \leq ||x|| \; ||y||.$$

    this submultiplicatitive property forces continuity of the algebra multiplication.

    a <u>division algebra</u> $A$ is an associative algebra with $1_A$ such that every nonzero element has a multiplicative inverse.
</div>

the proof requires a lot of groundwork which we give below.

under construction.