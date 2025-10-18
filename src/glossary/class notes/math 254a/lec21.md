---
layout: layouts/classnote.njk
title: math 254a - lec 21
class: math 254a
lec_date: "2025-10-15"
---

Today we asked when it is possible to uniquely recover a CDVR from its residue field.

<div class = "subthm-box" type = "setting">
    Put $\mm \lhd A = CDVR \subseteq K = \Frac A$ where $\char \; K = 0$. and $k \coloneq A / \mm$ is characteristic $p$ and perfect.
</div>

Here is the question we want to answer:

<div class = "subthm-box" type = "question">
    Can we recover (reconstruct) $A$ from $k$?
</div>

<div class = "subthm-box" type = "answer">
    Obiously not as stated. There are too many totally ramified extensions (e.g. think of all the CDVRs with residue field $\F_p$).
</div>

Here is our adjustment:

<div class = "subthm-box" type = "def" name = "absolutely ramified">
    $A$ is <u>absolutely ramified</u> if $\nu (p) = 1$.

    That is to say, $\mm = (p)$ so $p$ is a uniformizer.
</div>

<div class = "subthm-box" type = "answer 2">
    Yes, if $A$ is absolutely ramified.
</div>

Here is the prototypical example of what we mean:

<div class = "subthm-box" type = "ex">
    $$\{\text{finite unramified extensions of $\Q_p$}\} \longrightarrow \{\text{finite extensions of $\F_p$}\}.$$

    From HW, we know that there is a unique degree $n$ unramified extension $L_n$ of $\Q_p$. In particular:
    \begin{align*}
        L_n = &\Q_{p^n}& \hspace{-30px} \overset{\text{res. field}}\longrightarrow \hspace{15px} &\F_{p^n}& \\\\
        \small\text{unram. deg $n$} &\downarrow& &\downarrow& \hspace{-35px} \small\text{deg $n$} \\\\
        \Z_p \subset &\Q_p& \hspace{-30px} \overset{\text{res. field}}\longrightarrow \hspace{15px} &\F_{p}&
    \end{align*}
</div>

One recipe for resolving the question, as stated, is via Witt vectors.

But we can do something more general.

<div class = "subthm-box" type = "def" name = "string p-ring">
    $A$ is a <u>strict $p$-ring</u> if it is $$(i) \; \text{$p$-adically complete, i.e. $A \overset{\text{canonical}}\longrightarrow \varprojlim A/p^nA$ is an isomorphism}, \quad (ii) \; \text{$p$-torsion free, i.e. $A \to A$ via $a \mapsto pa$ is injective}.$$
</div>

Clearly, $\\{\text{absolutely unramified CDVRs}\\} \subset \\{\text{strict $p$-rings}\\}$.

This is a proper inclusion via the following example:

<div class = "subthm-box" type = "ex" name = "exotic">
    Take $S = \Z[x^{p^{-\infty}}] = \bigcup_{i \geq 0} \Z[x^{p^{-i}}]$ with the obvious algebra structure so exponents in $\frac{1}{p^\infty}\Z_{\geq 0}$ are permitted.

    To make $S$ p-adically complete, we take $\hat S \coloneq \varprojlim S/p^nS$.

    Note that $S/p^n S = \Z/p^n \Z \otimes_\Z \Z[x^{p^{-\infty}}]$ so $\varprojlim S / p^n S = \Z_p \otimes_\Z \Z\langle x^{p^{-\infty}}\rangle = \Z_p \langle x^p{^{-\infty}} \rangle$.
    
    In other words, $\hat s$ is all sums $\sum a_i x^i$ with $i \in \frac{1}{p^\infty}\Z_{\geq 0}$ such that $\nu(a_i) \to 0$ for $a_i \in \Z_p$.

    Moreover, $p \cdot \sum_{i \in \frac{1}{p^\infty}\Z_{\geq 0}} a_ix^i$ is obviously injective so $\hat S$ is a strict $p$-ring.

    Also observe that $\hat{S} / p \hat{S} \overset{\text{canon.}}= S / pS = \F_p [x^{p^{-\infty}}] = \varinjlim_{\Fr} \F_p[x]$.
</div

This motivates our mentioning a fact:

<div class = "subthm-box" type = "fact">
    There are 2 types of perfection for a ring of characterstic $p$ which has $\Fr: R \to R$ via $x \mapsto x^p$: $$\varprojlim_\Fr R \quad \text{ and } \quad \varinjlim_\Fr R.$$
</div>

Also note that if we used $S = \Z[x_i^{p^-\infty}]$ for some index set $I$ instead, $\hat{S}$ would remain a strict $p$-ring.

Now, our theorem:

<div class = "thm-box">
    We have the following equivalence of categories:
    \begin{align*}
        &(\text{CDVRs $A$ such that $A/pA$ is a perfect ring})& \hspace{-25px} \overset\sim\longrightarrow \quad &(\text{perfect fields of characteristic $p$})& \\\\
        &\quad \quad \quad \quad \quad \quad \quad \quad \quad \cap& &\quad \quad \quad \quad \quad \quad \quad \cap& \\\\
        &(\text{strict $p$-rings $A$ such that $A/pA$ is a perfect ring})& \hspace{-25px} \overset\sim\longrightarrow \quad &(\text{perfect rings of characteristic $p$})& \\\\
        &\quad \quad \quad \quad \quad \quad \quad \quad \quad A& \mapsto \hspace{20px} &\quad \quad \quad \quad \quad \quad \quad A/pA&
    \end{align*}
</div>

Recall that an equivalence of categories requires: $$(1) \text{ fully faithful, i.e. $\Hom(A,B) \overset{\text{bij.}} \longrightarrow \Hom(A/pA, B/pB)$}, \quad (2) \text{ essentially surjective, i.e. a backwards functor}.$$

To show this first claim, it is enough to show that for some $\ol \phi: A/pA \to B/pB$, there is some unique (injective) $\phi:A \to B$ which desceneds (surjective).

We (basically by the same proof) generalize everything we did in the last lecture to strict $p$-rings:

<div class = "subthm-box" type = "fact">
    Say $A$ is a strict $p$-ring with $k = A/pA$ perfect. Then:

    (i) There is a unique Teichmüller lift [\cdot]: k \to A satisfying: $[\lambda] \mod p = \lambda, \\; [\lambda^p] = [\lambda]^p, \\; [\lambda \mu] = [\lambda][\mu]$.

    (ii) Given $a \in A$, there is unique $(s_n) \subset k$ so $a = \sum_{n \geq 0} [s_n]p^n$.

    <i>The proof uses the same $[\lambda] = \lim (\text{lift of } \lambda^{p^{-n}})^{p^n}$.</i>
</div>

<div class = "subthm-box" type = "proof" name = "thm">
    Given $\ol \phi$, take $\phi(\sum [s_n] p^n) \coloneq \sum [\ol \phi (s_n)]^{p^n}$.

    Clearly, $$\phi(\sum [s_n]^ {p^n} \cdot \sum [t_n] ^{p^n}) = \phi (\sum \sum_{0 \leq i \leq n} [s_it_{n-i}]^{p^n}) \overset{\ol \phi \text{ hom.}}= \sum [\sum_{0 \leq i \leq n}\ol \phi(s_nt_{n_i})]^{p^n}.$$ 
    
    And by $\char \\; k = p$, this equals $$\sum \sum_{0 \leq i \leq n} [\ol \phi(s_nt_{n-i})^{p^n}] =  \sum [\ol \phi (s_n)]^{p^n} \cdot \sum [\ol \phi (t_n)]^{p^n} = \phi (\sum [s_n]p^n) \cdot \phi (\sum [t_n]p^n).$$

    $\phi(\sum [s_n]^{p_n} + \sum [t_n]^{p_n}) = \phi(\sum [s_n]^{p^n}) + \phi(\sum [t_n]^{p^n})$ is obvious so $\phi$ is a homomorphism.

    It's also clear this is a lift of $\ol \phi$ because $$\phi (\sum [s_n]^{p^n}) \mod p = \sum \ol \phi (s_n) p^n \mod p = \ol \phi (s_0) = \ol \phi (\sum [s_n]p^n \mod p) = \phi(\sum [s_n]p^n \mod p).$$
    
    For uniqueness of $\phi$, recall all elements look like such a sum and $p$ maps to $p$ in $A \to B$ and any homomorphism must satisfy $\phi[s] = [\ol \phi(s)]$ for $s \in k$. If we show this fixes $\phi$, we win.

    But, $\phi[s] = \phi[s^{p^{-n}}]^{p^n} = (\phi[s^{p^{-n}}])^{p^n} = (\phi[s]^{p^{-n}})^{p^n} = (\text{lift of $\ol \phi [s]^{p^{-n}}$})^{p^n} \to \ol \phi(s)$.
</div>