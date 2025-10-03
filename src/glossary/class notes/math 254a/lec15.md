---
layout: layouts/classnote.njk
title: math 254a - lec 15
class: math 254a
lec_date: "2025-10-01"
---

I was proctoring so this is also per stolen notes..

Today we did more metric completion stuff.

<div class = "subthm-box" type = "def" name = "(non)-Archimedean">
    $\norm\cdot$ is <u>Arhimedean (non-Archimedean)</u> if $\{\norm n = \vert 1 + \cdots + 1\vert: n \in \Z_{\geq 1}\}$ is unbounded (bounded).
</div>

<div class = "subthm-box" type = "ex">
    1. $\norm{\cdot}_p$ is non-Archimedean.

    2. $\norm{\cdot}_\infty$ is Archimedean on $\Q$.

    3. $\norm{\cdot}$ is non-Archimedean if $\text{char } K > 0$
</div>

<div class = "subthm-box" type = "lemma">
    $\norm \cdot$ is Non-archimedan if and only if $\vert x + y \vert \leq \max {\norm x, \norm y}$ for all $x, y \in K$.
</div>

<div class = "subthm-box" type = "proof">
    $\implies):$ For all $n \geq 1$, $$\norm{x+y}^n = \norm{\sum_0^n  {n\choose 1} x^i y^{n-i}} \leq \sum_0^n \norm{ {n \choose 1} } \norm{x}^i \norm{y}^{n-i} \leq (n+1) \max \norm{n} \cdot \max \{\norm{x}, \norm{y}\}^n \implies \norm{x+y} \leq [(n+1) \max \norm{n}]^{1/n} \cdot \max \{\norm{x}, \norm{y}\}.$$ This $\max \norm{n}$ is constant so as $n \to \infty, we get the desired inequality.

    $\impliedby):$ $\norm{n} \leq \norm{1}$ for all $n \geq 1$.
</div>

And Professor Shin gave a little exercise:

<div class = "subthm-box" type = "rmk">
    Say $\norm{\cdot}$ is non-Archimedean. Then:
    
    1. $\norm{x} < \norm{y}$ implies $\norm{x+y} = \norm{y}$.
    
    2. $\\{x \in K: \norm{x} < 1\\} \overset{\text{max}}\lhd \\{x \in K: \norm{x} \leq 1\\} \overset{\text{subring}}\subseteq K$.

    <div class = "subthm-box" type = "proof">
        1. By the lemma, $\norm{x+y} \leq \max \\{ \norm{x}, \norm{y} \\} = \norm{y}$.

        Conversely, also by the lemma, $\norm{y} = \norm{-x + (x+y)} \leq \max \\{\norm{-x}, \norm{x+y} \\}$.

        From $\norm {x} = \norm{1 \cdot x} = \norm{1} \norm {x}$, $\norm{1} = 1$. But then $1 = \norm {1} = \norm{-1} \norm{-1}$ so $\norm{-1} = 1$ (since valuations are nonnegative). Hence $\norm{-x} = \norm{x}$.

        But $\norm{y} > \norm {x}$ so the inequality becomes $\norm{y} \leq \norm{x+y}$ and we're done.

        2. $\norm{1} = 1 \leq 1$, and for any $x, y \in \{z \in K: \norm{z} \leq 1\}$, we know $\norm{xy} = \norm{x} \norm{y} \leq 1$ and $\norm{x+y} \leq \max \\{\norm{x}, \norm{y}\\} \leq 1$ so $\\{x \in K: \norm{x} \leq 1\\}$ is indeed a subring of $K$ (so a domain).

        By similar checks, $\\{x \in K: \norm{x} < 1\\}$ is a subgroup closed under multiplication. 
        
        This ideal $\mm$ is maximal because it is only missing elements of valuation 1 and these elements are units. Namely, if $\norm{y} = 1$, then $1 = \norm{1} = \norm{y}\norm{y\inv} = \norm{y\inv}$ so $y\inv$ is in our subring too so $y$ is a unit.
    </div>
</div>

<div class = "subthm-box" type = "ex">
    For a discrete valuation field (DVF) $(K, \nu)$, $(K, \norm\cdot)$ is non-Archimdean by fixing some $\sigma \in (0,1)$ with $\norm x = \sigma^{\nu(x)}$.

    This is obvious from the properties of discrete valuations.
</div>

Now an awesome proposition (<a href = "/glossary/cute proofs/misc/ostrowski's theorem"><u>which I wrote up a while back here</u></a>):

<div class = "subthm-box" type = "prop" name = "Ostrowski">
    $$\{\text{valuations on $\Q$}\}/\sim \quad \longleftrightarrow \quad \{\overbrace{\norm\cdot_\infty}^\text{arch.}, \; \overbrace{\norm\cdot_2,\; \norm\cdot_3, \;\norm\cdot_5, \;\ldots}^\text{non-arch.}\}$$ where $\sim$ means up to the equivalence we defined last lecture (i.e. the topology generated).
</div>

<div class = "subthm-box" type = "proof">
    We split it up into 2 cases. Fix a norm $\norm \cdot$ on $\Q$.

    If $\norm\cdot$ is non-Archimedean, we know that $\norm{n} \leq 1$ for all $n \in \Z_{\geq 1}$.

    If $\norm{n} = 1$ for all $n$, then $\norm\cdot = \norm \cdot_{\text{trivial}}$.

    Hence, we can pick the least $m$ so $\norm{m} < 1$. $m$ is prime because if not, then $m = m_1 m_2$ for $1 < m_i < m$, then $\norm{m} = \norm{m_1}\norm{m_2} < 1$ implies one of $\norm{m_i} < 1$ - contradiction. Call $m$ $p$.

    By equivalence, we can raise $\norm \cdot$ to a power such that $\norm p = p\inv$. Now, $\norm 1 = \norm 2 = \cdots = \norm {p-1} = 1$ because the definition of $p$ excludes the $<1$ case and $\norm \cdot$ is bounded by $1$ since it is non-Archimedean.

    From this point, we can write any integer $k$ as a power series in $p$ with coefficients in $0, \ldots, p-1$ from which $\norm{k} = \norm{k}_p$.

    The proof I linked to above used the following fact instead: for any $q$ coprime to $p$, $q^n$ is coprime to $p^n$ so there are $x_n, y_n$ such that $x_nq^n + y_np^n = 1$. Hence, $$1 = \norm {x_n q^n + y_np^n} \leq \norm{x_n}\norm{q}^n + \norm{y_n}\norm{p}^n \leq \norm{q}^n + \norm{p}^n \overset{n \to \infty, \\; \norm {p} < 1} \implies \norm{q} = 1.$$
    Since $\norm\cdot$ is determined by what happens to primes, we are done and $\norm \cdot = \norm \cdot _p$.

    2. We used the same proof as from my old post.
</div>

Now, we move onto completions.

<div class = "subthm-box" type = "def" name = "complete">
    A valued field $(K, \norm\cdot)$ is <u>complete</u> if every Cauchy sequence converges with respect to $\norm \cdot$; in this case, we say $(K, \norm \cdot)$ is a <u>complete valued field</u>.
</div>

<div class = "subthm-box" type = "def" name = "completion">
    The <u>completion</u> $(\hat{K}, \norm\cdot)$ of a valued field $(K, \norm\cdot)$ is the set of $\{\text{Cauchy sequences in $K$}\} / \sim$ where $(a_n) \sim (b_n)$ if and only if $\lim \norm{a_n - b_n} = 0$.

    $(\hat{K}, \norm\cdot)$ inherits $+, \cdot$ in the obvious way and $\norm{(a_n)}_{\hat{K}} = \lim \norm{a_n}_K$.

    This makes $\hat{K}$ a complete valued field.
</div>

Observe that $K \inj \hat{K}$ via $(a \mapsto (a, a, a, \ldots))$.

My first HW for Math 202A (taught by Prof. Marc Rieffel) had an exercise showing that completions were unique up to isometry.

<div class = "subthm-box" type = "ex">
    $\norm\cdot_\infty$ on $\Q$ gives rise to the completion $\R$.

    $\norm\cdot_p$ on $\Q$ gives rise to the completion $\Q_p$.
</div>

The below fact was stated in class; its proof is in Neukirch Chapter 2 4.2.

<div class = "thm-box" name = "Ostrowski">
    If $(K, \norm \cdot)$ is a complete valued field for an Archimedean valuation, then there is an isomorphism $\sigma: K \sur \R \text{ or } \C$ with $\norm a = \norm{\sigma a}^s$ for all $a \in K$, $s \in (0,1]$.
</div>

This prompts us to restict our attention to non-Archimedean CVFs.

<div class = "subthm-box" type = "rmk">
    If $(K, \norm \cdot)$ is a valued field, $\norm K _K = \norm {\hat{K}} _{\hat K}$.
</div>