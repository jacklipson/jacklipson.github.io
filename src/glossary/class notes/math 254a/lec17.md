---
layout: layouts/classnote.njk
title: math 254a - lec 17
class: math 254a
lec_date: "2025-10-06"
---

Today we proved a version of Hensel's lemma and(attempted) to extend valuations on complete valued fields.

<div class = "subthm-box" type = "lemma" name = "Hensel">
    Fix $\mm = \{\norm\cdot < 1\} \overset{\text{max}}\lhd A = \{\norm\cdot \leq 1\} \subset (K, \norm\cdot)$ a non-Archimedean complete valued field with residue field $k \coloneq A/\mm$.

    Suppose $f \in A[x]$ is primitive (i.e. $\ol f \coloneq f \mod \mm \neq 0)$ and $\ol{f} = \ol{g}\ol{h}$ for $\ol g, \ol h \in k[x]$ coprime.
    
    Then there is a factorization $f = gh$ with lifts $g,h$ of $\ol g, \ol h$ respectively such that $\deg g = \deg \ol g$.

    If $f$ is monic, then we can force $\ol h$ to have the same degree as its lift as well.
</div>

<div class = "subthm-box" type = "warning">
    If $K$ is not complete, this can fail as we will see!
</div>

Here's an example:

<div class = "subthm-box" type = "ex">
    Fix $K = \Q_p \supset A = \Z_p \supset \mm = (p)$ and $f(x) = px^3 + x^2 + p(p-1)^2x - (p-1)^2$.

    $\ol{f} = x^2 - 1$ has the factorization $(x+1)(x-1)$ so we can call $\ol g = x+1, \ol h = x - 1$.

    These are coprime as long as $p \neq 2$.

    Now, we can factor $f$ as $\overbrace{(x-(p-1))}^{g}\overbrace{(x+(p-1))(px+1)}^{h}$.
</div>

Now the proof:

<div class = "subthm-box" type = "proof">
    For simplicity, we assume $f$ is monic and $K$ is a complete DVF with uniformizer $\pi$.

    We will calculate $g,h$ via successive approximations.
    
    In particular, since $K$ is complete, we hope to find $g = g_0 + g_1\pi + g_2\pi^2 + \cdots$ and $h = h_0 + h_1\pi + h_2\pi^2 + \cdots$ for $h_i, g_i \in A[x]$. Thus, we win if $f = gh \mod \pi^n$ for all $n \in \Z_{\geq 1}$.

    Using the notation $G_i = \sum^i_0 g_i\pi^i$ and similarly for $H_i$, it will suffice to show: $$\text{(i)}_n: \\; f = G_nH_n \mod \pi^{n+1}, \quad \text{(ii)}_n: \\; \deg G_n = \deg \ol g, \quad \deg H_n = \deg \ol h.$$

    For the base case, pick arbitrary monic lifts $g_0, h_0$ of $\ol g$ and $\ol h$ respectively. This obviously satisfies $f = g_0h_0 = G_0H_0 \mod \pi$. And because the lifts are monic, they cannot change degree in the quotient, satisfying $\text{(ii)}_0$.

    For the inductive step, suppose ${\text{(i)}}\_{n-1}$ and ${\text{(ii)}}_{n-1}$ hold. Thus, $f = G\_{n-1}H\_{n-1} + F\_{n-1}\pi^n$ for some $F\_{n-1}(x) \in A[x]$. Hence: $$f - G\_nH\_n = f - (G\_{n-1} + g\_n\pi^n)(H\_{n-1} + h\_n\pi^n) = \pi^n(F\_{n-1} - g\_nH\_{n-1} - h\_nG\_{n-1}) \equiv 0 \mod \pi^{n+1} \iff F\_{n-1} \equiv g\_nH\_{n-1} + h\_nG\_{n-1} \mod \pi.$$

    But this is precisely $\ol{F\_{n-1}} \equiv \ol{g\_n} \ol h + \ol{h\_n} \ol g$. Since $\ol g, \ol h$ are coprime in $k[x]$, we can find $\ol g_n, \ol h_n \in k[x]$ which make this work such that $\deg \ol g\_n \leq \deg \ol g$ and $\deg \ol h\_n \leq \deg \ol h$.

    If we pick arbitrary lifts $g_n, h_n$ of $\ol g_n, \ol h_n$ of the same degree, we are done.
</div>

Now we carry on talking about extending valuations:

<div class = "thm-box">
    Fix $L \; \overbrace{---}^\text{alg} \; K$ for $(K,\norm\cdot_K)$ a CVF. Then:

    1. There is a unique extension of $\norm\cdot_K$ to a valuation $\norm\cdot_L$ over $L$. If $L/K$ is finite, then $(L/ \norm\cdot_L)$ is complete.

    2. If $L/K$ is finite of degree $n$, then $\norm{x}\_L = \norm{N_{L/K}(x)}^{1/n}$.
</div>

<div class = "subthm-box" type = "warning">
    If $L/K$ is infinite, then $L$ is <u>not</u> complete (homework).
</div>

As an example:

<div class = "subthm-box" type = "ex">
    If $K$ is Archimedean, then $K = \R, \C$ so the only nontrivial extension (since this too must be Archimedean) is $\C - \R$.
</div>

<div class = "subthm-box" type = "fact">
    Per Neukirch II 4.9, if $K$ is a CVF and $V/K$ is a finite-dimensional vector space, then there is a unique norm on $V$ up to equivalence.

    Now, it is useful to note that the definition of norm differs only from multiplicative valuation in that $||a \cdot v|| = |a| |v|$ for $a \in \R, v \in V$ becomes $\norm {v \cdot w} = \norm v \cdot \norm w$ for $v, w \in K$.

    <div class = "subthm-box" type = "ex">
        If $V = \langle v_1, \ldots, v_n \rangle$ for a fixed basis $(v_i)_1^n$ over a CVF $K$, then $||\sum a_i v_i|| = \max \norm{a_i}$ is a norm and determines the same topology as any other norm.
    </div>
</div>

Now, Professor Shin's original attempt at a proof tried to use the fact that norms on $L/K$ were unique up to equivalence to say that any 2 valuations on $L$ were equivalent so one was some non-zero power $s$ of another. And that this power would have to be $1$ since both extend $K$, proving actual uniqueness. However, norms on $L$ are not valuations of course.

The actual proof was sketched out very quickly as follows:

<div class = "subthm-box" type = "proof" name = "thm">
    Put $\norm x _L = \norm {N_{L/K}(x)}^{1/n}$. We can apparently check that this is positive-definite and satisfies multiplicativity. And by Hensel's Lemma, it must also satisfy the triangle inequality.
</div>