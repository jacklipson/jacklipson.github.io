---
layout: layouts/classnote.njk
title: math 254a - lec 32
class: math 254a
lec_date: "2025-11-10"
---

Today we bound the discrimant and calculate some ideal class groups.

<div class = "subthm-box" type = "rmk">
    Actually, the bound $M(K) = (\frac{2}\pi)^{r_2}$ from last time can be improved to $M(K)^+ = \frac{n^!}{n^n}(\frac{4}\pi)^{r_2}$.
</div>

On a more concrete note,

<div class = "subthm-box" type = "recall">
    Consider quadratic fields ($n = 2$) $\OO_K \subset K = \Q(\sqrt{D})$ for $D$ squarefree.

    We know $\OO_K = \begin{cases} \Z \oplus \Z\sqrt{D} & D \equiv 2,3 \mod 4, \\\\ \Z \oplus \Z \frac{1 + \sqrt{D}}2 & D \equiv 1 \mod 4.\end{cases}$ and $d_K = \begin{cases} 4D, \\\\ D.\end{cases}$

    <div class = "subthm-box" type = "rmk">
        $K$ is <u>real</u> if $D > 0$.
        
        In this case, $r_1 = 2, r_2 = 0$ and $M(K)^+ = \frac{1}{2} < M(K) = 1$.

        If $|d_K| < 16$ ($D = 2,3,5,13$). $\\{N(\aa) < 2 = 16^{1/2} \cdot \frac12\\} \sur \Cl(K)$.

        Observing that $N(\aa) = [\OO_K : \aa] < 2$ so has only one element $\OO_K$. So $\Cl(K) = \\{0\\}$ is trivial.
    </div>

    <div class = "subthm-box" type = "rmk">
        $K$ is <u>imaginary</u> if $D > 0$.

        In this case, $r_1 = 0, r_2 = 1$ so $M(K)^+ = \frac{1}{2} \cdot \frac{4}\pi = \frac2\pi$.

        If $|d_K| < \pi^2 = 9.86$, i.e. if $D = -1, -2, -3, -7$, then $\Cl(K)$ is similarly trivial.
    </div>
</div>

A little history lesson:

<div class = "thm-box" name = "Baker-Heegner-Stark (1950s-60s)">
    If $D < 0$, $\Cl(\Q(\sqrt{D}))$ is trivial if and only if $D \in \{-1, -2, -3, -7, -11, -19, -43, -67, -163\}$.

    It is open question for real quadratic fields, but a conjecure that $\Cl(K)$ is trivial for infinitely many such fields.
</div>

<div class = "subthm-box" type = "def" name = "arithmetic statistics">
    Cohen-Lenstra heuristics study how ideal class groups vary over families (e.g. all real quadratic fields) of infinitely many $K$.
</div>

Here are some such examples of <u>arithmetic statistics</u>.

<div class = "subthm-box" type = "ex">
    If $K = \Q(\sqrt{-5})$, one can show $\Cl(K) = \Z/2\Z$.

    If $K = \Q(\sqrt{-23})$, begin with $\\{\aa: N(\aa) \leq \overbrace{|d_K|^{1/2} \cdot M(K)^+}^{3 < \sqrt{23} \cdot \frac{2}\pi}\\} \sur \Cl(K)$.
</div>

