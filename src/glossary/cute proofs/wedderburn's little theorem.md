---
layout: layouts/proof.njk
title: wedderburn's little theorem
publish_date: "2025-08-19"
---

<b>wedderburn's little theorem</b> says the following:

<div class = "thm-box" name = "wedderburn's little theorem">
    every finite division ring is a field.
</div>

for reference, here is the definition of a division ring:

<div class = "subthm-box" type = "def" name = "division ring">
    a <u>division ring</u> is a nontrivial ring with multiplicaitive inverses for nonzero elements.
</div>

observe a division ring has no zero divisors so is a domain.

<i>(the converse also holds in the finite case since left and right multiplication are obviously injective so (by finite) surjective. this gives inverses for nonzero elements.)</i>

notably, division rings differ from fields in that they may not be commutative (e.g. the quaternions). this theorem is significant then because it says that any finite division ring <i>is</i> commutative and therefore a field!

<div class = "subthm-box" type = "rmk">
    wedderburn's little theorem has been proven in several ways by many people starting in the early 20th century.

    i will use ernst witt's proof.

    a little jarringly, wikipedia says that ted kaczynski's first published paper was a short two-page proof of this fact....
</div>

witt's proof will require this little bit of group theory and number theory:

<div class = "thm-box" name = "class equation">
    for a finite group $G$, pick conjugacy class representatives $x_1, \ldots, x_n$. it holds that: $$|G| = \sum_i [G: \zz(x_i)]$$ where $\zz(x_i)$ is the centralizer of $x_i$.

    moreover, if we drop any $x_i$ that live in the center $\zz(G)$: $$|G| = |\zz(G)| + \sum_i [G: \zz(x_i)].$$
</div>

<div class = "subthm-box" type = "proof" name = "class equation">
    applying the orbit stabilizer theorem where the group is acting on itself via conjugation gives: $|G \cdot x_i| = |[G: \zz(x_i)]|$. each orbit is disjoint so we simply add these up for each $x_i$ to get $|G|$. 
</div>

now the number theory part:

<div class = "subthm-box" type = "def" name = "cyclotomic polynomial">
    the <u>$n$-th cyclotomic polynomial</u> is $$\Phi_n(x) = \prod_{1 \leq k \leq n, \; (k,n)= 1} (x-e^{2\pi i k/n}).$$

    essentially, $\Phi_n$ is the product of $x$ minus each primitive $n$-th root of unity.
</div>

<div class = "subthm-box" type = "lemma">
    $x^n - 1$ is the product of $x$ minus each $n$-th root of unity. for each non-primitive root of unity, it must be a $m$-th root of unity with $m | n$. hence: $$x^n - 1 = \prod_{d | n} \prod_{1 \leq k \leq n, \; (k,n) = d} (x - e^{2\pi i \frac{k/d}{n/d}}) = \prod_{d | n} \Phi_{n/d}(x).$$

    therefore, if $k | n$, then $$\frac{x^n - 1}{x^k - 1} = \frac{\prod_{d|n} \Phi_{n/d}(x)}{\prod_{e|k} \Phi_{k/e}(x)} = \Phi_n(x) \cdot \prod_{e | n, \\; e \nmid k, \\; e \neq n} \Phi_e(x).$$

    in other words, $\Phi_n(x)$ is a factor of the fraction of these polynomials as long as $k|n$.
</div>

now the proof!

<div class = "subthm-box" type = "proof" name = "witt">
    say $D$ is our finite division ring. 
    
    consider the canon map $\Z \to D$.
    
    since the image of $\Z$ is a commutative subring in $D$ (so without zero divisors), its image is an integral domain. hence, $0$ is prime in that image so will pull back to a prime kernel $p\Z$ (with $p \neq 0$ since $D$ is finite).

    the image of $\Z$ in $D$ is a copy of $\Z/p\Z$.

    note that:
    <ol>
        <li>the center $\zz(D)$ of $D$ is a finite-dimensional vector space over $\Z/p\Z$</li>

        <li>the center $\zz(D)$ of $D$ is commutative so a finite field. so both $D$ and the centralizer of any element $\zz(x)$ are finite-dimensional vector spaces over $\zz(D)$.</li>
    </ol> 

    say $|\zz(D)| = p^k$, $|D| = p^{kn}$ and $|\zz(x) = p^{k\kappa(x)}|$ for some positive natural number $\kappa(x)$ which divides $n$ (by Lagrange's theorem). 

    observe the multiplicative group of $\zz(D), \zz(x), D$ will include every element besides $0$.

    the class equation now implies: $$p^{kn} - 1 = |D|^\times = |\zz(D)| + \sum_i |\zz(x_i)| = p^k - 1 + \sum \frac{p^{kn} - 1}{p^{k\kappa(x_i)} - 1},$$ 
    
    where of course each $x_i$ is a representative not in the center.

    since $\kappa(x_i) | n$, our lemma tells us that $\Phi_n(p^k)$ is a factor of both the left hand side and the summation on the right hand side. so $\Phi_n(p^k) | p^k - 1$.

    it follows that $|\Phi_n(p^k)| \leq p^k - 1$.

    if $n \geq 2$ then one of the $e^{2\pi i \tilde{j}/n} \neq 1$ in: $$|\Phi_n(p^k)| = \prod_{1 \leq j \leq n, \\; (j,n) = 1} |p^k - e^{2\pi i j/n}|.$$

    because $p$ is prime so at least 2, the closest point on the unit circle to $p^k -1$ is $1$. therefore, we can lower bound again by $|p^k - 1|^{\phi(n)}$. and since $|p^k - 1| \geq 1$ because $p \geq 2$ again, we can <i>strictly</i> lower bound $\Phi_n(p^k)$ by $|p^k-1|$ – contradiction.

    ergo, $n = 1$!

    but that means that $\zz(D) = D$ so $D$ is commutative and thus a field.
</div>