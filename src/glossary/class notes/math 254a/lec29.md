---
layout: layouts/classnote.njk
title: math 254a - lec 29
class: math 254a
lec_date: "2025-11-03"
---

Today we setup Minkowski's theorem!

<div class = "subthm-box" type = "setting">
    Consider a dimension-$n$ vector space $V/\R$ with a subgroup $\Gamma$.

    Equip $V$ wth an inner product and choose an orthonormal basis $\mathcal{c} = (e_i)_1^n$.

    We can define the Haar measure on $V$ as follows: $\vol (\\{\sum_i a_i e_i : a_i \in [0,1]
    \\}) = 1$ and $\vol (v+S) = \vol (S)$ for all $v \in V$ and $S \subset V$ measurable.
</div>

<div class = "subthm-box" type = "lemma">
    The following are equivalent:

    1. $\Gamma \cong \oplus \Z \cdot v_i$ for some $\R$-basis $\mathcal{v} = (v_i)_1^n$ for $V$.

    2. $\Gamma$ is a discrete subgroup and $V / \Gamma$ is compact.

    3. $\Gamma$ is a discrete subgroup and $\text{vol}(V/\Gamma) < \infty$.
</div>

<div class = "subthm-box" type = "proof">
    $1. \implies 2.):$ obvious.

    $2. \implies 3.):$ Fix an orthonormal basis $(e_j)$ so $v_i = \sum_j a_{ij}e_j$. Then by parallelogram volume, $$\vol(V/\Gamma) = \vol(\\{\sum_i b_i v_i: b_i \in [0,1]\\}) = \vol(\\{\sum_j [\sum_i (b_i a_{ij})] e_j\\}) = \det (a_{ij}).$$

    $3. \implies 1.):$ Since $\Gamma$ is discrete, it's finitely generated and free since there are no torsion subgroups of $\R$ and has rank $\leq n$. $\vol(V/ \Gamma) < \infty$ implies its rank is $n$ so we are done.
</div>

Now we can define a (complete) lattice as:

<div class = "subthm-box" type = "(complete) lattice">
    A <u>(complete) lattice</u> in $V$ is a subgroup satisfying the conditions in the above lemma.

    <i>Complete means the rank of the lattice is the dimension of $V$</i>.

    If $\Gamma \cong \oplus_1^n \Z \cdot v_i$, then we define the <u>fundamental mesh (domain)</u> $\Phi_{(v_i)} \coloneq \\{\sum_1^n a_i v_i : 0 \leq a_i \leq 1\\}$.
</div>

<div class = "subthm-box" type = "def" name = "volume">
    Define the lattice <u>volume</u> as $\vol (\Gamma) = \vol (\Phi_{(v_i)}) \coloneq \vol (V/ \Gamma)$, where the measure is locally induced by the measure on $V$.
</div>

<div class = "subthm-box" type = "lemma">
    If $(v_i) = A(e_i)$ for $A \in \text{GL}_n(\R)$, and $(e_i)$ orthonormal, then $$\vol (\Gamma) = |\det A| = |\det (A \cdot A^T)|^{1/2} = \det (v_i \cdot v_j)|^{1/2}.$$
</div>

Moreover, if $(v_i), (w_i)$ are both $\Z$-bases for $\Gamma$ and $g \in \text{GL}_n(\Z)$ so $(w_i)_i = g(v_i)_i$, then $|\det (g)| = 1$ since the volume is invariant.

Here's a nice fact:

<div class = "subthm-box" type = "fact">
    1. If $\text{lattice} \subset \Gamma \subset \text{lattice}$, then $\Gamma$ is a lattice.

    2. If $a \in \R^\times$ and $\Gamma$ is a lattice, then $a \cdot \Gamma$ is a lattice.
</div>

<div class = "subthm-box" type = "proof" name = "fact">
    1. follows from part (3) of the definition of lattice.

    2. follows trivially from part (1) of the definition of lattice.
</div>

Now a key example:

<div class = "subthm-box" type = "ex">
    Consider $\OO_K$ the integral closure of $\Z$ in $K$ a finite extension of $\Q$.

    Take $\Gamma = \aa$ some fractional ideal in $K$.

    Consider the inclusion $\OO_K \subset K \overset{a \mapsto a \otimes 1}\inj K \otimes_Q \R = \O_K \otimes_\Z \R \eqqcolon K_\R = V$.
</div>

<div class = "subthm-box" type = "lemma">
    $\aa$ is a lattice in $K_\R$.
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    $\O_K$ is a lattice as per (1) in the definition of lattice.

    There are lattices $a,b \in \O_K^*$ with $a\O_K \subset \aa \subset \frac{1}{b} \O_K$ so by our fact, $\aa$ is a lattice.
</div>

Finally, we can start discussing Minkowski's theorem :)

<div class = "subthm-box" type = "problem">
    Consider the image of a <u>domain</u> $D \subset V$ in $V / \Gamma$ under the projection $\pi$.

    <i>Here, a domain means that $D$ is open in its closure and its closure is compact with $\vol (\partial D) = 0$.</i>

    It is natural to ask when we can guarantee $D$ intersects $\Gamma$ given that $\vol (D) \gg \vol (\Gamma)$.

    Drawings some example domains, it is reasonable to force $D$ to be both <u>convex</u> and <u>centrally symmetric</u> ($x \in D \iff -x \in D$).

    <i>Notice that if $D$ is nonempty, $v \in D \implies -v \in D$ so by convexity, $0 \in D$. This point is obviously in our lattice so we adjust our question to ask if there is a nonzero lattice point in $D$.</i>
</div>

Before we continue, a bit of notation.

<div class = "subthm-box" type = "notation">
    Put $N \coloneq \sup_{\ol v \in V/\Gamma} |\pi \inv (\ol v)| = \sup_{v \in V} |(v + \Gamma) \cap D|$. Note this is finite since $\ol D$ is compact and $v + \Gamma$ is discrete.
</div>

<div class = "subthm-box" type = "lemma" name = "pigeonhole">
    If $\vol (D) > \vol (\Gamma)$, then $N \geq 2$.
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    Note $N$ is integer-valued. If $N \leq 1$, then all preimages are non-overlapping subsets so $\sum \vol (\pi \inv (\ol v)) \leq \vol (\Phi)$ so $\vol D \leq \vol (\Gamma)$.
</div>