---
layout: layouts/classnote.njk
title: math 254a - lec 16
class: math 254a
lec_date: "2025-10-03"
---

Again per stolen notes...

Today we worked more on completions.

<div class = "subthm-box" type = "setting">
    Recall from the last lecture that a DVF $(K, \nu)$ is also a non-Archimedean valued field $(K, \norm \cdot)$. In other words: $$\mm = \{\nu > 0\} = \{\norm\cdot < 1\} \overset{\text{max}}\lhd A = \{\nu \geq 0\} = \{\norm\cdot \leq 1\} \overset{\text{DVR}}\subset K.$$

    Take the completion $\hat K$ of $K$.
    
    The topological closure $\hat{A}$ of $A$ with neighborhood base $\pi^nA$ is also a DVR such that:
    $$\hat\mm = \\{\hat\nu > 0\\} = \\{\norm\cdot < 1\\} \overset{\text{max}}\lhd \hat A = \\{\hat\nu \geq 0\\} = \\{\norm\cdot \leq 1\\} \overset{\text{DVR}}\subset \hat K.$$

    Observe that intersection with $K$ 'undoes' the completion, e.g. $A \cap \hat \mm = \mm$.
</div>

We'll get a nice characterization of $\hat{A}$.

<div class = "subthm-box" type = "lemma">
    For all $n \geq 1$, $A/\mm^n \cong \hat{A} / \hat \mm^n$ under $a + \mm^n \mapsto a + \hat \mm^n$
</div>

<div class = "subthm-box" type = "cor">
    $$\hat{A} \overset\sim\to \varprojlim \hat{A}/\mm^n \overset{\text{homeo}}\cong \varprojlim A/\mm^n.$$
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    Injectivity follows because $\mm^n = \{a \in A: \norm a \leq \sigma^n\} = \{a \in \hat{A} : \norm a \leq \sigma^n\} \cap A$.

    Surjectivity follows because for any $a \in \hat{A}$, $(a + \hat\mm^n) \cap A$ is an open neighborhood of $a$ in $A$ so by definition nonempty. If we pick $a'$ in this intersection, then $a' + \mm^n \mapsto a + \hat \mm^n$.
</div>

<div class = "subthm-box" type = "proof" name = "cor">
    The second isomorphism is obvious given the lemma.

    We show the canonical mapping $\hat A \to \varprojlim \hat{A} / \hat{\mm}^n$ is an isomorphism.
    
    It is injective since it has kernel $\cap \mm^n = 0$.
    
    For surjectivity, recall that $\varprojlim \hat A / \hat \mm^n = \\{(x_n) \in \prod_1^\infty \hat{A} / \hat \mm^n : x_{n+1} \mod \pi^n = x_n\\}$. In other words, any element is a sequence of sums $$(a_0 + ?\pi, a_0 + a_1\pi^1 + ?\pi^2, \ldots, a_0 + a_1\pi^1 + \cdots + a_n\pi^n + ?\pi^{n+1}, \ldots), \quad (\text{$a_i$ fixed.})$$ These sums clearly converge to $\sum_0^\infty a_i \pi^i$ in $\hat{A}$ which will map to the original element in the projective limit.
</div>

Now, we turn our attention to local fields.

<div class = "subthm-box" type = "def" name = "local field">
    A <u>local field</u> is a valued field $(K, \norm \cdot)$ that is also locally compact (every point has an open neighborhood whose closure is compact).
</div>

In our setting, locally compact implies complete. The reason for this is as follows:

<div class = "subthm-box" type = "rmk">
    Though every locally compact metrizable space is not complete, every metrizable locally compact group is complete.

    <i>The intuition here is that Cauchy sequences will converge in compact subsets but the ability to pick a suitable compact subset containing the whole sequence (after some point) requires some extra structure.</i>
    
    To make things easier, I also assume the group is abelian. By local compactness, there is some $B_r(0)$ with $\ol{B_r(0)}$ compact. And there is $N$ so $d(x_{n \geq N}, x_{m \geq N}) < r$, i.e. $(x_n \geq N) \subset B_r(x_N) = x_N + B_r(0)$ which is compact so $(x_N)$ converges.

    Alternatively, a locally compact subgroup is closed so $K$ is closed in $\hat K$, but then Cauchy sequences (which converge in $\hat K$ by definition) must also converge to something in $K$ so $K$ is complete.
</div>

<div class = "subthm-box" type = "ex">
    $(\R, \norm \cdot)$ and $(\C, \norm \cdot)$ are the only Archimedean local fields.
</div>

Thus, we again turn our attention to the non-Archimedean case:

<div class = "subthm-box" type = "prop">
    Say $(K, \norm \cdot)$ is a non-Archimedean valued field. Then it is a local field if and only if it is complete and its residue field $(A / \mm)$ is finite.
</div>

<div class = "subthm-box" type = "proof">
    $\implies):$ We just showed that locally compact implies complete.
    
    Since $(\pi^nA)$ form a fundamental system of closed neighborhoods around $0$, and $K$ is locally compact, some $\pi^N A$ will be a subset of a compact neighborhood of $0$, so will be compact. By topological fields, $\pi^{-N} \cdot -$ is continuous so $\pi^{-N} \cdot \pi^N A = A$ is compact also. Quotients are continuous so $k = A / \mm$ is also compact. And since it is discrete, it must be finite.

    $\impliedby):$ It is enough to show $A = \\{x \in K: \norm x \leq 1\\}$ is compact as this is itself a neighborhood of $0$.
    
    By completeness $\hat A = A$ so with our above corollary $A = \hat {A} \overset\sim\to \varprojlim A/\mm^n$. From $\mm^i / \mm^{i+1} \cong k$ and the SES: $$1 \to \mm^i/\mm^{i+1} \inj A/\mm^{i+1} \sur A/\mm^i \to 1,$$ $|A/\mm^n| = |k|^n$ so is finite and thus compact. So $A$ is compact by Tychonoff's theorem.
</div>

Here's something useful for these local fields.

<div class = "subthm-box" type = "rmk">
    For a local non-Archimedean field $(K, \norm\cdot)$, there is a canonical choice for $\norm\cdot$ within its equivalence class such that $\vol(x \cdot A) = \norm x \vol(A)$ for all $x \in K^\times$ where $\vol$ is the Haar measure.
</div>

For instance:

<div class = "subthm-box" type = "ex">
    Fix $K = \Q_p$ and $A = \Z_p$. 

    Since $\Z_p = \coprod_{0 \leq i \leq p-1} (i + p\Z_p)$, $\vol(\Z_p) = p \cdot \vol (p\Z_p) = p \cdot \norm p _p \cdot \vol(\Z_p)$ so $\norm p _p = \frac{1}{p}$.
</div>

And a fact before we go.

<div class = "subthm-box" type ="fact">
    The non-Archimedean local fields are either:
    $$\begin{cases}\text{a finite extension of } \Q_p &\char = 0, \\ \F_{p^n}((t)) &\char = p > 0.\end{cases}$$
</div>