---
layout: layouts/classnote.njk
title: math 254a - lec 31
class: math 254a
lec_date: "2025-11-07"
---

Today we applied Minkowski's theorem.

<div class = "subthm-box" type = "setting">
    Recall $J = \Hom(K, \C) = I^\R \sqcup I^\C \sqcup c \cdot I^\C$ and $$K_\R = K \otimes_\Q \R \cong \prod_{\sigma \in I^\R} \R \times \prod_{\tau \in I^\C} \C \subset K_\C \cong \prod_{\eta \in J} \C.$$

    Pick $c_\eta > 0, \eta \in J$ so $c_{c\eta} = c_{\eta}$, from which $\overset{\in I^\R}{c_\sigma} \cdot \overset{\in I^\C}{c_\tau} > 0$.

    Set the doamin $$D = \\{(r_\sigma, s_\tau) \in K_\R: |r_\sigma| < c_\sigma, |s_\tau| < c_\tau\\} = \{|\eta-\text{coord}| < c_\eta\}.$$

    Using the volume $2^{r_2} dx_1 \cdots dx_{r_1 + 2r_2}$ from last time, for $\sigma \in I^\R$ and $\tau \in I^\C$, $\vol (-c_\sigma, c_\sigma) = 2c_\sigma$ whereas $\vol (B_{c_\tau}(0)) = \pi c_{\tau}^2$.

    In fact, $$\vol (D) = 2^{r_2} \prod_\sigma 2c_\sigma \prod_\tau \pi c_\tau^2 = 2^{r_1 + r_2} \pi^{r_2} \prod_\sigma (c_\sigma) \prod_\tau (c_\tau c_{c \tau}) = 2^{r_1 + r_2} \pi^{r_2} \prod_{\eta \in J} c_\eta.$$
</div>

Now, on the topic of lattices:

<div class = "subthm-box" type = "rmk">
    Consider $0 \neq \aa \lhd \OO_K \subset K \subset K_\R$ and recall $N(\aa) = [\OO_K: \aa] = |\OO_K / \aa|$.

    Write $\OO_K = \oplus_1^n \Z \alpha_i$ (since we know it is a lattice) and $d_K = \det (\Tr(\alpha_i \alpha_j))$ is independent of any change of basis up to $\pm 1$.
</div>

<div class = "subthm-box" type = "lemma">
    In the situation above, $$\vol (\aa) = |d_k|^{1/2} \cdot N(\aa).$$
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    First, $K_\R / \aa \sur K_\R / \OO_K$ is an $N(\aa)$-to-1 map so $\vol (\aa) = N(\aa) \cdot \vol (\OO_K)$.

    Next, $$\vol(\OO_K)^2 = |\det (\alpha_i \alpha_j)| = |\det (\sum_\eta \eta (\alpha_i) \ol{\eta(\alpha_j)})| = |\Tr_{K/\Q}(\alpha_i \alpha_j)| = |d_K|.$$

    Hence, $$\vol(\aa) = N(\aa) \cdot \vol(\OO_K) = N(\aa) \cdot |d_K|^{1/2}.$$
</div>

Finally, we can apply Minkowski's lattice point theorem!

<div class = "subthm-box" type = "prop">
    Let $c_\eta > 0$ be as before ($c_{\eta} = c_{c\eta}$) and pick $0 \neq \aa \lhd \OO_K$.

    If $\prod_{\eta \in J} c_\eta > (\frac{2}\pi)^{r_2} \sqrt{|d_K|} N(\aa)$, then there is some $a \in \aa - 0$ such that $|\eta (a)| < c_\eta$ for all $\eta \in J$, i.e. contained in $D$.
</div>

<div class = "subthm-box" type = "proof">
    Pick $D$ as before.

    Using the above discussion and proposition:

    $$\vol (D) = 2^{r_1 + r_2} \pi^{r_2} \prod_{\eta \in J} c_\eta > 2^n \cdot \vol (\aa) \iff \prod_{\eta \in J} > 2^{-r_2} \cdot \pi^{r_2} \cdot |d_K|^{1/2} N(\aa).$$

    In other words, Minkowski's lattice point theorem applies to $D$ so we are done.
</div>

Allegedly, we can almost prove the finiteness of ideal class groups.

<div class = "subthm-box" type = "rmk">
    We want to examine the exact sequence: $$1 \to \OO_K^\times \inj K^\times \to I_K = \{\text{fractional ideals}\} \sur \Cl(K) \to 1.$$

    <i>Recall/it follows that $\Cl(K)$ is the group of fractional ideals quotient the principal ideals.</i>
</div>

In particular, our first theorem will show $|\Cl(K)| < \infty$ and our second will show $\O_K^\times$ is finitely generated.


Before that, however:

<div class = "subthm-box" type = "prop">
    For any ideal class $c \in \Cl(K)$, there is some $\aa \lhd \OO_K$ with $[\aa] = c$ so $$N(\aa) < \left(\frac{2}\pi\right)^{r_2} |d_K|^{1/2}.$$
</div>

<div class = "subthm-box" type = "proof">
    Pick some ideal $\bb$ in $c\inv$.

    From the previous proposition, there is some $\alpha \in \bb - 0$ so $$|N(\alpha)| = |\prod_\eta \eta(\alpha)| < \prod_\eta c_\eta = 2^{-r_2} \cdot \pi^{r_2} \cdot |d_K|^{1/2} N(\bb) + \epsilon.$$

    Taking $\epsilon \to 0$, $$|N(\alpha \bb\inv)| < \left(\frac{2^{r_2}}{\pi^{r_2}}\right) |d_K|^{1/2} \implies \alpha\bb\inv \lhd \OO_K, \quad [\alpha \overset{[\alpha(c\inv)\inv]}{\bb\inv}] = c.$$

    So $\alpha \bb\inv$ suffices.
</div>

<div class = "thm-box">
    $$|\Cl(K)| < \infty.$$
</div>

Recall $\aa \lhd \bb \implies N(\bb) \leq N(\aa)$.

<div class = "subthm-box" type = "proof">
    From the last proposition, $$\Cl(K) \inj \{\aa \lhd \OO_K: N(\aa) \leq M(K)\},$$ where $M = \left(\frac{2^{r_2}}{\pi^{r_2}}\right) |d_K|^{1/2}$ depends <i>only</i> on $K$.

    Pick $c \in \Cl(K)$ and pick some $[\aa] = c$ so $N(\aa)$ is minimal.

    If we show, the RHS is finite, we win.

    But, $\aa = \prod_\pp \pp^{\aa_\pp}$ for $1 \leq \aa_{\pp} \leq [K:\Q]$ for finitely many such primes.

    Hence, $M(K) \geq N(\aa) \geq \prod_\pp N(\pp)$, so there can only be finitely many such $\aa$ which will not exceed $M(K)$, so we are done.
</div>