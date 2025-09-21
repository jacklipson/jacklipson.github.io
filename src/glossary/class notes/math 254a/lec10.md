---
layout: layouts/classnote.njk
title: math 254a - lec 10
class: math 254a
lec_date: "2025-09-19"
---

Today we showed how lifting primes actually corresponds to extending valuations of the same index as the above primes.

<div class = "subthm-box" type = "rmk">
    For reasons made clear below, we write the index $e$ for an extension $w$ of $\nu$ (also written $w | \nu$ or "$w$ divides "$\nu$") as $e_{w/\nu}$.
</div>

We will heavily rely on the bijection between valuations nonnegative on $A$ and primes of $A$ from last time.

<div class = "subthm-box" type = "lemma">
    Given $\pp \longleftrightarrow \nu$ and any valuation extension $w$ of $\nu$, $w \geq 0$ on $B$.
</div>

<div class = "subthm-box" type = "cor">
    $\qq_w = \{y \in L: w(y) \geq 1\}$ is a prime in $B$.
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    $B_w \coloneq \{y \in L: w(y) \geq 0\}$ is a DVR by definition. Notably, $B_w$ is integrally closed. We want to show $B_w \supseteq B$.

    $B_w \supseteq A$ since $w | \nu$. Taking integral closures, $B_w \supseteq B$.
</div>

This shows extensions correspond to upstairs primes $\qq_w$, but it's not clear $\qq_w$ sits over $\pp_\nu$. We can actually say something stronger!  

<div class = "subthm-box" type = "prop">
    Given $\pp \longleftrightarrow \nu$ and $\qq \longleftrightarrow w$, $\qq |\pp$ if and only if $w | \nu$. And in fact, $e_{\qq / \pp} = e_{w / v}$.
</div>

<div class = "subthm-box" type = "proof">
    Say $w | v$. If $x \in \pp$, then $\nu(x) > 0$ so $w(x) > 0$ (because $x \in A$) so $w \in \qq$.

    Conversely, suppose $\qq | \pp$. We can assume $A$ is a DVR by localizing at $\pp$.
    
    Recall that up to choice of uniformizer $\pi$ of $A$, there is a noncanonical isomorphism $K^\times \cong A \times \pi^\Z$.
    
    Because valuations are group homomorphisms on $K^\times$, we need only check $w\vert_K = e_{\qq / \pp} \nu$ on $A^\times$ and $\pi$. 
    
    Obviously this holds on $A^\times$ since both valuations $w, \nu$ vanish on units.

    The case for $\pi$ holds because $(\pi) = \pp$ so $w(\pi) = \nu_\qq(\pi B) = \nu_\qq (\pp) = e_{\qq / \pp}$ and $v(\pi) = 1$ by definition of uniformizer.

    $w\vert_K = e_{\qq / \pp} \nu$ so $e_{\qq / \pp} = e_{w/\nu}$.
</div>

<div class = "subthm-box" type = "warning">
    It came up in class that (under the same notation $\qq \lhd B \subset L$ over $\pp \lhd A \subset K$), $B_\qq$ is not necessarily the integral closure of $A_\pp$.
</div>

Now with this extra tool (valuations) at our disposal, we shift gears.

<div class = "subthm-box" type = "def" name = "norm">
    Observe primes in $A,B$ form free generating sets, respectively, for fractional ideal groups $I_A, I_B$. That is, all fractional ideals are some ideal over a denominator and we can uniquely factor ideals into primes.

    Thus, $i(\pp) = \pp B$ and $N(\qq) = (\qq \cap A)^{f_{\qq / \qq \cap A}}$ will determine group homomorphisms $i: I_A \to I_B$ and the <u>norm</u> $N: I_B \to I_A$.
</div>

The exponent we put on $N(\qq \cap A)$ is strange because we could seemingly define the norm just as well without this. Here's some motivation:

<div class = "subthm-box" type = "lemma">
    $N \circ i(\aa) = \aa^{[L:K]}$ for all $\aa \in I_A$.
</div>

<div class = "subthm-box" type = "proof">
    $$N(i(\pp)) = N(\pp B) = N(\prod_{\qq | \pp} \qq^{e_{\qq / \pp}}) \overset{\text{grp. hom.}} = \prod_{\qq | \pp} N(\qq)^{e_{\qq / \pp}} = \prod_{\qq_\pp} [(\qq \cap A)^{f_{\qq / \pp}}]^{e_{\qq / \pp}} = \pp^{\sum_{\qq | \pp} e_{\qq / \pp}f_{\qq / \pp}} = \pp^{[L:K]}.$$
</div>

<div class = "subthm-box" type = "rmk">
    Later, we will see that $N(y \cdot B) = N_{L/K}(y) \cdot A$ for all $y \in L^\times$. So this new definition of norm basically agrees with the classical linear algebra definition.
</div>

<div class = "subthm-box" type = "ex">
    If $A = \Z$ and $\bb \lhd B$, then $N(\bb) = (n) \lhd \Z$ for some unique $n \in \Z_{\geq 1}$. It's possible to show $n = |B / \bb| = \overbrace{[B:\bb]}^{\text{abelian grp}}$... but I didn't attempt this.
</div>

We again change topics, this time to single extensions.

<div class = "subthm-box" type = "setup">
    Fix $\mm \lhd A$ where $A$ is a DVR. Pick some irreducible monic $f \in A[x]$. $B_f \coloneq A[x]/(f)$ will be a finitely-generated free $A$-module (e.g. by $x^0, \ldots, x^{\deg f - 1}$).
    
    $x$ is tautologically a root of $f$ so $B_f$ is integral over $A$.

    Calling $k = A/\mm$, we get $A[x] \overset{\mod \mm}{\longrightarrow} k[x]$ under which $f \mapsto \ol{f} = \prod_{i \in \mathcal{I}} \phi_i^{e_i}$ for irreducible monics in $k[x]$.

    Thus, $A[x] \sur A[x]/(f) \sur k[x]/(\ol{f}) \cong \prod_{i \in \mathcal{I}} k[x]/(\phi_i^{e_i})$.

    Each $k[x]/(\phi_i^{e_i})$ is obviously a local Artin ring so the product is Artin (its maximal ideals all look like $(\phi_i)/(\phi_i^{e_i}) \times \prod_{j \neq i} k[x]/(\phi_j^{e_j})$).

    Now, lift $\phi_i$ to monic polynomials $g_i \in A[x]$.

    Notice that $$\\{\text{max ideals of $B_f$ containing $\mm$}\\} = \\{\text{pre-images of $(\phi_i) + (\ol{f})$}\\} = \\{(\mm, g_i) \lhd B\\}.$$

    But, by corollary 5.8 in A-M, $\\{\text{max ideals of $B_f$ containing $\mm$}\\} = \\{\text{all max ideals of $B_f$}\\}$.

    This felt random. I think we'll see why it's important next time....
</div>