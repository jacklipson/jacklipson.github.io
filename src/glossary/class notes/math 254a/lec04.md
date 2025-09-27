---
layout: layouts/classnote.njk
title: math 254a - lec 04
class: math 254a
lec_date: "2025-09-05"
---

Today we showed that ideals can be uniueqly factored in Dedekind domains.

<div class = "subthm-box" type = "prop">
    If $\aa$ is a fractional ideal, then it can be uniquely factored as $\aa = \Pi_\pp \pp^{\nu_\pp(\aa)}$.
</div>

<div class = "subthm-box" type = "proof">
    (Uniqueness): If $\Pi_\pp \pp^{e_\pp} = \Pi_\pp \pp^{e_\pp'}$, then applying $\nu_\qq$ gives exactly $e_\qq = e_\qq'$.

    (Existence): It suffices to show that if $\aa, \bb$ are fractional ideals and $\nu_\pp(\aa) = \nu_\pp(\bb)$ for all primes $\pp$, then $\aa = \bb$ because clearly $\nu_\pp(\aa) = \nu_\pp(\Pi_\pp \pp^{\nu_\pp(\aa)})$.

    But, it's enough to show that for all $\pp$, $\nu_\pp (\aa) \geq \nu_\pp (\bb)$ implies $\aa \leq \bb$.

    Or, since we are dealing with fractioanl ideals, that for all $\pp$, $\nu_\pp(ab\inv) \geq \nu_\pp(1) = 0$ implies $\aa\bb \inv \subseteq A$.
    
    But, if $\nu_\pp(\cc) \geq 0$ for all $\pp$, then $\cc \subseteq A_\pp$ for all $\pp$. This happens if and only if $\cc \subseteq \bigcap_\pp A_\pp = A$ (as proved in a past lecture since all primes are maximal) so we are done.
</div>

Cute!

Now a lemma:

<div class = "subthm-box" type = "lemma" name = "approximation">
    For $x_1, \ldots, x_n \in K$, distinct nonzero primes $\pp_1, \ldots, \pp_n$, and $n_1, \ldots, n_k \in \Z$, there exists an $x \in K$ with $\nu_{\pp_i}(x - x_i) \geq n_i$ for all $i = 1, \ldots, n$ and $\nu_\qq(x) \geq 0$ for all $\qq \neq \pp_i$.
</div>

<div class = "subthm-box" type = "proof">
    If the theorem held for $x_i \in A$, then given $y_i = \frac{a_i}{b_i} \in K$, we could set $b = \Pi b_i$ and $m_i = \nu_{\pp_i}(b)$.
    
    Applying the theorem for $\frac{a_ib}{b_i} \in A$, distinct nonzero primes $\pp_i$, and $n_i + m_i$ would give some $a \in A$ for which $\nu_{\pp_i}(a - \frac{a_i b}{b_i}) = \nu_{\pp_i}(\frac{a}{b} - \frac{a_i}{b_i}) + \nu_{\pp_i}(b) \geq n_i + m_i$, implying $\nu_{\pp_i}(\frac{a}{b} - y_i) \geq n_i$ and $\nu_\qq(a) = 0$.

    To make this work though, we need $\nu_\qq(\frac{a}{b}) \geq 0$, i.e. $\nu_\qq(a) \geq \nu_\qq(b)$. Luckily, we proved in the last lecture that finitely many primes contain $b$ so we can redo our application of the theorem (for $x_i \in A$) but additionally using $y_i = 0$ and $n_i = \nu_\qq(b)$ for these extra primes containing $b$.

    Now consider $A \sur A/\pp_1^{n_1} \cdots \pp_k^{n_k} \overset{CRT} \cong A/\pp_i^{n_i}$. There is clearly some $x$ mapping to $(x_1 + \pp_1^{n_1}, \ldots, x_k + \pp_k^{n_k})$ with $x - x_i \in \pp_i^{n_i}$ so $\nu_{\pp_i}(x-x_i) \geq n_i$.

    Since $x \in A$, it's obvious that $\nu_\qq(x) \geq 0$ for all $\qq \neq \pp_i$ so we are done.
</div>

<div class = "subthm-box" type = "cor">
    If $A$ is a Dedekind domain with finitely many primes, then $A$ is a PID.
</div>

<div class = "subthm-box" type = "proof">
    Since any ideal can be uniquely factored as a product of the power of these primes so it suffices to show each prime $\pp$ is principal. 

    Choose some $a \in \pp - \pp^2$. Then apply the lemma to every other prime $\pp_i$ with $n_i = 1$ and $x_i = 1$ as well as to $\pp$ with $a$ and $n = 2$. Thus, there exists some $x \in K$ with $x - 1 \in \pp_i$ and $x - a \in \pp^2$. It is clear that $x \in A$ and not in any $\pp_i$. Moreover, $x \notin \pp^2$ else $a \in \pp^2$ but $x \in a + \pp^2 \subset \pp$. Therefore, $xA = \pp$ and $\pp$ is principal.
</div>

Now, we shift our attention to field theory.

<div class = "subthm-box" type = "setup">
    Suppose $A$ is a Noetherian integrally closed domain. If we take a finite separable field extension $L$ of the fraction field $K$ of $A$, we get that $B$ – the integral closure of $A$ in $L$ actually has fraction field $L$.

    Separable is useful here because it implies that $B$ not only has subring $A$, but is a finitely-generated $A$-module.
</div>

Here are some situations exemplifying this:

<div class = "subthm-box" type = "ex">
    Take $A = \Z$ and $L = \Q(i)$ forcing $B = \Z[i]$.
    
    Or maybe $A = \Z$ and $L = \Q(\sqrt{-3})$ forcing $B = \Z[\frac{1+\sqrt{-3}}{2}]$.

    These examples motivate the later proposition that if $A$ is a DD, so is $B$.
</div>

We denote $\ol{K} \supset L \supset K$ for an <u>algebraic closure</u> of $K$.

<div class = "subthm-box" type = "refresher">
    For any $y \in L$, we get a $K$-linear map $[y]: L \to L$ sending $x \mapsto x\cdot y$.

    This allows us to define trace and norm.

    The <u>trace</u> $\Tr_{L/K}(y) \coloneq \Tr[y] \in K$ and <u>norm</u> $N_{L/K}(y) \coloneq \det[y] \in K$.

    Trace is obviously $K$-linear, and so is determinant apparently... but I'm not sure how....

    If $L/K$ is separable, then $$\Tr(y) = \sum_{\sigma: L \overset{K-\text{lin.}}\to \ol{K}} \sigma(y), \quad N(y) = \prod_{\sigma: L \overset{K-\text{lin.}}\to \ol{K}} \sigma(y) \quad \text{where $\sigma(y)$ is a conjugate of $y$}.$$

    Now, fix some $y \in B$. Notice that i) if $y$ is integral over $A$, $\sigma(y)$ is also integral over $A$, and thus the trace is also, and ii) $\Tr(y) \in K$. It follows that $\Tr(y)$ is actually in $A$ because $A$ is integrally closed.
</div>

<div class = "subthm-box" type = "lemma">
    $L = B \cdot K$ (so $L = \text{Frac}B$).
</div>

<div class = "subthm-box" type = "proof">
    That $B \cdot K \subseteq L$ is trivial.

    Conversely, if $y \in L$, then $y^n + a_{n-1}y^{n-1} + \cdots + a_0 = 0$ for some $a_i \in K$. This implies $(ay)^n + aa_{n-1}y^{n-1} + \cdots + a_0a^n = 0$ if $a$ is a product of the denominators of all $a_i$.
    
    Thus $ay$ is integral over $A$ and therefore in $B$. In other words, $y \in \frac{1}{a}B \subset B\cdot K$.
</div>

We finished by sprinting through these facts:

<div class = "subthm-box" type = "rmk">
    There is a $K$-bilinear trace pairing $\Tr: L \times L \to K$ mapping $(x,y) \mapsto \Tr_{L/K}(xy)$.

    If $L/K$ is a separable, finite extension, then $\Tr$ is a <u>perfect pairing</u> in that it induces an isomorphism $L \cong L^\vee = \Hom_K(L, K)$ under the map $x \mapsto (y \mapsto \Tr_{L/K}(xy))$.
</div >

<div class = "subthm-box" type = "def" name = "dual lattice">
    If $M \subseteq L$ is a finitely-generated $A$-submodule, then its <u>dual lattice</u> is $M^* = \{y \in L: \Tr(xy) \in A \text{ for all $x \in M$}\}$.
</div>