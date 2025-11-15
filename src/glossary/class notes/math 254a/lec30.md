---
layout: layouts/classnote.njk
title: math 254a - lec 30
class: math 254a
lec_date: "2025-11-05"
---

Today we complete the proof of Minkowski's theorem and cover real/complex embeddings.

<div class = "thm-box" name = "Minkowski">
    Say $D$ is a centrally symmetric, convex domain in a dimension-$n$ vector space $V/\R$ and $\Gamma \subset V$ is a lattice such that $\vol (D) > 2^n \cdot \vol (\Gamma)$.

    Then there is a nonzero lattice point $\gamma \in D \cap \Gamma$.
</div>

As a toy example, here is why this inequality is strict:

<div class =  "subthm-box" type = "counterex">
    If $n = 2$, then $\Gamma = \Z^2$ and $V = \R^2$ then $D = (-1,1)^2$ has volume $4 = 2^{n=2} \cdot \vol (\Gamma)$ and intersects no nontrivial lattice points.
</div>

<div class = "subthm-box" type = "proof" name = "Minkowski">
    Define $\frac{D}{2} \coloneq \{\frac{d}2:d \in D\}$ so $\vol(\frac{D}2) = \frac{\vol (D)}{2^n} > \vol \Gamma$.

    By our pigeonhole lemma from last time, $N \geq 2$ so there are 2 distinct points $v_i/2$ of $\frac{D}{2}$ identical in $V / \Gamma$.

    In other words, $\frac{v_1 - v_2}{2} \in \Gamma^*$. But $v_i \in D$ means $-v_i \in D$ so by convexity $\frac{1}{2}v_1 + \frac{1}{2} (-v_2) \in D$, i.e. $\frac{v_1 - v_2}{2} \in \Gamma \cap D - \{0\}$ (because these are distinct points).
</div>

We switch to the topic of real/complex embeddings.

<div class = "subthm-box" type = "setting">
    Take a fractional ideal $\aa \subset K_{\text{fin/$\Q$}} \overset{a \mapsto a \otimes 1}\inj K \otimes_\Q \R \subset K \otimes_\Q \C \eqqcolon K_\C$.

    Recall that $\aa$ is a lattice of $K \otimes_\Q \R \eqqcolon K_\R$.

    Also notice the Hermitian inner product on $K \otimes_\Q \C$ restricts to an inner product (volume) on $K_\R$.

    Let's investigate how $\\{1, c\\} = \Gal(\C/\R)$ for $c$ complex conjugation generalizes to this settting.

    Notice $\Gal(\C/\R)$ acts on $$J_K \coloneq \Hom_{\Q-alg}(K, \C) = \overset{\text{fixed by $c$}}{\\{\sigma = c\sigma\\}} \sqcup \overset{\text{not fixed by $c$}}{\\{\tau \neq c\tau\\}}.$$

    Moreover, the set of representatives $$I_K = \\{\sigma = c\sigma\\} \sqcup \\{\tau : \text{exactly one of $\tau, c\tau$ in each orbit}\\} \eqqcolon I_K^\R \sqcup I_K^\C \inj J_K.$$

    <i>We omit the subscript $K$ when clear</i>.
    
    Set $r_1 \coloneq |I_K^\R|, r_2 \coloneq |I_K^\C|$. Then $|J_K| = [K:\Q] = r_1 + 2 r_2$. 
</div>

That was a lot of talking so here's something tangible:

<div class = "subthm-box" type = "ex">
    Here is a degree 2 case. Put $K = \Q(\sqrt{D})$.
    
    When $D > 0$, $r_1 = 2, r_2 = 0$ (real quadratic).

    When $D < 0$, $r_1 = 0, r_2 = 1$ (imaginary quadratic).
</div>

<div class = "subthm-box" type = "rmk">
    Observe $K_\R \cong \prod_\sigma \R \times \prod_\tau \C \cong \R^{r_1} \times \R^{2r_2}$ under $(r_\sigma, s_\tau) \mapsto (r_\sigma, \text{Re}s_\tau, \text{Im}s_\tau)$.

    $K_\R$ injects into $K_\C \cong \prod_\sigma \C \times \prod_\tau (\C \times \C)$ which tracks data $(r_\sigma, s_\tau, \ol s_\tau)$.
</div>

<div class = "subthm-box" type = "lemma">
    The inner product $\langle-, -\rangle$ on $K_\C$ restricts to the following inner product on $K_\R \cong \R^{r_1} \times \R^{2r_2}$ $(\vec{x} \mapsfrom (x_i, x_j))$: $$(\vec{x}) \cdot (\vec{y}) = \sum_i x_iy_i + 2\sum_j x_jy_j, \quad 1 \leq i \leq r_1, 1 \leq j \leq 2r_2.$$
</div>

<div class = "subthm-box" type = "proof">
    $$\langle \overset{\in K_\R}{(r_\sigma, s_\tau)}, \overset{\in K_\R}{(r'_\sigma, s_\tau')} \rangle = \sum_\sigma r_\sigma \cdot r_\sigma' + \sum_\tau (s_\tau \cdot \ol {s_\tau'} + \ol s_\tau \cdot s_\tau') = \sum_\sigma r_\sigma \cdot r_\sigma' + 2 (\text{Re}(s_\tau) \text{Re}(s_\tau') + \text{Im}(s_\tau) \text{Im}(s_\tau')).$$
</div>

The upshot here is that the volume form on $K_\R \cong \R^{r_1 + 2r_2}$ is $2^{r_2} dx_1 \cdots dx_{r_1 + 2r_2}$.