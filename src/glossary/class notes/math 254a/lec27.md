---
layout: layouts/classnote.njk
title: math 254a - lec 27
class: math 254a
lec_date: "2025-10-29"
---

Today, we continued our discussion of unramified extensions.

Consider the following setting:

<div class = "subthm-box" type = "setting">
    Take $A' \subseteq K'$ a finite unramified extension over $A = CDVR \subseteq K = \Frac A = CDVF$.
    
    Say $A, A'$ have residue fields $k, k'$.

    Consider an arbitrary finite extension $K'' \supseteq A'' \sur k''$ over $K$, e.g. the CDVF of an algebraic extension of $K$.
</div>

<div class = "subthm-box" type = "prop">
    1. There are bijections $$\Hom_{k-alg}(k',k'') \underset{(ii)}{\overset{\sim}\longleftarrow} \Hom_{A-alg}(A',A'') \underset{(i)}{\overset{\sim}\longrightarrow} \Hom_{K-alg}(K', K'').$$

    2. There is an equivalence of categories: $$(\text{finite unramified extensions of }K) \overset\sim\longrightarrow (\text{finite separable extensions of }k), \quad K' \mapsto k'$$

    3. $[K': K] = [k': k]$.
    
    4. $K'/K$ is Galois if and only if $k'/k$ is Galois and actually $\Gal (K'/K) \cong \Gal (k' / k)$.
</div>

<div class = "subthm-box" type = "ex">
    Consider $A = \Z_p, K = \Q_p, k = \F_p$.

    finite unramified extensions of $\Q_p$ are in correspondence with finite separable extensions of $\F_p$ via $K' \mapsto k'$ and $\Frac W(k') \mapsfrom k'$.
</div>

<div class = "subthm-box" type = "proof">
    1. (i). Injectivity is clear as $A' \subseteq K'$. Surjectivity follows is for any $f: K' \inj K''$ (recalling that ring homs between fields are injective), $f(A') \subseteq A''$. But this holds since $f$ preserves volume (K'/K is finite).

    (ii). From [S] I.6, we can write $k' = k(\ol \alpha)$ and $\ol f = \text{irr}(\ol \alpha, k) \in k[x]$.

    Picking $\alpha \in A'$ which projects onto $\ol \alpha$, then $A[x] \ni f = \text{irr}(\alpha, K) \mapsto \ol f$.

    Put $A' = A[\alpha] = A[x] / (f)$ so $$\Hom\_{A-alg}(A',A'') = \\{\beta \in A'': f(\beta) = 0\\} \overset{\text{Hensel, $\ol f$ sep.}}\longleftrightarrow \\{\ol \beta \in k'': \ol f (\ol \beta) = 0\\} = \Hom_{k-alg}(k[x]/(\ol f), k'') = \Hom_{k-alg}(k(\ol \alpha), k'') = \Hom_{k-alg}(k', k'').$$

    2. Part 1. implies that this fully faithful, so we need only show this is essentially surjective.

    That is, given $k'/k$ finite separable, can we find $K'/K$ finite unramified with residue field $k'$.

    This is doable by [S] I.6 again, i.e. $k' = k(\ol \alpha)$, take $\ol f = \text{irr}(\ol \alpha, k)$, lift to $f$, and $K' = K[x]/(f)$.

    3. This follows from definition.

    4. $[K': K] \geq |\text{Aut}(K'/K)| = |\text{Aut}(k'/k)| \leq [k':k] = [K': K]$ where equality holds on one side if and only if it holds on other if and only if both extensions are Galois.
</div>

Carrying on:

<div class ="subthm-box" type = "lemma">
    Consider $L - L' - K$ where $L-K$ is finite Galois.

    We've proven already that $L'/K$ is unramified if and only if $I(L/K)$ fixes $L'$ element-wise.

    We show $L'/K$ is Galois.
</div>

<div class = "subthm-box" type = "proof">
    The following diagram obiously commutes:
    \begin{align*}
        &I(L/K)& \hspace{-30px}\longrightarrow \quad &I(L'/K)& \\\\
        &\quad \downarrow& &
        \quad\downarrow& \\\\
        &\Gal(L/K)& \hspace{-30px} \longrightarrow \quad &\Gal(L'/K)&
    \end{align*}
</div>

<div class = "subthm-box" type = "def" name = "unramified extension">
    The possibly infinite algebraic extension $L/K$ for $K$ a CDVF is <u>unramified</u> if:

    1. the residue field extension $\ell /k$ is separable.

    2. The ramification index is 1 if and only if a unit of $K$ is a unit of $L$.

    $L/K$ is <u>totally ramified</u> is $\ell / k$ is purely inseparable.
</div>

Note the previous proposition generalizes to infinite unramfieid extensions, i.e. $$(\text{unramified ext. of }K) \overset{\sim}\longleftrightarrow (\text{separable ext. of }k)$$

<div class = "subthm-box" type = "cor">
    Consider $L', L''$ unramified extensions of a CDVF $K$.
    
    Then $L = L'L''$ is unramified.
</div>

<div class = "subthm-box" type = "proof">
    Take the Galois closure $\ol L$ of $L$. $L',L''$ are fixed by $I(\ol L / K)$ so $L$ is fixed by $I(\ol L / K)$ so $L$ is unramified over $K$.
</div>

The consequence of this corollary being that if $L/K$ is separable, then there exists a unique unramified $L - L^{unram} - K$.

The maximum unramified extension is the composite of all finite unramified extensions.

<div class = "subthm-box" type = "rmk">
    It follows by the proposition that:

    $L - L^{unram} - K$ induces $\ell \overset{\text{purely insep.}}- \ell^{sep} \overset{\text{sep.}}- k$.

    In particular, the residue field of $L^{unram}$ is $\ell^sep$ so $L/L^{unram}$ is totally ramified.
</div>

<div class = "subthm-box" type = "ex">
    Consider $\ol Q_p - \Q_p^{unram} - \Q_p$. Then $\Gal(\Q_p^{unram} / \Q_p) \cong \Gal(\ol \F_p, \F_p)$.
</div>