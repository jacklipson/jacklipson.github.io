---
layout: layouts/classnote.njk
title: math 254a - lec 24
class: math 254a
lec_date: "2025-10-22"
---

Today, we (continued) discussing lattices and the discriminant.

<div class = "subthm-box" type = "lemma">
    If $X_1 \subset X_2$ are lattices, then $X_2 / X_1$ is a finite-length $A$-module.
</div>

<div class = "subthm-box" type = "proof">
    Per last time, we can put $X_0 = \oplus A e_i$ for a basis $(e_i)_1^n$ of $V$.

    There exist $a, b \neq 0$ in $A$ so $aX_0 \subset X_1 \subset X_2 \subset \frac{1}{b}X_0$.

    But $\frac{1}/b X_0 / aX_0 \overset \to X_0 / ab X_0 \cong \oplus A/(a, b)$. $A / (a,b)$ is Noetherian and dimension 0 so Artinian so finite-length. Thus, $\oplus A/(a,b)$ is finite-length implying $X_2 / X_1$, obtained by sub/quotient modules of $aX_0 \subset \frac{1}{b}X_0$ is finite-length.
</div>

<div class = "subthm-box" type = "def">
    Given $A$-lattices $X_1, X_2 \subset V$, we define the free ideal: $$\chi_A(X_1, X_2) = \chi_A (X_1 / X_3) \chi_A (X_2 / X_3)\inv,$$

    where $X_3$ is a lattice contained in $X_1$ and $X_2$.
</div>

We check this even makes sense:

<div class = "subthm-box" type = "rmk">
    1. f $X_3 \subseteq X_2 \subseteq X_1$, then the SES $$X_2/X_3 \inj X_1/X_3 \sur X_1/X_2$$ implies $$JH(X_2/X_3) \sqcup JH (X_1/X_2) = JH(X_1/X_3)$$ so $$\chi_A(X_2/X_3)\chi_A(X_1/X_2) = \chi_A(X_1/X_3).$$

    2. $\chi_A(X_1,X_2)$ is independent of choice of $X_3$ because $\chi_A(X_1, X_2) = \chi_A(X_1/X_3) \chi_A(X_2 / X_3)\inv = \chi_A(X_1/X_2)$.

    3. If $\pp \lhd A$ is a prime, then $\chi_A(X)A_\pp = \chi_{A_\pp}(X_\pp)$ because localizing (as on the left) will simply omit the primes not in $A_\pp$, but these also will not appear on the right in $JH(X_\pp)$.

    Hence, $\chi_A(X_1, X_2) A_\pp = \chi_{A_\pp}(X_{1,\pp}, X_{2, \pp})$.

    4. If $V$ is one-dimensional over $K$, then lattices $X_1, X_2$ can be thought of as fractional ideals of $A$, in which case, they obviously differ by some product of primes $\chi(X_1, X_2)$.
</div>

Here's an instance of 2:

<div class = "subthm-box" type = "ex">
    If $A = \Z, V = K = \Q$, and $X_1 = (a_1), X_2 = (a_2)$, then: $\chi(X_1, X_2) = (a_2 / a_1) \Z$.
</div>

<div class = "subthm-box" type = "prop">
    Say $u \in \text{End}_K(V)$ has nonzero determinant and $X, X_1, X_2$ are lattices of $V$.

    1. $\chi (X, uX) = (\det u) \cdot A$.

    2. $\chi(X_1, X_2) = \chi(\wedge^n X_1, \wedge^n X_2)$.
</div>

<div class = "subthm-box" type = "proof">
    1. Localize so we can assume $A$ is a DVR. There is $a \in A^*$ so $auX \subseteq X$, so we can also assume $uX \subseteq X$.

    There is a basis (by the elementary divisor theorem) $(e_i)_1^n$ so $X = \oplus_1^n A e_i$ and $u = \text{diag}(u_1, \ldots, u_n)$ with respect to this basis.

    Hence, $\chi (X, uX) = \chi(X/ uX) = \chi(\oplus A/(u_i)) = \prod u_i \cdot A = \det u \cdot A$.

    2. We can assume $A$ is a DVR again and take a basis $(e_i)$. $X_1 = \oplus A e_i$. $X_2 = \oplus A a_i e_i$ for $a_i \in A$. Hence $\chi(X_1, X_2) = (\prod a_i) \cdot A$ so taking the wedge gives $\Wedge^n X_1 = A (e_1 \wedge \cdots \wedge e_n)$ and $\Wedge^n X_2 = A (\prod a_1 \cdots a_n) (e_1 \wedge \cdots \wedge e_n)$. Comparing with the equality from 1 finishes.
</div>

Now, suppose $\dim_K V = n$.

<div class = "subthm-box" type = "def" name = "perfect pairing">
    A map $T: V \times V \to K$ is <u>perfect</u> if $v \mapsto (w \mapsto T(v,w))$ induces an isomorphism $V \cong V^\vee = \Hom_K(V,K)$.
</div>

As an example:

<div class = "subthm-box" type = "ex" name = "trace pairing">
    $T_{L/K}: L \times L \to K$ mapping $(x,y) \mapsto \Tr_{L/K}(xy)$ is perfect if $L/K$ is a finite separable extension.
</div>

Observe that $T$ also induces a map: $\Wedge^n T: \Wedge^n V \times \Wedge^n V \to K$ mapping $(\wedge_1^n v_i, \wedge_1^n w_n) \mapsto \det (v_i, w_j)$. In particular this is an isomorphism if $\times$ is replaced with $\otimes_K$.

Also notice that a lattice $X \subseteq V$ induces a lattice $\Wedge^n X \subseteq \Wedge^n V$ (easy to see since this is one-dimensional).

<div class = "subthm-box" type = "def" name = "discriminant of X">
    The finitely-generated $A$-submodule $\dd_X = \dd_{X,T}$, the <u>discriminant of $X$ with respect to $T$</u>, is the image of the induced lattice $\Wedge^n X$ under $\Wedge^n T$.
</div>

<div class = "subthm-box" type = "ex">
    $X = \oplus_1^n A \cdot e_i$ leads to $\Wedge^n X = (e_1 \wedge e_n)$ so $\dd_{X,T} = \det (T(e_i, e_j)) \cdot A$.
</div>

For next time, recall the dual lattice

<div class = "subthm-box" type = "def" name = "dual lattice (wrt. T)">
    The <u>dual lattice with repsect to $T$</u>, denoted $X_T^*$, is the set $\{y \in V: T(x,y) \in A \text{ for all $x \in X$}\}$.
</div>