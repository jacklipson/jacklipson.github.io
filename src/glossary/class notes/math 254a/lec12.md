---
layout: layouts/classnote.njk
title: math 254a - lec 12
class: math 254a
lec_date: "2025-09-24"
---

Today we talked about Galois extensions.

My knowledge of Galois theory stops at applications to knots so I'm including all the definitions...

<div class = "subthm-box" type = "def" name = "algebraic / transcendental">
    A field extension $L/K$ is <u>algebraic</u> if any element $y \in L$ is a root of a non-zero polynomial in $K[x]$.

    If some element does not have such a polynomial, then that element (and the extension) is <u>transcendental</u>.
</div>

<div class = "subthm-box" type = "def" name = "normal">
    An algebraic field extension $L/K$ is <u>normal</u> if any irreducible polynomial in $K[x]$ with a root in $L$ splits into linear factors in $L[x]$.
</div>

This is reminiscent of another important definition:

<div class = "subthm-box" type = "def" name = "splitting field">
    The <u>splitting field</u> of a polynomiakl $p(x) \in K[x]$ is a smallest field extension $L/K$ such that $p(x) = c \prod_1^{\deg p} (x - \alpha_i)$ with $c \in K$ and not necessarily distinct $a_i$ such that the $a_i$ actually generate $L$ over $K$.

    By smallest, we mean that $p$ will not split over any proper subfield.

    It turns out all splitting fields are unique up to isomorphism.
</div>

<div class = "subthm-box" type = "def" name = "separable">
    An algebraic field extension $L/K$ is <u>separable</u> if the minimal polynomial over $K$ of any $y \in L$ has no repeated roots in an algebraic closure $\ol{K}$, i.e. its formal derivative is nonzero.

    This is because the derivative of $f(x) = c \prod_1^n (x-\alpha_i)$ is $f'(x) = c \sum_j \prod_{i \neq j} (x-\alpha_i)$ so $f'(\alpha_k) = \prod_{i \neq k} (x - \alpha_k)$, meaning a root of $f$ is repeated if and only if it is also a root of $f'$.

    It turns out that every algebraic extension of a characteristic zero or finite field is separable.
</div>

<div class = "subthm-box" type = "def" name = "Galois">
    An algebraic field extension $L/K$ is <u>Galois</u> if it is normal and separable.
</div>

For some intuition, it holds that an extension is Galois if there is a bijection between subfields of $L$ over $K$ and subgroups of $\text{Aut}(L/K)$.

<div class = "subthm-box" type = "rmk">
    Alternatively one can say an extension is Galois if the field fixed by $\Aut(L/K)$ is precisely $K$ (this comes up later!!!) or if $[L:K] = |\Aut(L/K)|$.

    Consider the field extension tower $L / L^G / K$. If we show $[L:L^G] = [L:K]$, $[L^G:K] = 1$ so $L^G = K$ and we are done.

    Obviously, $[L:K] \geq [L:L^G]$ so it suffices to show $[L: K] \leq [L:L^G]$. By definition, $\Aut(L/L^G) = G$ so (blackboxing) $[L:K] = |G| = |\Aut(L/L^G)| \leq [L:L^G]$.
</div>

Finally, we state our setting:

<div class = "subthm-box" type = "setting">
    Fix a Dedekin domain $A$ with fraction field $K$ and degree-$n$ Galois extension $L$. Take the integral closure $B$ of $A$ in $L$.

    Consider the primes $\qq_1, \ldots, \qq_r \lhd B$ over $\pp \lhd A$.
</div>

<div class = "subthm-box" type = "def" name = "Galois group">
    $G = \Gal(L/K) \coloneq \{\sigma: \underset{\text{field auto}}{L \; \overset{\sim}\to \; L}: \sigma\vert_K = \id_K\}$ is the <u>Galois group</u> of the Galois extension $L/K$.
</div>

We show that $G$ acts on $B$ (that is, each automorphism of $G$ maps $B$ to itself).

<div class = "subthm-box" type = "rmk">
    If $b \in B$, then $b$ is the root of some monic polynomial in $A[x]$, i.e. $b^n + a_{n-1}b^{n-1} + \cdots + a_0 = 0$.

    Because $\sigma\vert_K = \id_K$, $\sigma(a_i) = a_i$ so under $\sigma$ this equation becomes, $$\sigma(b)^n + a_{n-1} \sigma(b)^{n-1} + \cdots a_0 = \sigma (b^n + a_{n-1}b^{n-1} + \cdots + a_0) = 0 \implies \sigma(b) \in B.$$
</div>

$G$ also acts on the primes dividing a prime $\pp \lhd A$, i.e. $\{\qq_1, \ldots, \qq_r\}$.

<div class = "subthm-box" type = "rmk">
    If $\qq_i | \pp$, then $\qq_i \cap A = \pp$ so $\pp = \sigma(\pp) = \sigma (\qq_i) \cap A$ because $\sigma$ fixes $K$. Hence, $\sigma (\qq_i) | \pp$ too.
</div>

We can say something stronger!

<div class = "subthm-box" type = "prop">
    1. The $G$-action is transitive on primes.

    2. $e_{\qq_1 / \pp} = \cdots = e_{\qq_r / \pp} = e_\pp$ are all equal, as are $f_{\qq_1 / \pp} = \cdots = f_{\qq_r / \pp} = f_{\pp}$. 
</div>

<div class = "subthm-box" type = "proof">
    1. If this was false, then without loss of generality $\sigma(\qq_1) \neq \qq_r$ for all $\sigma \in G$.

    So by the approximation lemma, we can pick $x \in \qq_1, \notin \qq_2, \ldots, \qq_r$.

    For all $\sigma \in G$, $\sigma(x) \notin \qq_r$ so $N_{L/K}(x) = \prod_{\sigma \in G} \sigma(x) \notin \qq_r$ but also $N_{L/K}(x) \in \qq_1$ and (from lecture 04) in $A$ so $N_{L/K}(x) \in \qq_1 \cap A = \pp \subseteq \qq_r$ - contradiction.

    2. Applying $\sigma$ to $\pp B = \prod_1^r \qq_i^{e_i}$ gives $\pp B = \prod_1^r [\sigma(\qq_i)]^{e_i}$ (since $\sigma (\pp B) = \\{\sigma (\pp x) : x \in B\\} = \\{\pp \sigma(x) : x \in B\\} = \\{\pp x : x \in B\\} = \pp B$). Because $G$'s action is transitive, we can permute the $q_i$ however we want under $\sigma$, so by unique factorization, the $e_i$ are all equal.

    Similarly, $\kappa_{\qq_i} = B/\qq_i \cong B/\sigma(\qq_i) = \kappa_{\sigma(\qq_i)}$ under $\ol{\sigma}$ as $\kappa_\pp = A/\pp$-vector spaces so $f_i = [\kappa_{q_i} : \kappa_\pp] = [\kappa_{\sigma(q_i)} : \kappa_\pp] = f_{\sigma(i)}$ implying, again by transitivity, that all the $f_i$ are equal.
</div>

<div class = "subthm-box" type = "cor">
    Writing $g_{\pp} = r$ implies $n = e_{\pp}f_{\pp}g_{\pp}$.
</div>

With this understanding of Galois extensions out of the way, we change topics a little bit:

<div class = "subthm-box" type = "def" name = "decomposition group">
    If $\qq | \pp$, the <u>decomposition group at</u> $\qq$ is $D_\qq = D_\qq(L/K) = \{\sigma \in G: \sigma(\qq) = \qq\}$ (i.e. the $G$-stabilizer of $\qq$).
</div>

<div class = "subthm-box" type = "rmk">
    For $\tau \in G$, $D_{\tau \qq} = \tau\inv D_\qq \tau$ because $$\sigma (\tau \qq) = \tau \qq \iff (\tau \inv \sigma \tau) \qq = \qq.$$

    By orbit-stabilizer, $|G / D_\qq| = g_\pp$ so $G/D_\qq$ is in bijection with the primes above $\pp$ under $\ol\sigma \mapsto \ol\sigma(\qq)$.
 
    Since $|G| = e_\pp f_\pp g_\pp$, $|D_\qq| = e_\pp f_\pp$.
</div>

<div class = "subthm-box" type = "cor">
    Given the last remark:

    1. $D_\qq = G$ if and only if there is a unique prime $\qq$ dividing $\pp$ ($g_\pp = 1$).

    2. $D_\qq = 1$ if and only if $\pp$ splits completely ($e_\pp = f_\pp = 1$).
</div>

<div class = "subthm-box" type = "warning">
    In general, $D_\qq$ is not a normal subgroup of $G$.
</div>

Notice we have $D_\qq \to \Gal(\kappa_\qq / \kappa_\pp)$ under $\sigma \mapsto \ol{\sigma}$ because $\sigma (A) = A$ and $\sigma(\qq) = \qq$ so $\ol \sigma: B/\qq \to A/\pp$ makes sense.

<div class = "subthm-box" type = "prop">
    1. $\kappa_\qq / \kappa_\pp$ is a normal extension.

    2. The above map $\sigma \mapsto \ol \sigma$ is onto.
</div>

<div class = "subthm-box" type = "proof">
    1. Fix $\ol b \in \kappa_\qq = B/\qq$. Recall that we want to show that any nonzero irreducible monic $\ol{f} \in \kappa_\pp[x]$ with root $\ol{b}$ splits into linear factors in $\kappa_\qq[x]$.

    Take $f(x) = \prod_{\sigma \in G} (x - \sigma(b))$. $f$ is fixed under $G$-action so all of its coefficients are also fixed (i.e. in $K$). But, $\sigma(b)$ also stays integral over $A$ as we showed earlier so the coefficients of $f$ are actually in $B$ too. But $B \cap K  = A$ so $f \in A[x]$.

    It suffices (for some algebra reason) to have produced $\ol{f}(x) = f \mod \pp = \prod (x- \ol\sigma (\ol b)) \in \kappa_\pp[x], \kappa_\qq[x]$.

    2. Notice we have the tower of fields $\kappa_\qq \overset{\text{purely insep.}}{---} \kappa_\qq^{\text{sep}} --- \kappa_\pp$.
    
    Every finite separable field extension is simple (i.e. genereated by a single element) so $\kappa_\qq^{\text{sep}} = \kappa_\pp(\ol{b})$.
    
    By approximation lemma, we can pick $b \in B$ so $b \mod \qq = \ol{b}$ and $b \in \qq'$ for every $\qq' | \pp$ not equal to $\qq$.

    Hence, $f(x) = \prod_G (x - \sigma(b)) \in A[x]$ implies $\ol{f} = \prod_{D_\qq} (x-\ol{\sigma(b)}) \cdot \prod_{G - D_\qq} x \in \kappa_\pp[x]$.

    The nonzero roots of $\ol f$ are all of the form $\ol {\sigma (b)}$ for $\sigma \in D_\qq$.

    This gives the bijection, under $\ol \tau \mapsto \ol{\tau(b)}$: $$\Gal(\kappa_\qq^{\text{sep}} / \kappa_\pp) \overset{\text{bij.}}\longleftrightarrow \\{\text{conjugations of $\ol b$ over $\kappa_\pp$}\\} \subset \\{\ol{\sigma(b)}: \sigma \in D_\qq\\},$$

    where this last inclusion holds because if $\sigma \notin D_\qq$, some non-$\qq$ prime $\qq' | \pp$ is permuted to $\qq$ under the automorphism $\sigma$ so $\sigma(b \in \qq') \in \qq$.

    Thus, given any $\ol \tau \in \Gal(\kappa_\qq / \kappa_\pp)$, we can get some $\sigma \in D_\qq$ so $\ol {\sigma(b)} = \ol{\tau(b)}$ implying $\ol \sigma = \ol \tau$ on $\kappa_\qq^{\text{sep}}$. In other words, $\ol \tau$ is in the image of $D_\qq$.
</div>

Now we can get a short exact sequence:

<div class = "subthm-box" type = "def" name = "intertial group">
    $I_\qq = \ker (\sigma \mapsto \ol \sigma)$ is the <u>inertial group</u> at $\qq$.

    This fills in the short exact sequence $$1 \to I_\qq \inj D_\qq \sur \Gal(\kappa_\qq / \kappa_\pp) \to 1.$$
</div>

<div class = "subthm-box" type = "rmk">
    If $\kappa_\qq / \kappa_\pp$ is separable, by our proposition it is Galois so we can write $$|\Gal(\kappa_\qq / \kappa_\pp)| = f_\pp \implies |I_\qq| = e_\pp.$$
</div>