---
layout: layouts/proof.njk
title: ostrowski's theorem
publish_date: "2025-08-17"
---

<b>ostrowski's theorem</b> says that any non-trivial absolute value on the rational numbers $\Q$ is some power in $(0,1]$ of either the real or p-adic absolute value.

absolute values are quite similar to topological metrics but with an added constraint:

<div class="subthm-box" type = "def" name = "absolute value">
    an <u>absolute value</u> is a map $|\cdot|: D \to \R_{\geq 0}$ for an integral domain $D$ such that:
    <ol>
        <li> $|x| \geq 0$ with $|x| = 0$ iff $x = 0$ (non-neg + pos-def) </li>
        <li> $|x + y| \leq |x| + |y|$ (triangle) </li>
        <li> $|xy| = |x||y|$ (multiplicativity; this is new) </li>
    </ol>
</div>

<div class="subthm-box" type = "rmk">
    this third condition tells us $|1 \times 1| = |1||1|$ so $|1| = 1$. similarly, $|-1 \times -1| = |-1|$ gives $|-1| = 1$. since we are in an integral domain, we can divide (via the fraction field) so actually $|-x| = |x|$ also. moreover, $|\frac{a}{b}|^{-1} = |\frac{b}{a}|$.

    also, for any natural number, $|\overbrace{1+\cdots + 1}^{n}| \leq n$. equality does not hold if $|\cdot|$ is a power (outside of $(0,1)$) of the usual real absolute value.

</div>

let's return to the other element in ostrowski's theorem that might be unfamiliar to a reader: the p-adics. chapter 2 of Serre's <i> a course in arithmetic </i> gives a great introduction to the p-adics that i regurgitate here.

<div class="subthm-box" type = "def" name = "p-adic integers">
    for a prime $p$, consider the projective system: $$\cdots \to \Z/p^n\Z \overset{\phi_n}\to \Z/p^{n-1}\Z \to \cdots \overset{\phi_2}\to \Z/p\Z$$

    the p-adic integers $\Z_p$ is the projective limit $\varprojlim (\Z/p^n\Z, \phi_n)$.
</div>

<div>

now let's get to the proof.

<div class="thm-box" name = "ostrowski">
    the only absolute values $|\cdot|:\Q \to \R_{\geq 0}$ are either $|x|^\alpha$ for $\alpha \in (0,1)$ OR $|x|_p^\beta$ for $p$ a prime number and $\beta \in \R_{\geq 0}$.
</div>

<div class="subthm-box" type = "proof" name = "continued">
    we deal with two cases.
</div>