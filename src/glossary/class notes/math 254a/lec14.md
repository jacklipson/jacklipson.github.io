---
layout: layouts/classnote.njk
title: math 254a - lec 14
class: math 254a
lec_date: "2025-09-29"
---

Today we did more Frobenius stuff and started on completions.

<div class = "subthm-box" type = "setting">
    For now our setup is:
    \begin{align*}
        &\kappa_\qq& &? \; \qq \; ?& &\lhd& &B& &\subset& &L& \\\\
        &\mid& &\backslash \mid /& && &\mid& && &\mid \text{finite Galois}& \\\\
        &\kappa_\qq& & \quad \pp& &\lhd& &A& &\subset& &K&
    \end{align*}
    where for simplicity everything is assumed to be unramified.

    We use this so that, $\Gal(L/K) \supset D_\qq \overset{\sim}\to \Gal(\kappa_\qq / \kappa_\pp)$ is an isomorphism under $\sigma \mapsto \ol \sigma = \sigma \mod \qq$.
</div>

<div class = "subthm-box" type = "rmk">
    When $A = \Z$, $\Frob_\qq = (q, L/\Q) \longleftrightarrow (x \mapsto x^{|\Z/(p)|} = x^p \mod \qq)$ for whatever extension $L$ is the classic Frobenius automorphism.
</div>

Now, here's situation where we can apply our big commutative diagram from last time:

<div class = "subthm-box" type = "prop">
    Pick $\qq \; \mid \; \pp' \; \mid \; \pp$ in $L \; -  \; K' \; -  \; K$ where, again, everything is unramified.

    Since everything is unramified, all the inertial groups die such that:
    \begin{align*}
        &1& \longrightarrow \quad &D_\qq(L'/K')& \overset{(1)}\longrightarrow \quad &D_\qq(L'/K)& \overset{(2)}\longrightarrow \quad &D_{\pp'}(K'/K)& \longrightarrow \quad 1 \\\\
        && & \quad \wr\downarrow& & \quad \wr\downarrow& & \quad \wr\downarrow& && \\\\
        &1& \longrightarrow \quad &\Gal(\kappa_\qq / \kappa_{\pp'})& \longrightarrow \quad &\Gal(\kappa_\qq / \kappa_{\pp})& \longrightarrow \quad &\Gal(\kappa_{\pp'} / \kappa_{\pp})& \longrightarrow \quad 1
    \end{align*}
    
    1. $(\qq, L/K') = (\qq, L/K)^{f_{\pp'/\pp}}$ via map (1).

    2. $(\qq, L/K) \mapsto (\pp', K'/K)$ via map (2).
</div>

<div class = "subthm-box" type = "proof">
    1. For $x \in B$, $x \mapsto x^{|\kappa_{\pp'}|} \mod \qq = x^{|\kappa_{\pp}|f_{\qq / \pp'}} \mod \qq$.

    2. Just follow the map through the Galois row.
</div>

And about Frobenius more generally:

<div class = "subthm-box" type = "rmk">
    $\Frob_\pp$ is roughly the "primes of the Galois group $\Gal(L/K)$.
</div>

<div class = "subthm-box" type = "ex">
    Consider $\Gal(\Q(\zeta_n)/\Q) \overset{\sim}\to (\Z/n\Z)^\times$ for $\zeta_n$ a primitive $n$-th root of unity.

    We will show on the HW that $p$ is unramified in this extension if and only if $p \nmid n$.
    
    It follows that $\Frob_\pp \longleftrightarrow p \mod n$ under this map.

    This ties into Chebotarev's density theorem:

    <div class = "thm-box" name = "Chebotarev density">
        Fix a conjugate class $C \subset G$. Then, colloquially speaking, $\frac{|C|}{|G|} = \frac{|\{\pp: \text{$\pp$ is unramified and $\Frob_\pp = C$}\}|}{|\{\text{all prime ideals}\}|}$ where this righthand side is taken as a limit in some suitable sense.
    </div>

    In fact, the famous Dirichlet's theorem is (clearly) a consequence of Chebotarev's via our example:

    <div class = "thm-box" name = "Dirichlet">
        For $n \geq 3$ and $(a,n) \equiv 1$ with $a \in \Z$, there are infinitely many primes $\equiv a \mod n$ where the proportion of primes is proportional to $\frac{1}{\phi(n)}$ where $\phi$ is Euler's totient function.
    </div>
</div>

Now we move onto our new chapter: completions.

<div class = "subthm-box" type = "def" name = "(multiplicative) valuation">
    A <u>multiplicative valuation</u> $|\cdot|: K \to \R_{\geq 0}$ on a field $K$ is a function satisfying $$\text{(i)} \; x = 0 \iff |x| = 0, \quad \text{(ii)} \; |xy| = |x| \cdot |y|, \quad \text{(iii)} \; |x+y| \leq |x| + |y|.$$
</div>

<div class = "subthm-box" type = "consider">
    Our new valuation $\vert \cdot \vert: K^\times \to (\R_{\geq 0}, \cdot)$ and old valuation $\nu: K^\times \to (\Z, +)$ are both group homorphisms, but obviously differ in their codomain.
</div>

<div class = "subthm-box" type = "def" name = "valued fields">
    $(K, |\cdot|)$ is a <u>valued field</u>.
</div>

This valuation also makes $K$ a topological field via the metric topology:

<div class = "subthm-box" type = "def" name = "topological field">
    $(K, +, \cdot)$ is a <u>topological field</u> if all the operations $$K \times K \overset+{\to} K, \quad K \times K \overset\times{\to} K, \quad K \overset-\to K, \quad K \overset{\cdot\inv}\to K$$ are continuous.
</div>

Some examples:

<div class = "subthm-box" type = "ex">
    1. We exclude this valuation: $|\cdot|_{\text{triv}} = \begin{cases} 0 \mapsto 0 \\ x\neq 0 \mapsto 1 \end{cases}$

    2. The normal Archimdean absolute value $|\cdot|_\infty$.

    3. $\vert\cdot\vert_\infty^s$ for $0 \leq s < 1$. ($s$ is limited because $\vert 2 \vert^s = \vert 2 \vert_\infty^s = \vert 1+1 \vert_\infty^s \leq \vert 1\vert_\infty \vert^s + \vert 1 \vert_\infty^s = 2$).

    4. $\vert \cdot \vert_p$ on $\Q$ via $p^e \frac{r}{s} \mapsto p^{-e}$ with $r,s$ coprime to $p$.
</div>

The fact that 2 and 3 are the same motivate a new definition:

<div class = "subthm-box" type = "def" name = "equivalent">
    Two valuations $\vert \cdot \vert_1 \sim \vert \cdot \vert_2$ are <u>equivalent</u> if they induce the same metric topology on $K$.
</div>

<div class = "subthm-box" type = "prop">
    The following are equivalent:

    1. $\vert \cdot \vert_1 \sim \vert \cdot \vert_2$.

    2. $\vert \cdot \vert_1 = \vert \cdot \vert_2^s$ for some $s \in \R - 0$.

    3. For all $x \in K$, $\vert x \vert_1 < 1$ if and only if $\vert x \vert_2 < 1$ (from which $\vert x \vert_1 > 1$ if and only if $\vert x \vert_2 > 1$ follows just by multiplying $\vert x\inv \vert_{1,2}$)
</div>

<div class = "subthm-box" type = "proof">
    $2 \implies 1, 3):$ Obvious.

    $1 \implies 3):$ $\vert x \vert < 1$ if and only if $(x, x^2, x^3, \ldots) \to 0$ with respect to $\vert \cdot \vert$. But since convergence is a totally topological property (and topological groups are determined by the topology around $0$), equivalent topologies will both satisfy this inequality.

    $3 \implies 2):$ Pick a 'basepoint' $x_0 \in K$. $\vert x_0 \vert_1 > 1$ implies $\vert x_0 \vert_2 > 1$ so we can write $\vert x_0 \vert_2 = \vert x_0 \vert_1^s$ for some $s \in \R - 0$.

    Consider a fixed arbitrary $x \in K^\times$, $\vert x \vert_1 = \vert x_0 \vert_1^\alpha$ for a unique $\alpha \in \R$.

    We can find $r_1, r_2 \in \Q$ so $\vert x_0 \vert_1^{r_1} < \vert x_0 \vert_1^{\alpha} = \vert x \vert_1 < \vert x_0 \vert_1^{r_2}$. And by the assumption of 3 with some algebra, $\vert x_0 \vert_2^{r_1} < \vert x \vert_2 < \vert x_0 \vert_2^{r_2}$ also holds.

    But this becomes $\vert x_0 \vert_1^{s r_1} < \vert x \vert_2 < \vert x_0 \vert_1^{s r_2}$. So shrinking $r_1, r_2$ arbitrarily close to $\alpha$ forces $\vert x \vert_2 = \vert x_0 \vert_1^{s \alpha}$.

    Therefore, $\vert x \vert_2 = \vert x_0 \vert_1^{s\alpha} = \vert x \vert_1^s$.
</div>