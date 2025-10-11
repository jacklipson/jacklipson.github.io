---
layout: layouts/classnote.njk
title: math 254a - lec 19
class: math 254a
lec_date: "2025-10-10"
---

Today we talked about Newton polygons (which are referenced more generally in Neukirch II.6).

<div class = "subthm-box" type = "motivation">
    Consider a non-Archimedean CVF $(K, \norm \cdot)$ and some monic $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0 \in K[x]$ with $f(x) = \prod_1^n (x - \alpha_i) \in L[x]$ for $L/K$ finite.

    We take a (possibly non-discrete, i.e. taking on more than $\Z$-values) additive valuation $\nu$ corresponding to $\norm \cdot$.

    Recall that there is a unique extension to $L$ which restricts to $K$ of $\norm \cdot$ so we get a unique $\nu$ on $L$ also.

    Today's question is as follows:

    <div class = "subthm-box" type = "question">
        Is there a unique recipe to get $\nu(\alpha_i)$ from $f$?
    </div>

    And the answer:

    <div class = "subthm-box" type = "answer">
        Newton polygons.
    </div>
</div>

We can assume $a_0 \neq 0$ simply by dividing $f$ by powers of $x$. This is not at all harmful because our goal is to find $\nu(\alpha_i)$ and $0$ is not a very interesting root...

<div class = "subthm-box" type = "def" name = "Newton polygon">
    First define the finite set of points $S_f \coloneq \{(0, \nu(a_0)), \ldots, (n, \overbrace{\nu(a_0)}^{0})\}$. If any $a_i = 0$ such that $\nu(0) = +\infty$, just omit them from $S_f$ (it's clear this will have no impact later).

    We define the <u>Newton polygon</u> $NP(f)$ of $f$ as the convex hull of $S_f$.

    In particular, it's bottom boundary will be determined by the following properties: $$(1) \\; S_f \text{ on or above } NP, \quad (2) \\; \text{piecewise-linear with flex points only in $S_f$}, \quad (3) \\; \text{the slope is increasing}.$$
</div>

The more specific answer to today's question is:

<div class = "thm-box">
    Say the flex points on the bottom boundary occur at $n - n_1, n - (n_1 + n_2), \ldots, n - \sum_1^{r-1} n_i$ where $\sum_1^r n_r = 0$.

    Then we get slopes $\lambda_1, \ldots, \lambda_r$ corresponding to $(n,0) \to (n-n_1, \nu(a_{n-n_1})) \to \cdots \to \nu(0, \nu(a_0))$.

    As a multi-set, $$\\{\nu(\alpha\_i)\\}\_{1 \leq i \leq n} = \\{\overbrace{\lambda\_1, \ldots, \lambda\_1}^{n\_1 \text{ times}}, \ldots, \overbrace{\lambda_i, \ldots, \lambda_i}^{n_i \text{ times}}, \ldots, \overbrace{\lambda\_r, \ldots, \lambda\_r}^{n\_r \text{ times}}\\}.$$
</div>

Before, we prove this, here are some observations.

<div class = "subthm-box" type = "rmk">
    If $L/K$ is Galois, then $\nu$ of conjugates are exactly the same so $\nu(\alpha_i) = \nu(\alpha_j)$ will have the same slope if they are conjugates.
</div>

<i> Below is another case of Professor Shin's "ex" standing for both example and exercise...</i>

<div class = "subthm-box" type = "ex">
    Say $\nu(a_1), \ldots, \nu(a_{n-1}) \geq \nu(a_0) > 0$. Then the Newton polygon's base is a straight line from $(0, \nu(a_0)) \to (n,0)$. Thus, $\nu(\alpha_i) = \frac{\nu(a_0)}{n}$ for all $i = 1, \ldots, n$.

    Now say $\nu$ is a discrete valuation (so $\Z$-valued). If $\nu(a_0)$ is coprime to $n$, then apparently $f$ is inert and irreducible in $K[x]$. In fact, this turns out to be a version of Eisenstein's criterion.

    Say $f$ is reducible, so it has a monic factor $g$ with $m = \deg g < n$ made up of some $m$ roots we can relabel $\alpha\_1, \ldots, \alpha\_m$. Since $\prod\_1^m(x-\alpha\_i) \in K[x]$, we know $\prod\_1^m \alpha\_i \in K$ so will have integer-valuation under $\nu$. But, $\nu(\prod\_1^m \alpha\_i) = m \nu(\alpha\_1) = \frac{m}{n} \nu(a\_0)$ and $\nu(a_0)$ is coprime to $n$ so either $m = 0$ or $m \geq n$ - contradiction.

    Now we show $f$ is an Eisenstein polynomial. Since $\nu(a_1), \ldots, \nu(a_{n-1}) \geq \nu(a_0) > 0$, these are positive integers so all $a_i \in \pp_\nu$.

    As long as we show that $\nu(a_0) = 1$, we win... well....
</div>

Back to the proof.

<div class = "subthm-box" type = "proof">
    First off, we may assume all roots $\alpha_i \in K$.

    The idea of the proof relies on the fact that $\nu(x+y) \geq \min \\{\nu(x), \nu(y)\\}$ with equality if $\nu(x) \neq \nu(y)$.

    Reorder the roots as $\alpha\_{1'}, \ldots, \alpha\_{n'}$ such that $$\lambda_{1'} = \nu(\alpha\_{1'}) = \cdots = \nu(\alpha_{n_1'}) < \lambda_{2'} = \nu(\alpha_{n_1' +1}) = \cdots < \cdots \lambda_{r'} = \cdots = \nu(\alpha_{n'}).$$

    Now, we draw the base of $NP'(f)$ by connecting $(n-i, \nu(\alpha_{1'} \cdots \alpha_{i'}))$. We want to show $NP' = NP$ as this means our two sets in the theorem are identical.

    By construction, the slope is increasing so we don't need to check (3).

    For (1), we want to show $NP'$ lies below $NP$. But by our ordering construction: $$\nu(a_{n-i}) = \nu((-1)^{i} \sum_{I \subset \{1, \ldots, n\}, \\; |I| = i} \alpha_I) \geq \nu(\alpha_{1'} \cdots \alpha_{i'}).$$

    For (2), we want to show the flex points of $NP'$ are precisely those of $NP$. These are exactly at $a_{n - n_{i'}}$. Thus: $$\nu(a_{n - n_{1'}}) = \nu((-1)^{i} \sum_{I \subset \{1, \ldots, n\}, \\; |I| = i} \alpha_I) = \nu(\alpha_1 \cdots \alpha_{n_{1'}}) = n_{1'}\lambda_{1'}.$$

    Notice that $\nu(a_{n-{n_1'+1}}) = \nu(\alpha_1 \cdots \alpha_{n_{1'}}\alpha_{n_{1'}+1}) = n_1'\lambda_1' + \lambda_2' > (n_1'+1)\lambda_1'$ so $NP$ changed slope at $n_{1'}$, as did $NP'$. We can repeat these checks to finish.
</div>