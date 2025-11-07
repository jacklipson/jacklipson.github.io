---
layout: layouts/classnote.njk
title: math 254a - lec 25
class: math 254a
lec_date: "2025-10-24"
---

Today, we talked about discriminants and differents in an extension.

<div class = "subthm-box" type = "prop">
    Consider lattices $X, X'$.

    $\dd_{X', T} = \dd_{X, T} \cdot \chi(X, X')^2$.
</div>

<div class = "subthm-box" type = "proof">
    Recall $$\dd_{X', T} = \Wedge^n T(\Wedge^n X', \Wedge^n X') = \Wedge^n T(\Wedge^n X \chi (\Wedge^n X, \Wedge^n X'), \Wedge^n X \chi (\Wedge^n X, \Wedge^n X')) = \Wedge^n T((\Wedge^n X) \chi (X, X'), (\Wedge^n X) \chi (X, X')) = \chi(X, X')^2 \dd_{X, T}.$$
</div>

Let's start applying this to our usual setting:

<div class = "subthm-box" type = "setting">
    Consider a DD $A$ with a finite separable extension $L$ over $K = \Frac A$ and integral closure $B$ of $A$ in $L$.

    Notice $B$ is a $B$-lattice and $A$-lattice in $L$.

    Recall $B \subseteq B^* = B_T$ for $T = Tr$.

    We call $B^*$ the <u>co-different</u>.
</div>

This "co-" prompts a new definition...

<div class = "subthm-box" type = "def" name = "different">
    The <u>different</u> $\D_{B/A} \coloneq (B^*)^{-1} = \chi_B(B^*, B) = \chi_B (B^* / B)$.
</div>

<div class = "subthm-box" type = "def" name = "discriminant">
    The <u>discriminant (ideal of $A$)</u> $\dd_{B/A} \coloneq \dd_{B,T} = \chi_A(B^*, B)$.
</div>

<div class = "subthm-box" type = "lemma">
    $$\dd_{B/A} = N_{L/K}(\D_{B/A})$$
</div>

<div class = "subthm-box" type = "proof">
    $N_{L/K}(\D_{B/A}) = N_{L/K}(\chi_B(B^*/B)) = \chi_A(B^*/B) = \dd_{B/A}$.
</div>

Notably, this means $\dd_{B/A} \subseteq A$. Also, the different determines the discriminant!

<div class = "subthm-box" type = "ex">
    Consider a free $A$-module $B$ with basis $e_1, \ldots, e_n$.

    Per the example from last class, $\dd_{B/A} = (\det (\Tr(e_i, e_j)))$.

    As a special case, if $A = \Z$, then we can define the discriminant as an element of $\Z$.
</div>

<div class = "subthm-box" type = "prop">
    Consider fractional ideals $\aa \lhd A$, $\bb \lhd K$.

    If $\Tr = \Tr_{L/K}$, then:

    1. $\Tr(\bb) \subseteq \aa$ if and only if $\bb \subseteq \aa \D_{B/A}\inv$.

    2. If $\Tr(\bb) \subseteq \aa$ for all $\aa, \bb$ if and only if $\bb \subseteq \aa \D_{B/A}\inv$, then $\D_{B/A} = \D_{L/k}$ for any rings $B / A$.
</div>

To prove this, we'll need a lemma:

<div class = "subthm-box" type = "lemma">
    If $\aa = A$ and $\cc \in I_B$, then $\Tr(\cc) \subseteq A$ if and only if $\cc \subseteq \D_{L/K}\inv = B_T^*$.
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    If $y \in B_T^*$, then $x = 1$ implies $\Tr(y) \in A$.

    Conversely, if $y \in \cc$, then for all $x \in B$, $xy \in \cc$ so $\Tr(xy) \in A$.
</div>


<div class = "subthm-box" type =  "proof" name = "prop">
    1. $$\Tr(\bb) \subseteq \aa \iff \aa\inv \Tr(\bb) \subseteq A \overset{\Tr \; K-\text{linear}}\iff \Tr(\aa\inv \bb) \subseteq A \iff \aa \inv \bb \subseteq \D_{L/K}\inv \overset{\text{lemma}}\iff \bb \subseteq \aa \D_{L/K}\inv.$$

    2. For all $\aa, \bb$, we have: $\bb \subseteq \aa \D\inv$ if and only if $\Tr \bb \subseteq \aa$ if and only if $\bb \subseteq \aa \D_{L/K}\inv$ implying $\aa D\inv = \aa D_{L/K}\inv$ for all $\aa$, i.e. $\D\inv = \D_{L/K\inv}$ are equal ideals.
</div>


We consider the following situation [Serre III.4]:

<div class = "subthm-box" type = "prop">
    Take $M - L - K$ over $C - B - A$ for $M/L$ finite separable of degree $n$ with $C$ the integral closure of $A$ in $M$. Then:

    1. $\D_{C/A} = \D_{C/B} \cdot \D_{B/A}$.

    2. $\dd_{C/A} = N_{L/K} (\dd_{C/B}) \cdot \dd_{B/A}^n$.
</div>

<div class = "subthm-box" type = "proof">
    1. For all $\cc \in I_C$, $$\cc \subseteq \D_{C/B}\inv \iff \D_{B/A}\inv \Tr_{M/L} \cc \subseteq \D_{B/A}\inv \iff \Tr_{L/K}(\D_{B/A}\inv \Tr_{M/L} \cc) = \Tr_{M/K} (\D_{B/A}\inv \cc) \subseteq A \iff \D_{B/A}\inv \cc \subseteq \D_{C/A}\inv \iff \cc \subseteq \D_{B/A} \cdot \D_{C/A}\inv.$$

    2. $$\dd_{C/A} = N_{M/K}(\D_{C/A}) = N_{L/K}(N_{M/L}(\D_{C/B} \D_{B/A})) = N_{L/K}(\dd_{C/B} D_{B/A}) = N_{L/K}(\dd_{C/B}) \dd_{B/A}^n.$$
</div>