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

<div class = "subthm-box" type = "proof" name = "jack">
    after a few minutes of staring blankly at my proctor, i finally realized that i had absolutely no clue what was in $V^{**}$ <i>besides</i> evaluations.

    but obviously any continuous evaluation would not work.

    so what would evaluation at a discontinuous function over $[0,1]$ look like?

    here was my <del>guess</del> idea.

    define $f_n = \chi_{[0, \frac{1}{2} - \frac{1}{n}]} + (-nx + \frac{n}{2})\chi_{[\frac{1}{2} - \frac{1}{n}, \frac{1}{2}]}$. of course $f_n \to f = \chi_{[0, \frac{1}{2}]}$.

    put $\Phi(\psi) = \lim \psi(f_n)$. 
    
    assuming $\Phi$ exists, this example looks promising since $\Phi$ would be continuous: $$||\Phi(\psi)|| = ||\lim \psi(f_n)|| \leq \lim ||\psi(f_n)|| \leq \lim ||\psi|| \cancelto{1}{||f_n||_\infty} = ||\psi||.$$
    
    so the hard part is knowing $\Phi$ makes sense.

    this was my method:

    for any $\psi \in V^*$, we can split it up as $\psi = \psi^+ - \psi^-$ where $\psi^\pm \geq 0$.

    now we need the riesz-markov-kakutani representation theorem:

    <div class = "thm-box" name = "r-m-k representation">
        given a locally compact hausdorff space $X$ and a positive linear functional $\psi$ on the compactly-supported complex-valued continuous functions $C_c(X)$, there exists a unique positive borel measure $\mu$ so that $$\psi(f) = \int_X f(x) d\mu(x), \quad \text{ for all } f \in C_c(X).$$
    </div>

    $[0,1]$ and $\psi^\pm$ certainly fit the bill so we get two positive measures $\mu^\pm$ such that:

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

<div class = "subthm-box" type = "proof" name = "serkan">
    define $\Phi(\text{ev}_{\frac{1}{n}}) = 1, \Phi(\text{ev}_0) = 0$ and extend this linearly over the span.
    
    <i>(note that here, $\text{ev}$ is evaluating on points in $[0,1]$ whereas earlier in the page, i was evaluating on $C_\R[0,1]$)</i>

    clearly, $\Phi$ is bounded on this subspace so we can apply hahn-banach extension (different from the separation theorem):

    <div class = "thm-box" name = "hahn-banach extension">
        consider a normed $\R$-vector space $V$ and a minkowski gauge $p: V \to \R_{\geq 0}$, i.e. a map satisfying $$p(rv) = rp(v) \text{ for } r \in \R_{\geq 0} \quad \text{and} \quad p(v+w) \leq p(v) + p(w).$$
        if a linear functional $\phi:W \to \R$ is subordinate to $p$ on $W$, then there is an extension $\tilde\phi: V \to \R$ subordinate to $p$.
    </div>

    if we apply this to $p(v) = ||v||$, we get some $\tilde{\Phi}$ over $V^*$. notably, $\tilde\Phi(\text{ev}_{\frac{1}{n}}) = 1 \not\to \tilde\Phi(\text{ev}\_{0}) = 0$.
    
    but, if $\tilde\Phi = \text{ev}\_f$ for some $f \in C\_\R[0,1]$, then $f(\frac{1}{n}) \to f(0)$ since any $f$ is continuous.

    this is a contradiction.

    hence, $\tilde\Phi \neq \text{ev}_f$ for any $f \in V$ so $\tilde\Phi \in V^{**} - V$.
</div>