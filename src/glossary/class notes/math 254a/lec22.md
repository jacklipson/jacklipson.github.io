---
layout: layouts/classnote.njk
title: math 254a - lec 22
class: math 254a
lec_date: "2025-10-17"
---

Today, we concluded our equivalence of categories from last time by showing the functor is essentially surjective.

We had two approaches.

<div class = "subthm-box" type = "rmk" name = "first">
    Fix $k_{univ.} = \F_p[x_\alpha^{p^{-\infty}}]$ for $\alpha$ in some (possibly infinite) index set $I$.

    Construct $W(k_{univ.}) \coloneq \varprojlim \Z[x_\alpha^{p^{-\infty}}]/(p^n)$. <i> This is $S, \hat S$ from last time.</i>

    Now we build $W(k)$ for general $k$ (where $k$ is a perfect ring of characteristic $p$)

    For an analog, recall that there is always a surjection $\Z[x_\alpha] \sur R$ for an arbitrary ring $R$ by mapping each $x_\alpha$ to an element in the ring.

    Similarly, there is a universal property of perfections such that we have a surjection $k_{univ.} = \F_p[x_\alpha^{p^{-\infty}}] \overset{f}\sur k$.

    We can put $W(k) \coloneq W(k_{univ.}) / \\{\sum_{n \geq 0} [a_n]p^n: a_n \in k_{univ.}, f(a_n) = 0 \text{ for } n \in \Z_{\geq 0\}\\}$.

    We are done if $W(k)$ is a strict $p$-ring with $W(k)/pW(k)$ perfect.

    By definition of $W(k_{univ.})$, $W(k)$ is $p$-adically complete. And if multiplication by $p$ lands in the part of $W(k_{univ.})$ being quotiented out for $W(k)$, it's clear, the original element must also have come from that quotien part. We win since $W(k) / pW(k)$ is perfect, as per Serre II.5
</div>

<div class = "subthm-box" type = "rmk" name = "second">
    We do this via Witt vectors. We start by recalling info from HW.

    Put $w_0 = x_0, w_1 = x_0^p + px_1, w_2 = x_0p^2 + px_1^p + p^2x_2$ in $\Z[\underline{x}]$ where $\underline{x} = (x_0, x_1, \ldots)$.

    There exist $s_n, p_n \in \Z[\underline{x}, \underline{y}]$ so $w_n(\underline{x}) + w_n(\underline{y}) = w_n(\underline{s})$ and $w_n(\underline{x}) \cdot w_n(\underline{y}) = w_n(\underline{p})$.

    <div class = "subthm-box" type = "prop">
        The set $W(k) = \{\underline{a} = (a_n) \in k^\N\}$ paired with $\underline a + \underline b = (s_0(\underline a,\underline b), s_1(\underline a,\underline b), \ldots)$ and $\underline a \cdot \underline b = (p_0(\underline a, \underline b), p_1(\underline a, \underline b), \ldots)$ is a strict $p$-ring with $W(k)/(p) \overset\sim\to k$ via $\underline a \mapsto a_0$.

        In particular, $W(k) \overset\sim\to \varprojlim W(k)/(p^n) = \varprojlim W_n(k)$ where $W_n(k) = \{(a_0, \ldots, a_{n-1})\}$ is the collection of "truncated Witt vectors of length $n$."
    </div>
</div>

The rest of class was devoted to reverse-engineering Witt vectors.

<div class = "subthm-box" type = "rmk">
    We want $\{(a_0, a_1, \ldots) \in k^\N\} \longleftrightarrow W(k) = \{\sum_{n \geq 0} [a_n]p^n : a_n \in k\}$ where $[\cdot]$ denotes the Teichmüller lift.

    In particular, we want to find $+, \cdot$ on $k^\N$ that matches $+, \cdot$ on $W(k)$.

    That is, $\sum [a_n]p^n + \sum [b_n]p^n = \sum [c_n]p^n$, we need to express $(c_n)$ using $(a_n), (b_n)$.

    For $n = 0$, if we mod $p$, then $a_0 + b_0 = c_0$ (where we can omit $[\cdot]$ since modding $p$ kills this). If we mod $p^2$, then $[c_1] = [a_1] + [b_1] + \frac{[a_0] + [b_0] - [a_0 + b_0]}{p}$.

    However, since $k$ is perfect, we can take the $p$-th root implying $[\alpha] = [\alpha^{1/p}]^p \equiv (\widetilde{\alpha^1/p})^p \mod p^2$.

    So looking at these lifts mod $p^2$, we get $c_1 = a_1 + b_1 + \frac{(a_0^{1/p})^p + (b_0^{1/p})^p - (a_0^{1/p} + b_0^{1/p})^p}{p}$ where the substitution in the last term makes sense by characteristic $p$ and is actually polynomial in $a_0^{1/p}, b_0^{1/p}$ with $\Z$-coefficients.

    Repeating this, (again taking $p$-th roots via $k$ perfect) we are justified in saying that $\sum [a_np^{-n}]p^n + \sum [b_np^{-n}]p^n = \sum [s_n(\underline{a}, \underline{b})]p^n$ and similar for product.

    In particular, if we subsitute $x_i = a_ip^{-n}, y_i = b_ip^{-n}$ then $$\sum [a_ip^{1/n}]p^n + \sum [b_ip^{1/n}]p^n = [x_0^{p^n}] + [x_1^{p^{n-1}}]p + \cdots + [x_n]p^n + [y_0^{p^n}] + \cdots + [y_0]p^n = [s_0(x_0, y_0)^{p^n}] + \cdots + [s_n]p^n.$$

    That is to say, $w_n([x_0], \ldots, [x_{n-1}]) + w_n([y_0], \ldots, [y_{n-1}]) = w_n([s_0], \ldots, [s_{n-1}])$ (where all of this goes through for product also).
</div>