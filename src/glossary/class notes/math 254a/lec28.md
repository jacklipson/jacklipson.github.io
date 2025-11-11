---
layout: layouts/classnote.njk
title: math 254a - lec 27
class: math 254a
lec_date: "2025-10-29"
---

Today we compute the different.

<div class = "subthm-box" type = "setting">
    Consider the $A$-subalgebra $C \coloneq A[\beta] \subseteq B \subseteq L$ sitting over $DD = A \subseteq K = \Frac A$ for $\beta \in B$.

    Recall $\D_{B/A} = (B^*)\inv \lhd B$.

    There is a nice-formula in the "monogenic" case, in which we have a separable polynomial $f \coloneq \text{irr}(\beta, K) \in A[x]$.

    Then $C = \oplus A \beta^i \overset{A-alg}\cong A[x]/(f)$ is a free $A$-module.
</div>

<div class = "thm-box">
    $$C^* = \frac{1}{f'(\beta)}C = \oplus \frac{\beta^i}{f'(\beta)} \cdot A.$$
</div>

<div class = "subthm-box" type = "cor">
    If $B = A[\beta] = C$, then $\D_{B/A} = (f'(\beta))$.
</div>

We can even show that $\D_{B/A} = (f'(\beta))$ if and only if $B = C$.

<div class = "subthm-box" type = "lemma 1">
    $$\Tr_{L/K}\left(\frac{\beta^i}{f'(\beta)}\right) = \begin{cases} 0 & 0 \leq i \leq n-2, \\ 1 & i = n-1.\end{cases}$$
</div>

<div class = "subthm-box" type = "proof" name = "lemma 1">
    Say $\beta = \beta_1, \ldots, \beta_n$ are the roots of $f$ in $\ol L \supseteq L$ (so $f = \prod (x- \beta_i)$ in $\ol L[x]$).

    We want to show $\sum_1^n \frac{\beta_k^i}{f'(\beta_k)} =  \begin{cases} 0 & 0 \leq i \leq n-2, \\ 1 & i = n-1.\end{cases}$

    We may assume $\beta_k \in L$.

    To carry on, we need yet another lemma:

    <div class = "subthm-box" type = "lemma 2">
        $$\sum_1^n \frac{f(x)}{f'(\beta_k) (x-\beta_k)} = 1.$$
    </div>

    <div class = "subthm-box" type = "proof" name = "lemma 2">
        Differenitating: $f'(x) = \sum_1^n \frac{f(x)}{(x-\beta_k)}$. Evaluating at $\beta_k$ gives $f'(\beta_k) = \frac{f(x)}{x- \beta_i}|_{x = \beta_i}$ (where this makes sense since we have no repeated roots because $f$ is assumed to be separable).

        Since the degree of $\sum_1^n \frac{f(x)}{f'(\beta_k)(x-\beta_k)} - 1$ is at most $n-1$ but has roots at $\beta_1, \ldots, \beta_n$, this polynomial is identically 0 and the equality holds.
    </div>

    Returning to lemma 1, $\sum_1^n \frac{\frac{f(x)}{x^n}}{f'(\beta_k) (1 - \frac{\beta_k}{x})} = \frac{1}{x^{n-1}}$. Setting $y = 1/x$, this becomes $\sum \frac{1 + a_{n-1}y + \cdots + a_0 y^n}{f'(\beta_k)(1 - \beta_ky)} = y^{n-1}$ in $L(y)$.

    So, in $L((y))$, this becomes $\sum \frac{1}{f'(\beta_k)} (1 + \beta_kj y + \beta_k^2y^2 + \cdots) = y^{n-1}(\frac{1}{1 + a_{n-1}y + \cdots + a_ny^n})$.

    Calculating out $(1 + a_{n-1}y + \cdots + a_0y^n)(1 + b_1y + b_2y^2 + \cdots) = 1$ lets us compare coefficients in degree $0, \ldots, n-1$ on LHS and RHS to see $\sum_k^{\beta_k^i}{f'(\beta_k)} = \begin{cases} 0 & 0 \leq i \leq n-2, \\ 1 & i = n-1 \end{cases}$.
</div>

Back to the theorem:

<div class = "subthm-box" type = "proof" name = "thm">
    $C^* = \oplus Ae_i^*$ where $e_i^*$ are characterized by $\delta_{ij} = \Tr_{L/K}(e_i^*e_j)$ for all $i,j$.

    Put $e_j' \frac{\beta^j}{f'(\beta)} = \frac{e_j}{f'(\beta)}$ so $e_i^* = \sum_0^{n-1} u_{uj} e_j'$.

    Observe that $\frac{1}{f'(\beta)}C = \oplus_0^{n-1} Ae_j'$ by definition so we win as loong as $u_{ij} \in A$ and $\det(u_{uj}) \in A^\times$.

    First, compute, $\delta_{ij} = \Tr_{L/K} (\sum_j u_{ij}e_j' e_k) = \sum_i u_{ij} \Tr_{L/K} (e_j' e_k) = \sum_i u_{ij} \Tr_{L/K} (\beta^{j+k}/f'(\beta))$.

    By lemma 1, it follows that  $u_{ij} = \begin{pmatrix} 0 & & 1 \\\\ & ⋰ & \\\\ 1 & & * \end{pmatrix}$ where this diagonal is at $j+k = n-1$ and $*$ is at $j + k > n -1$.
    
    So obviously $\det (u_{ij}) \in \{\pm 1\} \subseteq A^\times$. We are done if every entry in $*$ is in $A$, but $\Tr_{L/K} (\frac{\beta^{i > n-1}}{f'(\beta)}) \in \Tr_{L/K}(C) \subseteq A$!
</div>

Now, by [S] III.6, if $B - A$ are DVRs, then there is $\beta \in B$ so $B = A[\beta]$.

<div class = "subthm-box" type = "prop">
    Consider $\qq \lhd B \subseteq L$ a finite separable extension over $\pp \lhd A = CDVR \subseteq K$.

    Then $\nu_\qq (\D_{B/A}) \geq e_{L/K} - 1$ where equality holds iff $(\char k, e_{L/K}) = 1$, i.e. is "tamely ramified."
</div>

We skimmed this proof, but it's covered in [S] III.6 proposition 13.

<div class = "subthm-box" type = "proof">
    By the previous lecture, we can reduce to $L/K$ totally ramified. 
    
    Say $B = A[\pi]$ for $\pi$ a uniformizer of $B$.

    We know $\pi$ satifies an Eisenstein polynomial $f = X^e + a_1X^{e-1} + \cdots + a_e$ for $a_i \in \pp, e = [L:K]$.

    Applying today's corollary, $\D_{B/A} = (f'(\pi))$ where $f'(\pi) = e\pi^{e-1} + \sum_1^{e-1} (e-i)a_i \pi^{e-i-1}$.
    
    Since $w_\qq(\pi) = 1$ and $w_\qq(a_i) \geq e$ because $a_i \in \pp$, applying $w_\qq$ gives $w_\qq(f'\pi) \geq e - 1$ where equality holds if and only if $w_\qq(e) = 0$, i.e. if $e$ is prime to $[L:k] = \char k$.
</div>