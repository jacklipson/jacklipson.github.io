---
layout: layouts/classnote.njk
title: math 254a - lec 23
class: math 254a
lec_date: "2025-10-20"
---

Today, we covered commutative algebra and lattices.

<div class = "subthm-box" type = "goal">
    In particular, we want:

    \begin{align*}
        \text{different} = &\mathcal{D}_{B/A}& \subset \hspace{25px} B \hspace{25px} \subset \hspace{25px} &L& \\\\
        N\_{L/K} \\; &\downarrow& &\vert& \text{fin. separable} \\\\
        \text{discriminant} = &d\_{B/A}& \hspace{10px} \subset \hspace{25px} A \hspace{25px}\subset \hspace{25px} &K&,
    \end{align*}

    where the discriminant will measure ramification.
</div>

Before that, we quickly cover some background from [AM]; $M$ will always refer to an $A$-module.

<div class = "subthm-box" type = "def" name = "simple">
    $M$ is a <u>simple</u> $A$-module if there does NOT exist an $A$-module $N$ so $0 \subsetneq N \subsetneq M$.
</div>

<div class = "subthm-box" type = "lemma">
    Every simple $A$-module $M$ is isomorphic to $A/\mm$ for $\mm \lhd A$ a maximal ideal.
</div>

<div class = "subthm-box" type = "proof">
    Take $0 \neq m \in M$. Consider the kernel $\nn$ of the map $A \to M$, mapping $a \mapsto a \cdot m$. Clearly, $M \cong A / \nn$. If $\nn$ is not maximal, then $M$ is not simple since $A / \nn \supsetneq \mm / \nn \neq 0$ so $\mm / \nn$ will inject into $M$.
</div>

<div class = "subthm-box" type = "fact">
    The following are equivalent:

    1. $\\{\text{submodules of $M$}\\}$ satisfy the ascending and descending chain conditions.

    2. There is a finite composition series of $M$, namely $$0 \neq M_0 \subsetneq M_1 \subsetneq \cdots \subsetneq M_n = M,$$ so $M_{i+1}/M_i$ is a simple $A$-module.
</div>

<div class = "subthm-box" type = "def" name = "finite length">
    We call an $A$-module satisfying the above fact <u>finite length</u>.

    The following notation is well-defined: $\ell(M) = n \in \Z$ for length and the multiset $JH(M) = \\{M_{i+1}/M_i \text{ up to isomorphism}\\}$.

    <i>The JH stands for Jordan-Hölder.</i>
</div>

Here is an example of what we mean:

<div class = "subthm-box" type = "ex">
    Put $A = \Z$. It is of finite length, e.g. $\Z/12 \supset 3\Z/12 \supset 6\Z/12 \supset 0$ is a sequence of length 3 where each intermediate quotient is respectively $\Z/3, \Z/2, \Z/2$.
</div>

<div class = "subthm-box" type = "lemma">
    Given a SES of $A$-modules: $$0 \to M' \inj M \sur M'' \to 0,$$

    1. $M$ is finite length if and only if $M', M''$ are finite length, and

    2. If so, $\ell(M) = \ell(M') + \ell(M'')$ and $JH(M) = JH(M') \sqcup JH(M'')$.

    <i>The main idea here is that composition series for $M$ are the same as composition series for $M'$ and $M''$</i>.
</div>

Back to our usual setup:

<div class = "subthm-box" type  = "def" name = "𝜒">
    Consider a Dedekind domain $A$ with field of fractions $K$ and a finite separable extension $L$ of $K$ with integral inclosure $B$ of $A$ in $L$.

    Simple $A$-modules are of the form $A/\mm$ for maximal ideals $\mm$.

    In particular, if $M$ is a finite-length $A$-moduule, then $JH(M) = \\{A/ \pp_1, \ldots, A/ \pp_n\\}$ for $\pp_i$ not necessarily distinct.

    We define the ideal $$\chi_A(M) = \prod_1^n \pp_i.$$
</div>

<div class = "subthm-box" type = "lemma">
    Given an SES $$0 \to M' \inj M \sur M'' \to 0,$$ then $$\chi_A(M) = \chi_A(M')\chi_A(M'').$$
</div>

<div class = "subthm-box" type = "proof">
    Recall $JH(M) = JH(M') \sqcup JH(M'')$. We have the following diagram
    \begin{align*}
        &\text{Mod}^{f.l.}(A)& \hspace{-10px} \underset{\text{restrict}}{\overset{\otimes_A B}{\large\rightleftarrows}} & \hspace{50px}\text{Mod}^{f.l.}(B) \\\\
        &\small\chi_A \large\downarrow& \quad & \hspace{60px} \large \downarrow \small\chi_B \\\\
        &\quad I_A& \hspace{-10px}  \underset{N_{L/K}}{\overset{i}{\large\rightleftarrows}} & \hspace{60px}I_B
    \end{align*}

    where $i$ means multiply by $B$ and $N$ is the norm map $N(\qq) = \pp^{f_\qq}$.

    <div class = "subthm-box" type = "lemma">
        The diagram commutes in both directions. Namely, for a finite-length $A$-module $M$ and $B$-module $N$:

        1. $\chi_B(M \otimes_A B) = i(\chi_A(M))$.

        2. $\chi_A(N \vert \_K) = N\_{L/K}(\chi\_B(N))$.
    </div>

    <div class = "subthm-box" type = "proof">
        By linearity, it suffices to consider the case for simple modules, i.e. when $M = A/\pp, N = B /\qq$. Both ways are clear by definition.
    </div>
</div>

Now, we can turn our attention to lattices!

Our setup is as follows: $A$ is a Dedekind domain with $K = \Frac A$ and $V$ is a finite-dimensional $K$-vector space.

<div class = "subthm-box" type = "def" name = "A-lattice of V">
    $X$ is an <u>$A$-lattice of $V$</u> if it is a finitely-generated $A$-submodule that spans $V$ over $K$.
</div>

<div class = "subthm-box" type = "ex">
    Put $V = K$. Then the $A$-lattices are any nonzero fractional ideal.

    If $V = \langle e_1, \ldots, e_n \rangle$ is a basis, then $X = \oplus_1^n A e_i$ is the "standard" lattice.
</div>

<div class = "subthm-box" type = "rmk">
    Recall from lecture 09, that any finitely-generated torsion-free module over a PID is a free and finitely-generated.
</div>

Prof. Shin left us this exercise:

<div class = "subthm-box" type = "rmk">
    Say $X \subset V$ is an $A$-submodule.

    1. If $X$ is a lattice, then so is $x \cdot X$ for any $x \in K^\times$.

    2. If it is possible to have $Y \subset X \subset Z$ for $Y,Z$ lattices, then $X$ is also a lattice.

    3. If $X, X'$ are lattices, then there are $a, b \in A$ so $aX' \subset X \subset \frac{1}{b}X' \neq 0$. (Given $0 \neq v \in V$, there is some $a \in A^*$ so $av$ is in a given lattice.)

    4. If $X$ is a lattice, then $K \otimes_A X \to V$ is an isomorphism.
</div>

<div class = "subthm-box" type = "proof">
    1. If $X$ was generated over $A$ by $x_1, \ldots, x_k$, then $(xx_i)_1^k$ will still generate it as an $A$-submodule of $K$. Similarly, $xX$ still generates $V$ over $K$.

    2. Clearly $X$ will still generate $V$ over $K$ since $Y$ does. Since $A$ is a DD, it is Noetherian so every submodule of a finitely-generated $A$-module ($Z$) is finitely-generated.

    3. Since $bX \subseteq X'$ is the same as $X \subseteq \frac{1}{b}X'$, it suffices to show there is $a \in A^*$ so $aX' \subseteq X$. In particular, take an $A$-basis $(e_i)$ for $X'$ and $(f_j)$ for $X$. $e_i = \sum \frac{a_{ij}}{b_{ij}} f_j$ for $a_{ij}, b_{ij} \in A$. It's clear $\prod_{i,j} b_{ij} X' \subset X$ and this scalar is nonzero.

    4. By our remark above, $X$ is a free $A$-module so $K \otimes_A X \cong K \otimes_A A^n \cong K^n \cong V$.
</div>