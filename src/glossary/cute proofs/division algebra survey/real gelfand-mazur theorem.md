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

now let's reexamine what i said at the start.

<div class = "subthm-box" type = "rmk">
    the reason i call this version of gelfand-mazur a <i>generalization</i> of the complex version is because any complex normed division algebra is of course real, but the quaternions and reals are not complex algebras.

    this second part follows because if the quaternions were a complex algebra, then we would have a copy of $\C$ in $\H$. but by definition of associative algebra, $\C$ commutes with everything in $\H$ so $\C$ is in the center $\zz(\H)$. but this is absurd after a quick check: $$i(a+bi+cj+dk) = (a+bi+cj+dk)i \implies c = d = 0 \implies \zz(\H) \subseteq \R.$$
</div>

back to the proof of the real version:

<div class = "subthm-box" type = "background">
    apparently, mazur proved this result first but refused to oblige his publisher and shorten the proof so it was published sans any explanation.

    soon after though, gelfand released a full proof. i used his version as my primary reference (despite it only appearing online in <u><a href = "/assets/proof notes/gelfand normierte ringe.pdf" target = "_blank">german</a></u>...).

    <u><a href = "../gelfand normierte ringe eng-trans">here</a></u> is my sorry attempt at an english translation.
</div>

the proof requires a lot of groundwork which i give below.



under construction.