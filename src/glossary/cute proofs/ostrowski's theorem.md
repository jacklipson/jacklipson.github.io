---
layout: layouts/proof.njk
title: ostrowski's theorem
publish_date: "2025-08-17"
---

<b>ostrowski's theorem</b> says that any non-trivial absolute value on the rational numbers $\Q$ is some power in $(0,1]$ of either the real or p-adic absolute value.

absolute values are quite similar to topological metrics but with an added constraint:

<div class="def-box" name = "absolute value">
    an <u>absolute value</u> is a map $|\cdot|: D \to \R_{\geq 0}$ for an integral domain $D$ such that:

    <ol>
        <li> $|x| \geq 0$ with $|x| = 0$ iff $x = 0$ (non-neg + pos-def) </li>
        <li> $|x + y| \leq |x| + |y|$ (triangle) </li>
        <li> $|xy| = |x||y|$ (multiplicativity; this is new) </li>
    </ol>
</div>

this third condition tells us $|1 \times 1| = |1||1|$ so $|1| = 1$. similarly, $|-1 \times -1| = |-1|$ gives $|-1| = 1$.

since we are in an integral domain, we can take fractions, i.e. $1 = |\frac{a}{b}\frac{b}{a}|$ so $|\frac{a}{b}|^{-1} = |\frac{b}{a}|$.

also, for any natural number, $|\overbrace{1+\cdots + 1}^{n}| \leq n$. equality does not hold if $|x|^\alpha|$ is the absolute value for some $\alpha \in (0,1)$ – it's obvious this breaks when $\alpha < 0$.



now let's get to the proof.

<div class="theorem-box" name = "ostrowski">
    the only absolute values $|\cdot|:\Q \to \R_{\geq 0}$ are either $|x|^\alpha$ for $\alpha \in (0,1)$ OR $|x|_p^\beta$ for $p$ a prime number and $\beta \in \R_{\geq 0}$.
</div>

<div class="proof-box">

</div>

<div class="proof-box" name = "continued">

</div>