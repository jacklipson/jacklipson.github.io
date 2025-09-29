---
layout: layouts/classnote.njk
title: math 254a - lec 13
class: math 254a
lec_date: "2025-09-26"
---

Today we broke down finite Galois extensions more.

<div class = "subthm-box" type = "setting">
    Fix a Dedekind domain $A$ with field of fractions $K$ and a finite Galois extension $L$ over it. Take the integral closure $B$ of $A$ in $L$. Consider a prime $\qq$ sitting over $\pp$. 

    In reality, it's unnecessary that our extension is separable, but it makes it easier.
</div>

Because Galois theory gives a correspondence from field extensions to subgroups of $G$, we can draw:

\begin{align*}
    &\overbrace{L \overbrace{---}^{\text{Galois group } I} L^I \overbrace{---}^{\text{Galois group } \Gal(\kappa_\qq/\kappa_\pp)} L^D \overbrace{---}^{\text{Galois group } D} K}^{\text{Galois group } G} \\\\
    &\qq \\; \longrightarrow \\; \qq^I = \qq \cap B^I \\; \longrightarrow \\; \qq^D = \qq \cap B^D  \\; \longrightarrow \\; \\; \\; \pp \\\\
    &\kappa_\qq \\;\\; --- \\;\\; \kappa_{\qq^I} \quad\quad --- \quad\quad \kappa_{\qq^D} \\;\\; --- \\;\\; \kappa_\pp
\end{align*}

<div class = "subthm-box" type = "rmk">
    Observe the following:

    1. $D_\qq (L/L^D) \subset \Gal(L/L^D) \subset D_\qq(L/K)$ by definition.
    
    But any automorphism fixing $\qq$ and $K$ will of course fix all of the elements fixed by the elements which fix $\qq$ and $K$, i.e. $D_\qq(L/K) \subset D_\qq(L/L^D)$ so these groups are equal.

    In particular, since $\Gal(L/L^D) = D_\qq(L/K)$, there is no automorphism fixing $L^D$ (specifically $\qq^D$) which moves $\qq$ around. Thus, $\qq$ is the only prime above $\qq^D$. (Alternatively, by cardinality $efg = ef \implies g = 1$).
        
    So from the remark in the previous lecture, $$e_{\qq / \qq^D}f_{\qq / \qq^D} = e_{\qq / \pp}f_{\qq / \pp} \iff 1 = \frac{e_{\qq / \qq^D}}{e_{\qq / \pp}} \frac{f_{\qq / \qq^D}}{f_{\qq / \pp}} = e_{\qq^D / \pp} f_{\qq^D / \pp} \implies e_{\qq^D / \pp} = f_{\qq^D / \pp} = 1.$$

    In other words, $\kappa_{q^D} = \kappa_\pp$ and $\pp$ splits completely in $L^D$.

    2. By similarly logic $I_\qq(L/L^I) = I_\qq(L/K) = \Gal(L/L^I)$ so via cardinality $e_{\qq/\qq^I} = e_{\qq / \pp} = e_{\qq / \qq^I} f_{\qq / \qq^I}$ (where this last equality follows because $g_{\qq / \qq^I} = 1$ since the only prime above $\qq^I$ is $\qq$) so $f_{\qq / \qq^I} = 1$.

    Moreover, by the remark at the end of the last lecture $e_{\qq / \qq^I} = e_{\qq / \pp}$ implying $e_{\qq^I / \qq^D} = e_{\qq^D / \pp} = 1$.

    So really $f = f_\pp = f_{\qq^I / \qq^D}$ is the only nontrivial inertial degree and $e = e_\pp = e_{\qq / \qq^D}$ is the only nontrivial ramification index.
</div>

<div class = "subthm-box" type = "upshot">
    $L/L^I$ is totally ramified at $\qq^I$.
    
    $L^I/L^D$ is inert at $\qq^D$.
    
    $L^D/L$ need not split completely (but does if $L^D/K$ is Galois).
</div>

Now we change topics to a more generic tower of field extensions.

<div class = "subthm-box" type = "setting">
    Consider the tower $L - K' - K$ with $B - A' - A$ and $\qq | \pp' | \pp$. Suppose $L/K$ is a finite Galois extension (implying $L/K'$ is also Galois) and that $K'/K$ is Galois.

    It's quite clear we have the short exact sequence $$1 \to \Gal(L/K') \inj \Gal(L/K) \sur \Gal(K'/K) \to 1.$$

    One can check, though, that this restricts to $$1 \to D_\qq(L/K') \inj D_\qq(L/K) \sur D_\qq(K'/K) \to 1.$$
</div>

<div class = "subthm-box" type = "prop">
    There is a natural commutative diagram with exact rows and columns:
    \begin{align*}
        &\quad 1&  &\quad 1&  &\quad 1& \\\\
        &\quad \downarrow& &\quad \downarrow& & \quad \downarrow& \\\\
        1 \longrightarrow \quad &I_\qq(L'/K')& \longrightarrow \quad &I_\qq(L'/K)& \longrightarrow \quad &I_\qq(K'/K)& \longrightarrow \quad 1 \\\\
        &\quad \downarrow& &\quad \downarrow& & \quad \downarrow& \\\\
        1 \longrightarrow \quad &D_\qq(L'/K')& \longrightarrow \quad &D_\qq(L'/K)& \longrightarrow \quad &D_{\pp'}(K'/K)& \longrightarrow \quad 1 \\\\
        &\quad \downarrow& &\quad \downarrow& & \quad \downarrow& \\\\
        1 \longrightarrow \quad &\Gal(\kappa_\qq / \kappa_{\pp'})& \longrightarrow \quad &\Gal(\kappa_\qq / \kappa_{\pp})& \longrightarrow \quad &\Gal(\kappa_{\pp'} / \kappa_{\pp})& \longrightarrow \quad 1 \\\\
        &\quad \downarrow& &\quad \downarrow& & \quad \downarrow& \\\\
        &\quad 1&  &\quad 1&  &\quad 1&
    \end{align*}
</div>

<div class = "subthm-box" type = "proof">
    Commutativity is obvious.

    We have already seen that all 3 columns are exact.

    The third row is exact by Galois theory.

    To show the second row is exact, injectivity is obvious since any $L'$-automorphism fixing $\qq$ and $K'$ will fix $\qq$ and $K$. For surjectivity, pick $\sigma \in D_\qq(K'/K)$ and an arbitrary $\tilde \sigma \in \Gal(L/K)$ which restricts to $\sigma$.

    Because $\sigma(\pp') = \pp'$, $\qq | \pp'$ implies that $\sigma(\qq) | \pp'$ so there is some $\tau \in \Gal(L/K')$ so $\tau \tilde \sigma(\qq) = \qq$. Hence, $\tau \tilde \sigma \in D_\qq(L/K)$ and maps to $\sigma$.

    The first row is automatically exact by snake's lemma.
</div>

Finally, we get to say the cool guy's name:

<div class = "subthm-box" type = "setting">
    Say $L$ is a finite Galois extension of $K$ with prime $\qq$ over $\pp$ giving rise to residue fields $\kappa_\qq$ over $\kappa_\pp$.

    Assume $\kappa_\qq, \kappa_\pp$ are finite fields such that $\pp$ is unramified ($I_\qq = 1$).

    Hence $D_\qq \overset{\sim}\to \Gal(\kappa_\qq/\kappa_\pp)$ under the map $\sigma \mapsto \ol \sigma = \sigma \mod \qq$ contains the generator $(x \mapsto x^{|\kappa_\pp|})$.
</div>

<div class = "subthm-box" type = "def" name = "Frobenius element / conjugacy class">
    The image of $(x \mapsto x^{|\kappa_\pp|})$ in $D_\qq$, denoted $(\qq, L/K)$ or $\Frob_\qq$ is the <u>Frobenius element</u> or <substitution> of $\qq$.

    $\Frob_\pp \coloneq \{\Frob_\qq: \qq | \pp} \subset G$ is the <u>Frobenius conjugacy class</u>.
</div>

<div class = "subthm-box" type = "rmk">
    $(\tau \qq, L/K) = \tau (\qq, L/K) \tau \inv$ for all $\tau \in \Gal(L/K)$ because $D_{\tau \qq} = \tau \inv D_\qq \tau$.

    Hence, if $G$ is abelian, $\Frob_\pp$ is precisely one element.
</div>