---
layout: layouts/classnote.njk
title: math 254a - lec 20
class: math 254a
lec_date: "2025-10-13"
---

Today we made everything perfect.

<div class = "subthm-box" type = "def" name = "perfect">
    Fix a prime $p$.

    $R$ (of characteristic $p$) is called <u>perfect</u> if $\Fr_p = \Frob_p$ ($x \mapsto x^p$) is an isomorphism (where $\Fr_p$ is a ring homomorphism because $R$ is of characteristic $p$).

    It follows that $x \mapsto x^{1/p}$ is well-defined.
</div>

Now some examples.

<div class = "subthm-box" type = "ex">
    $\F_p \subseteq k \subset \ol{\F_p}$ is perfect.

    $\F_p[[t]], \F_p((t))$ are <i>not</i> perfect. (Recall the former is formal power series and the latter is formal Laurent series).

    However, $\ol{\F_p((t))}$ <i>is</i> perfect.
</div>

Now the setting for today's problem:

<div class = "subthm-box" type = "setting">
    Fix $p \in (\pi) = \mm \lhd A = CDVR \subseteq K = CDVF$ and $k \coloneq A/\mm$.

    Assume $k$ has characteristic $p$ and is perfect.

    Our goal is to find a section of the projection $A \overset{\text{mod } \mm}\sur k$.
</div>

Here is an instance of what we are thinking:

<div class = "subthm-box" type = "ex">
    Take $A = \Z_p \sur k = \F_p = \{0\} \cup \mu_{p-1} = \{0\} \cup \F_p^\times = \{0\} \cup \{1, \ldots, p-1\}$.

    <i>Note: this notation is per our homework where $\mu_n$ denoted the $n$-th roots of unity in the algebraic closure of whatever ring, i.e. $\Q_p$ or $\ol{\F_p}</i>.

    Thus, we can map $0 \mapsto 0$ and whichever $(p-1)$-th root in $\F_p$ to whatever it is in $\Z_p$ such that $\mod p \Z_p$, this just becomes what we expect.
</div>

Let's generalize this idea as follows.

<div class = "subthm-box" type = "prop" name = "Teichmüller lift">
    There is a unique set-theoretic map $f: k \to A$ such that, for all $\lambda \in k$:
    
    1. $f(\lambda^p) = f(\lambda)^p$.

    2. $a \in f(k)$ if and only if $a$ has a $p^n$-th root in $A$ for all $n \geq 1$.

    3. $f(\lambda \mu) = f(\lambda)f(\mu)$.
    
    4. $\char \\; K = p$ implies $f$ is a ring homomorphism.
</div>

We write $[\lambda] \in A$ for $f(\lambda)$ for all $\lambda \in k$.

<div class = "subthm-box" type = "proof">
    Take an arbitary (set) lift $g: k \to A$ such that $g(\lambda) \mod \pi = \lambda$ for $\lambda \in k$.

    Put $f(\lambda) \coloneq \lim g(\lambda^{1/p^n})^{p^n}$.

    We will show:
    
    i. This sequence is Cauchy.

    ii. $f$ is independent of choice of $g$.

    iii. $f(\lambda^p) = f(\lambda)^p$.

    These last two points show the uniqueness of $f$.

    First, we give a lemma:

    <div class = "subthm-box" type = "lemma">
        Observe $a \equiv b \mod \pi^r$ implies $a^p \equiv b^p \mod \pi^{r+1}$ for $r \geq 1$.
        
        This follows from $$(a-b)^p = a^p - b^p + \overbrace{p}^{\text{ div by }\pi}\overbrace{(a-b)}^{\text{div by } \pi^r}(\cdots) \equiv 0 \mod \pi^{r+1}.$$
    </div>

    <div class = "subthm-box" type = "proof" name = "i">
        $g(\lambda^{1/p^n}) \mod \pi = (\lambda^{1/p^n}) = (\lambda^{1/p^{n+1}})^p \equiv g(\lambda^{1/p^{n+1}})^p \mod \pi$.

        Applying the lemma, $$g(\lambda^{1/p^n})^{p^k} \equiv g(\lambda^{1/p^{n+1}})^{p^{k+1}} \mod \pi^{k+1}$$
        
        If we set $k = n$, then, clearly this is Cauchy.
    </div>

    <div class = "subthm-box" type = "proof" name = "ii">
        If $g, g'$ are lifts then $g(\lambda^{1/p^n}) \equiv  g'(\lambda^{1/p^n}) \mod \pi$. By the lemma, $g(\lambda^{1/p^n}) \equiv g'(\lambda^{1/p^n})^{p^n} \mod \pi^{n+1}$. So they converge to the same thing.
    </div>

    Now we prove the proposition:

    <div class = "subthm-box" type = "proof" name = "1 / iii">
        $f(\lambda^p) = \lim g(\lambda^{p^{n-1}})^{p^n} = \lim (g(\lambda^{1/p^{n-1}})^{p^{n-1}})^p = f(\lambda)^p$.
    </div>


    <div class = "subthm-box" type = "proof" name = "2">
        $\implies):$ If $a \in f(k)$, then $a = f(\lambda) \overset{iii}= f(\lambda^{1/p^n})^{p^n}$ for some $\lambda \in k$ and all $n \in \Z_{\geq 1}$.

        $\impliedby):$ If $a = (a_n)^{p^n}$ for $n \in \Z_{\geq 1}$. Applying the lemma to $f(\ol{a_n}) \equiv a_n \mod \pi$ gives $$f(\ol{a_n^{p^n}}) = f(\ol{a_n})^{p^n} \equiv a_n^{p^n} \mod \pi^{n+1} = a \mod \pi^{n+1} \implies $f(\lim \ol{a_n}^{p^n}) = a.$$
    </div>  

    <div class = "subthm-box" type = "proof" name = "3">
        $f(\lambda^{1/p^n}\mu^{1/p^n}) = \lambda^{1/p^n}\mu^{1/p^n} = f(\lambda^{1/p^n})f(\mu^{1/p^n}) \mod \pi$. Taking the $p^n$-th power and applying the lemma gives $f(\lambda^{1/p^n}\mu^{1/p^n})^{p^n} = f(\lambda^{1/p^n})^{p^n}f(\mu^{1/p^n})^{p^n} \mod \pi^{n+1}$. By iii and $n \to \infty, $f(\lambda \mu) = f(\lambda) f(\mu)$.
    </div>

    <div class = "subthm-box" type = "proof" name = "4">
        Suppose $\char \; K = p$.

        $f(\lambda^{1/p^n} + \mu^{1/p^n}) = f(\lambda^{1/p^n}) + f(\mu^{1/p^n}) \mod \pi$ so taking the $p^n$-th power and applying the lemma again gives $$f(\lambda^{1/p^n} + \mu^{1/p^n})^{p^n} = \overbrace{(f(\lambda^{1/p^n}) + f(\mu^{1/p^n}))^{p^n}}^{\in A \subseteq K} = f(\lambda^{1/p^n})^{p^n} + f(\mu^{1/p^n})^{p^n} \mod \pi^{n+1} = f(\lambda) + f(\mu) \mod \pi^{n+1}.$$

        Taking $n \to \infty$ finishes $f(\lambda + \mu) = f(\lambda) + f(\mu)$. We already showed $f(\lambda \mu) = f(\lambda) f(\mu)$ so $f$ is a ring homomorphism.
    </div>
</div>

Now that is over with, we get a corollary.

<div class = "subthm-box" type = "cor">
    1. If $A \overset{\text{set}}= \{\sum_{n \geq 0} [a_n] \pi^n : a_n \in k\}$ where each element can be written uniquely as such a sum.

    2. If $\char \\; K = p$, then $A \cong k[[t]]$ as a $k$-algebra via $\sum [a_n] \pi^n \mapsto \sum a_n t^n$.
</div>

<div class = "subthm-box" type = "proof">
    Such a sum clearly defines an element of $A$ since it is a CDVR.

    1. If $a \in A$, then $a_0 \equiv  a \mod \pi$, $a_1 \equiv \frac{a-a_0}{\pi} \mod \pi$, $a_2 \equiv \frac{a - a_0 - a_1\pi}{\pi^2} \mod \pi$, and so on shows uniqueness.

    2. We need a $k$-algebra structure on $A$, which we do via the lift. Now, extending the lift and modding by $\pi$ to $k[[t]]$ finishes.
</div>