---
layout: layouts/proof.njk
title: double-dual weirdness
publish_date: "2025-08-18"
---

my final for functional analysis in spring 2025 was pretty boilerplate: 3 hours for 7 questions. 

3 of the questions asked us to regurgitate parts of big proofs from class and 3 were easy exercises.

one piqued my interest, though.

<div class = "subthm-box" type = "question">
    take the usual banach space $V = C_\R[0,1]$. we know that $V$ is not reflexive because its unit ball has few extreme points. give a specific element of $V^{**}$ not in the natural inclusion of $V$. write no more than 2 not-long sentences justifying your answer.
</div>

here's a little blurb explaining what this question means:

<div class = "subthm-box" type = "background">

    every undergraduate student of abstract linear algebra has it drilled into them that (for a finite-dimensional vector space $V$) the isomorphism $V \cong V^*$ is <b>NOT</b> canonical.

    in other words, using Riesz representations or pairing up basis vectors with the dual basis depends, respectively, on the chosen inner product or the chosen basis.

    however, the inclusion $V \to V^{**}: v \mapsto \text{ev}_v$ is canon (requires no choices).

    it is very significant that this map always exists.

    for starters, if this map is surjective (which always holds in the finite-dimensional case), $V$ is called <u>reflexive</u>.

    somehow, professor marc rieffel, in the problem's introduction, was able to tell that this map wasn't reflexive without finding a vector not in the image (our job).

    he did this by pairing up two theorems:

    <div class = "thm-box" name = "banach-alaoglu">
        if $V$ is a normed vector space, then the closed unit ball of $V^\*$ is compact under the weak-$*$ topology.
    </div>

    <div class = "thm-box" name = "krein-milman">
        if $V$ is a hausdorff locallly convex topological vector space with a compact convex subset $C$, then $C$ is the closure of the convex hull of its extreme points.
    </div>

    i am going to blackbox weak-$\*$ topology to stay on track, but the point is that if $V$ was reflexive, the closed unit balls of $V$ and $V^{\*\*}$ would be the same. and applying banach-alaoglu to $V^\*$, we get that the closed unit ball of $V^{\*\*}$ will be a compact convex subset of $V^{\*\*}$ so by krein-milman it will be the closure of the convex hull of its points. but if the balls were the same, then the unit ball of $C_\R[0,1]$ should also be the closure of the convex hull of its extremes.
    
    however, it has only two extreme points ($\pm 1$) (with respect to the suprememum norm) so the closed unit ball of $C_\R[0,1]$ is literally $[-1,1]$ but that is obviously false.

    hence, $C_\R[0,1]$ is not reflexive so it is up to us to find an explicit vector in the double-dual which did not come from $V$.
</div>

here is the example i came up with:

<div class = "subthm-box" type = "proof">
    after a few minutes of staring blankly at the wall that i finally came to the realization that i had absolutely no clue what was in $V^{**}$ <i>besides</i> evaluations.

    but the only evaluations i could use were discontinuous ones.

    great!... but i can't just pick any discontinuous function, the evaluation needs to actually exist and be continuous/bounded. but how do i find those?!

    here was my <del>guess</del> idea.

    define $f_n = \chi_{[0, \frac{1}{2} - \frac{1}{n}]} + (-nx + \frac{n}{2})\chi_{[\frac{1}{2} - \frac{1}{n}, \frac{1}{2}]}$. of course $f_n \to f = \chi_{[0, \frac{1}{2}]}$.

    put $\Phi(\psi) = \lim \psi(f_n)$. since $V^*$ is made up of bounded linear functionals, it's clear this is even worthwhile and that $\Phi$ is continuous since (if we assume existence) $$||\Phi(f_n)|| \leq ||\lim \psi(f_n)|| \leq \lim ||\psi(f_n)|| \leq \lim ||\psi|| \cancelto{1}{||f_n||_\infty} = ||\psi||.$$

    here is how I showed existence:

    for any $\psi \in V^*$, we can split it up as $\psi = \psi^+ - \psi^-$.

    now, via the riesz-markov-kakutani representation theorem:

    <div class = "thm-box" name = "r-m-k representation">
        given a locally compact hausdorff space $X$ and a positive linear functional $\psi$ on the compactly-supported complex-valued continuous functions $C_c(X)$, there exists a unique positive borel measure $\mu$ so that $$\psi(f) = \int_X f(x) d\mu(x), \quad \text{ for all } f \in C_c(X).$$
    </div>

    $[0,1]$ and $\psi^\pm$ certainly fit the bill so we get two unique positive borel measures $\mu^\pm$ such that

    $$\psi(f_n) = \int_X f_n d\mu^+ - \int_X f_n d\mu^-.$$

    and since the $f_n$ are strictly increasing, we can apply the monotone convergence theorem:

    <div class = "thm-box" name = "mct">
        given $\mu$-integrable functions $f_n: X \to \R$ for a measure space $(X, \mathcal{S}, \mu)$ such that $f_m(x) \geq f_n(x) \geq 0$ almost everywhere for any $m \geq n$, then $$\int_X f d\mu = \lim \int_X f_n d\\mu.$$
    </div>

    this implies that $$\Phi(\psi) = \lim \psi(f_n)  = \lim \int_X f_n d\mu^+ - \int_X f_n d\mu^- = \int_X f d(\mu^+ - \mu^-).$$

    so it exists! and we are done.
</div>

my friend serkan salik came up with a different proof during the exam.

i present that here also:

<div class = "subthm-box" type = "proof">
    
</div>