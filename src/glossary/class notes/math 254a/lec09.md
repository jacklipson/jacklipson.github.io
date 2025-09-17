---
layout: layouts/classnote.njk
title: math 254a - lec 09
class: math 254a
lec_date: "2025-09-17"
---

Today we kept talking about lifted primes.

Here's a flurry of definitions (continuing the notation from last lecture):

<div class = "subthm-box" type = "def" name = "ramification index">
    $e_{\qq/\pp}$ is the <u>ramification index</u> of $\qq/\pp$.
</div>

<div class = "subthm-box" type = "def" name = "inertia(l) degree">
    $f_{\qq/\pp} \coloneq [K_\qq: K_\pp]$ is the <u>inertia(l) degree</u> of $\qq/\pp$ where $K_\qq = B / \qq, K_\pp = A_\pp$ are residue fields.
    
    This quantity is always finite because $B$ is a finitely-generated $A$-module. Alternatively, we prove the  stronger result (later today) that $\sum e f = n$ so $f$ is bounded anyways!
</div>

<div class = "subthm-box" type = "def" name = "unramified (upstairs)">
    $\qq$ is <u>unramified</u> in $L/K$ if both $K_\qq/K_\pp$ is separable (though this holds in most examples) and $e_{\qq / \_pp} = 1$.

    If the index is greater than 1, $L/K$ is <u>ramified</u> at $\qq$.
</div>

And downstairs:

<div class = "subthm-box" type = "def" name = "unramified (downstairs)">
    $\pp$ is <u>unramified</u> in $L/K$ if $\qq$ is unramified in $L/K$ for every $\qq$ dividing $\pp$.
</div>

<div class = "subthm-box" type = "def" name = "splits completely">
    $\pp$ <u>splits completely</u> in $L$ (in $B$) if for all $\qq | \pp$, $e_{\qq / \pp} = f_{\qq / \pp} = 1$.
</div>

<div class = "subthm-box" type = "def" name = "inert">
    $\pp$ is <u>inert</u> in $L$ if $\pp$ is unramified and there is a unique $\qq | \pp$.
</div>

Let's work through an example:

<div class = "subthm-box" type = "ex">
    Fix $A = \Z, K = \Q, L = \Q(i), B = \Z[i]$.

    We walk through a few primes.

    $(2)$ will lift to $(1+i)(1-i)$. But, because $(1+i) \cdot (-i) = 1-i$, and $-i$ is a unit, these are the same ideal so really $(2) = (1+i)^2$ where $(1+i)$ is obviously prime because quotienting gives back $\Z$. (Remember this decomposition is unique). So $L/K$ is ramified at $(2)$.

    In contrast, consider $\Z[i]/(3) = \Z/(3)[i]$. If $(a+bi)(c+di) = 0$, then $ac = bd$ and $ad = -bc$. If $a = 0$, then (because $b = 0$ is trivial) $c = 0$ but then one of $b,d$ is $\pm 1$ and the other $\mp 3$ so trivial. Supposing, then, that $a,c \neq 0$, we get $d = -\frac{bc}{a}$ so $ac = -\frac{b^2c}{a}$, i.e. $a^2 = -b^2$. But $1^2 = 2^2 = 1 \mod 3$ so $a = b = 0$; contradiction. So $(3)$ is prime in $\Z[i]$ and cannot be further decomposed. Because there is only one prime above $(3)$, it is inert.

    Lastly, $(5) = (2+i)^1(2-i)^1$. If these were the same ideal, then $(2+i)a = (2-i)$ and $(2-i)b = 2+i$ so $(2-i)ab = (2-i)$ implying $ab = 1$ so $(2+i), (2-i)$ would have to differ by multiplication by a unit – but the only units in $\Z[i]$ are $\pm 1, \pm i$. So our decomposition is unique. Now because $\Z[i]/(2 \pm i) = \Z/(5)$ (since $\Z[x]/(x^2+1)(x-2)$ just implies $4 = x^2 = -1$ so $5 = 0$), and $[\Z/(5): \Z/(5)]$, $f_{(2\pm i)/(5)} = 1$ implying $(5)$ splits completely in $B$.
</div>

Now, a proposition:

<div class = "subthm-box" type = "prop">
    Put $n = [L:K]$. We show the following:
    
    1. $B/\pp B \cong \prod_{\qq|\pp} B/\qq^{e_{\qq / \pp}}$.
    
    2. $\dim_{A/\pp} B/{\pp B} = n$.

    3. $\sum_{\qq | \pp} e_{\qq / \pp} f_{\qq / \pp} = n$.
</div>

<div class = "subthm-box" type = "proof">
    1. Use Chinese remainder theorem and the decomposition done in the previous lecture.

    2. Because $A/\pp \cong \kappa(\pp)$ and $B/\pp B \cong B \otimes_A A/\pp \cong B \otimes_A \kappa(\pp) \cong B_\pp / \pp B_\pp$, we can localize at $\pp$ so that $A$ becomes a DVR.

    If $A$ is a DVR, it is a PID. Now a lemma:

    <div class = "subthm-box" type = "lemma">
        If $B$ is a finitely-generated torsion-free (i.e. $0 \notin A^* \cdot B^*$) $A$-module and $A$ is a PID, then $B$ is a free finitely-generated $A$-module.
    </div>

    <div class = "subthm-box" type = "proof" name = "lemma">
        If $<x_1, \ldots, x_n>$ generate $B$, we can pick a maximally linearly indepdent subset (up to relabeling) $<x_1, \ldots, x_m>$. If $m = n$, we are done. Otherwise, $m < n$. Since $B$ is torsion-free, $m$ is at least 1 (i.e. $a b \neq 0$ for all $a \in A - 0$ so any nonzero $b$ is L.I.).

        For all $x_{i > m}$, there is some $a_i \in A - 0$ so $a_ix_i \in <x_1, \ldots, x_m>$ this is a maximally L.I. subset. Putting $\alpha = \Pi a_i$ (which is not zero because $A$ is an integral domain), we know $\alpha <x_1, \ldots, x_n>$ is free because it is a subset of $<x_1, \ldots, x_m>$. But, multiplication by $\alpha$ is an injection since $B$ is torsion-free. 
        
        But, any submodule of a free module is free only when $A$ is a PID. 
        
        We prove this is true also:

        <div class = "subthm-box" type = "lemma">
            If $A$ is a PID, $M$ is a free $A$-module, and $N$ is an $A$-submodule of $M$, then $N$ is also free.
        </div>

        <div class = "subthm-box" type = "proof">
            Write $M = \oplus_i A_i$ for all $i \in \mathcal{I}$. We can put a well-ordering on $\mathcal{I}$ so every nonempty subset has a minimal element.

            Take the projection $\phi_i: (\oplus_{j < i} A_j \oplus A_i) \cap N \to A_i$. $\im \phi_i$ is an ideal of $A$ so is generated by some $c_i$. We can pick $e_i \in \oplus_{j < i} A_j \cap N$ for every $c_i \neq 0$.

            We claim $\\{e_i: i \in \mathcal{I}\\}$ is a basis for $N$. If some finite sum (for distinct $j_i$) $\sum_1^n d_i e_{j_i} =  0$, then we can pick the largest $j_k$ (since any 2 are comparable in a well-ordering). Applying $\phi_k$ thus gives $0 = \phi_k(\sum d_i e_{j_i}) = d_k\phi_k(e_{j_k}) = d_k c_{j_k}$. Since $c_{j_k} = 0$ and $A$ is an ID, $d_k = 0$. We can repeat this until all coefficients are 0.

            To show this spans $N$, we can assume the opposite. Given the set of highest nonzero indices of elements in $N$ not in the span, we can find a minimal $i$ for which $x \in \oplus A_{j<i} \oplus A_i \cap N$ but $x$ is not a linear combination of $e_i$. If $c_i = 0$, then $\phi_i(x) = x_i = 0$ too so $x \in \oplus A_{j < i} \cap N$. But then we can find a minimal $k < i$ with $x \in \oplus A_{j < k} A_j \oplus A_k \cap N$, breaking minimality of $i$. Thus, $c_i \neq 0$.
            
            That means $\phi_i(x) = yc_i$ for some $y \in A$. Since $x$ cannot be written as a linear combination of $c_i$, neither can $x - yc_i$. However, $\phi_i(x-yc_i) = 0$ putting $x - yc_i \in \oplus A_{j < i} \cap N$. But this would break the minimality of $i$ so there is no $x$ and we have a basis for $N$.
        </div>
        
        So $<x_1, \ldots, x_n>$ must have been free to start with.
    </div>

    So $B$ is a free finitely-generated $A$-module!

    Because $B \cong A^{\dim_AB}$, $$K^n \cong L \overset{\text{mult}}{\widetilde{\longleftarrow}} B \otimes_A K \cong \oplus^{\dim_AB} (A \otimes_A K) \cong K^{\dim_AB} \implies \dim_AB = n.$$

    And therefore, $$B/\pp B \cong B \otimes_A A/\pp \cong (A^n) \otimes_A A/\pp \cong (A/\pp)^n \implies \dim_{A/\pp}B/\pp B = n.$$

    3. From parts 1 and 2, $$n = \dim_{A/\pp} B/\pp B = \dim_{A/\pp} \Pi_{\qq | \pp} B/{\qq^{e_{\qq / \pp}}} = \sum \dim_{A/\pp} B/{\qq^{e_{\qq / \pp}}}.$$ So it is enough to show $\dim_{A/\pp} B/{\qq^{e_{\qq/\pp}}} = e_{\qq/\pp} f_{\qq/\pp}$. Thus, we can drop the subscripts on $e,f$.

    Recall $f = \dim_{A/\pp}B/\qq$.

    Next, we can put an $A/\pp$-filtration on $B/\qq^e$ (i.e. $A/\pp \cdot \qq^n/\qq^e \subset \qq^{n+1}/\qq^e$ but this seems fishy to me...): $$B/\qq^e \supset \qq/\qq^e \supset \cdots \supset \qq^{e-1}/\qq^e \supset 0.$$ Hence, $B/\qq^e \cong \oplus_0^{e-1} \qq^n/ \qq^{n+1}$.

    For the same reasons as at the start of 2, $B$ is effectively a DVR, so we can pick a uniformizer $\pi$ for $\qq$. Under the multiplication map, $(\pi^n)/(\pi^{n+1}) \overset{-\cdot \pi}\to (\pi^{n+1})/(\pi^{n+2})$ is an isomorphism.

    Therefore, $\dim_{A/\pp}B/\qq^e = e \dim_{A/\pp} (B/\qq) = ef$. So we win.
</div>

Now that we have a good handle on primes in $B$ sitting over primes in $A$, and we know $B$ is a DD, it would be nice to know how valuations $\nu = \nu_\pp$ relate to valuations $w = \nu_\qq$.

As assigned on this week's HW (though I also proved it in <u><a href = "../lec01">lecture 01</a></u>), we will use the fact: $$\\{\text{primes of $A$}\\} \longleftrightarrow \\{\text{discrete valuations $\nu$ on $K$ so $\nu \geq 0$ on $A$}\\}$$
This motivates a definition:

<div class = "subthm-box" type = "def" name = "extends with index e">
    $w$ on $L$ <u>extends</u> $\nu$ on $K$ <u>with index $e$</u> if $w|_K = e \cdot \nu$ for some $e \in \Z_{\geq 1}$.
</div>