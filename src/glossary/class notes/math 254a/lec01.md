---
layout: layouts/classnote.njk
title: math 254a - lec 01
class: math 254a
lec_date: "2025-08-27"
---

Today was the first class of (algebraic) number theory.

The entire class content is on bCourses; the instructor Sug-woo Shin can be reached at sug.woo.shin@berkeley.edu.

Below is a little introduction to algebraic number theory.

<div class = "subthm-box" type = "introduction">
    This is the standard generalization made in algebraic number theory:

    \begin{align*}
        &\Z &\longleftrightarrow \quad &\OO_K \quad \text{ring of integers} \\\\
        &\Q &\longleftrightarrow \quad &K \quad \text{finite field extension} \\\\
        &n \in \N &\longleftrightarrow \quad &a \lhd \OO_K \quad \text{ideal} \\\\
        &p \quad \text{prime} &\longleftrightarrow \quad &\pp \lhd \OO_K \quad \text{prime ideal} \\\\
        &r \in \Q^\times &\longleftrightarrow \quad &\text{fractional ideal}
    \end{align*}

    We also have the geometric analogue (something something "scheme"):

    \begin{align*}
        &k[x] \text{ or } \P^1_k &\longleftrightarrow \quad &\text{(smooth projective) curve over $k$} \\\\
        &k(x) &\longleftrightarrow \quad &K(X) \quad \text{fraction field} \\\\
        &\text{(monic) polynomials} &\longleftrightarrow \quad &\text{effective divisors} \\\\
        &\text{irreducible (monic) polynomials} &\longleftrightarrow \quad &\text{(closed) points} \\\\
        &\text{rational functions} &\longleftrightarrow \quad &\text{rational functions or divisors}
    \end{align*}

    And the local analogue of each:

    \begin{align*}
        &\Z \subset \Q &\longleftrightarrow \quad &\Z_p \subset \Q_p \\\\
        &x \in X &\longleftrightarrow \quad &\OO_{X,x} \subset \text{Frac }\OO_{X,x} \quad \text{completed local ring}
    \end{align*}

    Moving on, class field theory has the goal of "classifying" (in a way we are yet to see) all abelian \begin{cases} \text{extensions (Galois exentions with abelian group) of $K$ for a finite field K} \\\ \text{coverings of $X$} \end{cases}

This generalizes to Langlands program in a few cases referred to as 'Weil's Rosetta Stone': \begin{cases} \begin{rcases*} \text{ring of integers case}, \\\ \text{$k(x)$ case with $k$ finite} \end{rcases*} \quad &\text{“arithmetic Langlands,"} \\\ \text{$k(x)$ case with $k = \C$} \quad &\text{“geometric Langlands."}\end{cases}
</div>

Now, we cover today's topic: discrete valuation rings (DVRs).

<div class = "subthm-box" type = "def" name = "discrete valuation">
    If $K$ is a field, a <u>discrete valuation</u> on $K$ is a group homomorphism $\nu: K^\times \sur \Z$ such that $$\nu(x+y) \geq \min\{\nu(x),\nu(y)\}.$$

    Note $\nu$ is surjective and satisfies $\nu(xy) = \nu(x) + \nu(y)$.

    A convention puts $\nu: K \to \Z \cup \\{+\infty\\}$ with $\nu(0) = +\infty$ but unfortunately this means $\nu$ is not a homomorphism.
</div>

<div class = "subthm-box" type = "def" name = "valuation ring">
    $A_\nu = \{x \in K: \nu(x) \geq 0\}$ is a <u>valuation ring of $\nu$</u>.
</div>

<div class = "subthm-box" type = "rmk">
    Observe $\nu(1) = 0$ so $1 \in A_v$. In fact, $A_v$ is a subring since if $x, y \in K$, then: $$\nu(x+y) \geq \text{min} \\{\overset{\geq 0}{\nu(x)}, \overset{\geq 0}{\nu(y)}\\} \geq 0 \quad \text{and} \quad \nu(xy) = \overset{\geq 0}{\nu(x)} + \overset{\geq 0}{\nu(y)} \geq 0.$$
</div>

Here are some examples of discrete valuations.

<div class = "subthm-box" type = "ex">
    Let $K = \Q$. Fix a prime $p$. Any nonzero element can be represented uniquely as $p^n \frac{r}{s}$ for $r,s \in \Z - 0$ with $r,s$ coprime to $p$ and $n \in \Z$. 
    
    Put $\nu_p(p^n \frac{r}{s}) = n$.

    First note $\nu_p$ is a homomorphism since $$\nu_p(p^{n_1} \frac{r_1}{s_1} \cdot p^{n_2} \frac{r_2}{s_2}) = n_1+n_2 = \nu_p(p^{n_1} \frac{r_1}{s_1}) + \nu_p(p^{n_2} \frac{r_2}{s_2})$$ where this holds because $r_1r_2, s_1s_2$ stay coprime to $p$. It's obvious that $\nu$ is surjective.

    Next, if $n \leq m$ WLOG: $$\nu_p (p^n \frac{a}{b} + p^m \frac{c}{d}) = \nu_p (p^{n} (\frac{a}{b} + p^{m-n} \frac{c}{d})) = \nu_p (p^n \frac{ad + p^{m-n}c}{bd}) \geq n,$$ because clearly $p \not \mid bd$. So $\nu_p$ forms a discrete valuation.

    Lastly, $A_{\nu_p} = \\{p^n\frac{r}{s}: r, s \in \Z - 0 \quad \text{coprime to $p$}, \\; n \geq 0\\}$.
</div>

<div class = "subthm-box" type = "ex">
    Let $K = k(t)$ for a field $k$. Fix any $x \in k$. Given any $p(t) \in K$, we can uniquely write $p(t) = (t-x)^n\frac{g(t)}{h(t)}$ such that $g(x), h(x) \neq 0$. $n \in \Z$ is the vanishing order of $f(t)$ at $t = x$.
    
    Put $\nu_x(p(t)) = n$.

    For the same reasons as above, $\nu_x$ is a group homomorphism and surjective.

    Next, if $n \leq m$ WLOG: $$\nu_x \left((t-x)^n \frac{a(t)}{b(t)} + (t-x)^m \frac{c(t)}{d(t)}\right) = \nu_x \left((t-x)^n \left(\frac{ad(t) + (t-x)^{m-n}bc(t)}{bd(t)}\right)\right) \geq n,$$ because clearly $bd(x) \neq 0$. So $\nu_x$ forms a discrete valuation.

    Lastly, $A_{\nu_x} = \\{(t-x)^n\frac{a(t)}{b(t)}: a(t), b(t) \in k(t) - 0, \\; a(x), b(x) \neq 0, \\; n \geq 0\\}$.
</div>

We can modify the last example as follows:

<div class = "subthm-box" type = "ex">
    For $p(t) = \frac{g(t)}{h(t)} \in K - 0$, put $\nu_\infty(p(t)) = \deg h - \deg g$.

    Clearly, $\nu_\infty$ is surjective and a group homomorphism: $$\nu_\infty (\frac{g_1g_2}{h_1h_2}) = \deg h_1 + \deg h_2 - \deg g_1 - \deg g_2 = \nu_\infty (\frac{g_1}{h_1}) + \nu_\infty (\frac{g_2}{h_2}).$$

    Next, assuming $\frac{a}{b} \neq - \frac{c}{d}$: $$\nu_\infty (\frac{a}{b} + \frac{c}{d}) = \deg bd - \deg (ad  + bc) = - \max \\{b - a, d - c\\} \geq \min \\{\nu_\infty(\frac{a}{b}), \nu_\infty(\frac{c}{d})\\}.$$
    
    So $\nu_x$ forms a discrete valuation.

    Lastly, $A_{\nu_\infty} = \\{\frac{g(t)}{h(t)}: h(t), g(t) \neq 0, \\; \deg h \geq \deg g\\}$.
</div>

Now, a proposition from commutative algebra (see: Atiyah-MacDonald if more curious):

<div class = "subthm-box" type = "prop">
    Say $A$ is an integral domain. The following are equivalent:
    <ol style="list-style: none">
        <li>(1) $A$ is a principal ideal domain with unique nonzero maximal ideal $\mm$. </li>
        <li>(2) $A$ is a valuation ring of some discrete valuation $\nu$ on $K = \text{Frac}(A)$.</li>
    </ol>
</div>

For the proof, I am including a small lemma.

<div class = "subthm-box" type = "lemma" name = "jack">
    Every principal ideal domain (PID) is a unique factorization domain (UFD).

    Recall a PID means: <i>an integral domain in which every ideal is principal</i>.

    Recall a UFD means: <i>an integral domain in which every nonzero non-invertible element can be uniquely written as a product of units and irreducible elements (which cannot be written as a product of two nonzero non-invertible elements) up to changing the units and rearranging</i>.
</div>

<div class = "subthm-box" type = "proof" name = "lemma">
    Say $A$ is a PID.
    
    First, $A$ is Noetherian because if $I_1 \subset I_2 \subset \cdots$ forms a chain of ideals, then $I_\infty = \cup I_i$ is an ideal, and by PID, is $(a)$ for some $a \in A$. But, $a \in I_j$ for some $j \in \N$. Hence $I_{>j} = I_j$ so it satisfies the ascending chain condition.

    Next, we show every irreducible $a \in A$ is prime. Say $a = bc$. Then there is some 'gcd' $d$ such that $(d) = (a,b)$. But then $d \mid a$.
    
    If $d$ is a unit, then $(d) = (1) = (a,b)$ so $ax + by = 1$ for some $x,y \in A$. This gives $axc + byc = a(xc + y)  = c$ so $a | c$ but then $bc | c$ so $b | 1$ so $b$ is a unit.
    
    Since $a$ is irreducible, the only other option is that $d = au$ for a unit $u$. Therefore, $(a) = (d) = (a,b)$ so $a | b$ so $bc | b$ making $c$ a unit.

    In either case, $a$ is prime.

    Now, we show any nonzero, nonunit $a \in A$ is expressible as a product or irreducibles.

    Take the poset of ideals genereated by each element of $A$ that cannot be written as a product of irreducibles. If the set is empty, we are done. Else, it has a maximal element $(m)$ by $A$ Noetherian. $m$ is not irreducible so not prime so $(m)$ is not maximal. Hence, there is some maximal $(n) \supsetneq (m)$. $n$ is a product of irreducibles since $(m)$ is maximal in our set so we get an irreducible $k | n$ from which $k | m$. Thus, $m = k\ell$ for some $\ell \in R$. $(\ell)$ must be in our poset by assumption that $m$ is not a product of irreducibles. But then $(m) \subset (\ell)$ and since $a$ is not a unit, $(m) \subset\neq (\ell)$ making $(m)$ not maximal – contradiction.

    Finally, we show the factorization is unique.

    Suppose some nonzero, nonunit $a$ can be written $p_1 \cdots p_r$ and $q_1 \cdots q_s$ with $p_i, q_j$ irreducible in $A$ and $s \geq r$. Thus $p_1 | q_1 \cdots q_s$. Because all irreducibles in a PID are prime, $p_1$ is prime so $p_1 \mid q_j$ for some $j$ and we can say $p_1 \mid q_1$ WLOG. But $q_1$ is prime too so $q_1 = p_1 u_1$ for a unit $u_1$. Thus, $$p_1 \cdots p_r = q_1 \cdots q_s \implies 1 = u_1 \cdots u_r q_{r+1} \cdots q_s.$$ Any $q_{>r}$ are therefore units, which is impossible, so $r = s$ and the factorization of $a$ is unique up to units and reordering.
</div>

<div class = "subthm-box" type = "proof" name = "prop">
    $(1) \implies (2):$ We need to build a valuation $\nu$. 
    
    Because $A$ is a PID, 1) $\mm = (\pi)$ for some $\pi$ and 2) by the lemma, $A$ is a $UFD$.
    
    $\mm$ is the unique maximal ideal so $A - \mm = A^\times$. Thus, any units in the denominator of an element in $K^\times$ can be moved to the numerator, leaving a power of $\pi$ behind. 
    
    Thus, given some $a \in K^\times$, $a = \pi^n u$ for $n \in \Z$ and $u \in A^\times$ – this is clearly unique. 
    
    Let $\nu(a) = n$.

    $A_\nu = \\{\pi^n u: n \in \Z_{\geq 0}\\} = (\pi) \cup A^\times = A$ obviously.
    
    The verification that $\nu$ is a discrete valuation is exactly the same as what we did for $\nu_p$.

    $(2) \implies (1):$ Say $A = A_\nu$.
    
    We show $\mm = A - A^\times$ is an ideal. Say $x, y \in \mm$. 
    
    If $xy = u$ for a unit $u$, then $xyu\inv = 1$ so $x,y$ are units – contradiction.

    <i>Observe $\nu[A^\times] = 0$ since $\nu(1) = 0$ so $\nu(x\inv) = -\nu(x)$ so $\nu(x) \geq 0$ means $\nu(x) = 0$.</i>
    
    Now, if $x + y = u$ for a unit $u$, then $$0 = \nu(u) = \nu(x+y) \geq \min \\{\nu(x), \nu(y)\\} \implies \nu(x) \leq 0 \quad \text{WLOG}.$$

    But, if $\nu(x) <0$, then $x \notin A_\nu = A$ – contradiction. So $\nu(x) = 0$. So $x$ is nonzero, meaning $x\inv \in K$ but $\nu(x\inv) = -\nu(x) = 0$ so $x\inv \in A_\nu = A$ too. Thus $x \in A^\times$ – contradiction.
    
    So $\mm$ is an ideal. It is clearly maximal (since adding a new element entails adding a unit) and thus unique.

    $\mm$ is nonzero because $\nu$ is surjective.

    <i>I am adding this next part for completion, but it was not included in lecture.</i>

    Lastly, we have to show $A$ is a PID. 

    Observe that whenever $\nu(x) = \nu(y)$, $\nu(xy\inv) = 0$ so $xy\inv \in A^\times$ implying $(x) = (y)$. 
    
    For any ideal $a \neq 0$, there is a least integer $k \geq 0$ for which $\nu(x) = k$ for some $x \in a$. $\nu$ is surjective so any natural number $n$ can be obtained by some $y_n \in A$; $\nu(xy_n) = k + n$ means that $a = \\{y \in A: \nu(y) \geq k\\}$. If we call such an ideal $\mm_k$, we get a chain $$(1) \supset \mm = \mm_1 \supset \mm_2 \supset \cdots$$ It's clear that $\nu(\pi) = 1$ for some $\pi \in \mm$ and that $\nu(\pi^k) = k$ so $(\pi^k) = \mm_k$ implying every ideal is principal.
</div>

<div class = "subthm-box" type = "def" name = "discrete valuation ring (DVR)">
    If a ring satisfies the above proposition, we call it a <u>discrete valuation ring (DVR)</u>.
</div>

<div class = "subthm-box" type = "def" name = "uniformizer">
    Any element $\pi \in A$ with $\nu(\pi) = 1$ is called a <u>uniformizer</u>.

    Note $\nu(\pi) = 1 \iff \mm = (\pi)$.
</div>