---
layout: layouts/proof.njk
title: complex gelfand-mazur theorem
publish_date: "2025-08-18"
---

<b>gelfand-mazur's theorem</b> says any unital banach algebra over $\C$ with multiplicative inverses (for nonzero elements) is isometrically isomorphic to $\C$.

here is a refresher on banach algebras.

<div class = "subthm-box" type = "def" name="associative algebra">
    an <u>associaitve algebra</u> $A$ is a (possibly non-commutative nor unital) ring that is a module over a commutative ring (usually a field) $k$ such that $$c(xy) = (cx)y  = x(cy) \quad \text{for} \quad c \in k, \; x, y \in A.$$
</div>

<div class = "subthm-box" type = "def" name="banach space">
    a <u>banach space</u> $(A,||\cdot||)$ is a complete vector space with respect to the metric induced by its norm $||\cdot||$.
</div>

<div class = "subthm-box" type = "def" name="non-archimedean metric">
    a metric $d$ is <u>non-archimedean</u> if the triangle inequality is strengthened to $$d(x,z) \leq \max \{d(x,y), d(y,z)\}.$$
</div>

<div class = "subthm-box" type = "def" name="banach algebra">
    a <u>banach algebra</u> $A$ is an associative algebra over $\R$ or $\C$ or a non-archimedean complete normed field (i.e. $\Q_p$) such that: $$||xy|| \leq ||x|| \; ||y||.$$

    this submultiplactivity of the norm forces continuity of the algebra multiplication.
</div>

now gelfand-mazur:

<div class = "thm-box" name = "gelfand-mazur">
    a complex banach algebra with unit and multiplicative inverses (for any non-zero element) is isometrically isomorphic to $\C$.
</div>

before we dive in, we need a definition (which you may recognize from, say, quantum mechanics, but is different from many of the other "spectrums" in math!):

<div class = "subthm-box" type = "def" name = "spectrum">
    the <u>spectrum</u> $\sigma(T)$ of an element $T$ in a unital algebra $A$ over a field $k$ is the set of all elements $\lambda \in k$ such that $(T - \lambda I_A)\inv \notin A$ (or does not exist at all).
</div>

this definition is motivated by the case where $T$ is an (un)bounded linear operator on a banach space.

of course, if $A$ is finite-dimensional, the spectrum is precisely the set of eigenvalues of $T$. in the infinite-dimensional case, however, my functional analysis HW showed how this breaks down:

<div class = "subthm-box" type = "ex">
    consider $T \in \mathcal{B}(\ell^2(\N_{>0}))$ with $(T(\xi))(n) = n\inv\xi(n)$. clearly, $\{\frac{1}{n}\}_{n \in \N_{>0}}$ describes the eigenvalues of $T$.
    
    however, the inverse of $T - 0I = T$ is obviously unbounded because: $$||T\inv(1, \frac{1}{2}, \frac{1}{3}, \ldots)||_2 = \sqrt{\sum_1^\infty 1} \not \leq M||(1, \frac{1}{2}, \ldots)||_2 = M\sqrt{\frac{\pi^2}{6}} \quad \text{for any $M$}.$$ hence 0 is included in the spectrum but is not an eigenvalue.
    
    (it is in the closure however... 😉)
</div>

this next proposition will elucidate the spectrum a bit:

<div class = "subthm-box" type = "prop">
    $\sigma(a)$ in a complex unital banach algebra $A$ is a non-empty, compact subset of $\C.$
</div>

<div class = "subthm-box" type = "proof" name = "compact">    
    if $|\lambda| > ||a||$, then $(\lambda \neq 0)$ so $||\lambda \inv a|| <1$ so $$||\sum_0^\infty (\lambda \inv a)^n || \leq \sum_0^\infty ||\lambda \inv a||^n = \frac{1}{1 - ||\lambda\inv a||} < \infty.$$
    
    by the completeness of banach algebras, this element exists in $A$ and is actually the inverse for $1_A - \lambda\inv a$.
    
    hence, $a - \lambda 1_A = -\lambda(1_A - \lambda\inv a)$ so $\lambda \notin \sigma(a)$!

    in other words, the spectrum of $a$ is contained within the ball of radius $||a||$ ergo bounded in $\C$.

    to finish compactness, we need that the spectrum is also closed in $\C$, i.e. that $\\{\lambda: a - \lambda 1_A \text{ has an inverse in $A$}\\}$ is open in $\C$.

    however, this set is the preimage of all the invertible elements in $A$ under the continuous map from $\C \to A$ mapping $\lambda \mapsto a - \lambda 1_A$. now, we just need to show the group of invertible elements in $A$ is open.
    
    in particular, if $x$ is invertible in $A$, then pick $y \in B_{||x\inv||\inv}(x)$. it holds that $$||1 - x\inv y|| \leq ||x\inv||\; ||x - y|| < ||x \inv|| ||x \inv|| \inv = 1.$$ so, by the some logic as earlier, $1_A - (1_A - x\inv y) = x\inv y$ is invertible in $A$. but $x \in A$ so $y \in A$ and we have an open ball around $x$ only containing invertible elements. therefore, $\sigma(a)$ is compact.
</div>

<div class = "subthm-box" type = "proof" name = "non-empty">
    say $\sigma(a) = \0$. then, $\lambda \mapsto (a - \lambda 1_A)\inv$ is well-defined.

    since it is continuous on the compact disk $B_{||a||}(0) \subset \C$, it is bounded here. outside this, $||\lambda\inv a|| < 1$ as before so 
    
    $$||(a - \lambda 1_A)\inv|| = |\lambda\inv| \\; ||(1_A - \lambda\inv a)\inv|| \leq \frac{|\lambda\inv|}{1 - ||\lambda \inv a||} = \frac{1}{\lambda - ||a||} \overset{\lambda \to \infty}\to 0.$$

    hence, this function is bounded on $\C$ and clearly entire (as a banach-algebra valued function) since $$(a - \lambda 1_A)\inv = a \inv \sum_0^\infty a^{-n} \lambda^n.$$

    it follows by liouville's theorem that this function is constant and, by the behavior at $\lambda \to \infty$ above, it is exactly $0_A$. but $0_A$ is not invertible.
    
    so $\sigma(a) \neq \0$.
</div>

we are finally ready to prove our theorem when $A$ is a division algebra!

it's surprisingly easy from here:

<div class = "subthm-box" type = "proof" name = "gelfand-mazur">
    pick $a \in A$. from our proposition, there is some $\lambda_a \in \sigma(a)$. so $a - \lambda_a 1_A$ is not invertible, but then $a - \lambda_a 1_A = 0$ since all non-zero elements of $A$ are invertible.

    so $a = \lambda_a 1_A$. this choice is unique. so our map is obviously injective, surjective, and an algebra homomorphism. 
    
    and since $|\lambda_a| \mapsto ||a|| = |\lambda_a| ||1_A||$, this map is an isometry scaling by $||1_A||$.
</div>

it is possible to generalize this to <i>real</i> normed division algebras which i do <u><a href = "../real gelfand-mazur theorem">here<a></u>.