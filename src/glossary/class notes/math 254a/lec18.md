---
layout: layouts/classnote.njk
title: math 254a - lec 18
class: math 254a
lec_date: "2025-10-08"
---

Today we consider the completion of our usual setting and realize that completions with respect to valuations from a DD $A$ are local extensions are related to the global extension $L/K$.

But first, another proof of the theorem from last time.

<div class = "subthm-box" type = "proof">
    Recall the theorem has an algebraic extension $L/K$ for $(K, \norm \cdot)$ a CVF.

    Also say $L/K$ is finite and separable.
    
    1. $\norm\cdot _K$ is in correspondence with a prime $\pp$ in $A$ (the CDVR in CVF $K$). If we take some $\qq | \pp$, then there is a discrete valuation $|\cdot|_L$ corresponding to $\qq$.
    
    By the fact from last time, it is unqiue up to equivalence (taking a power). But for us, this power is fixed by the fact it restricts to $\norm \cdot _K$.

    2. We can reduce to the case $L/K$ is finite and Galois.

    Observe that $\norm{x}_\sigma \coloneq \norm{\sigma(x)}_L$ is an extension of the norm on $K$, but must equal $\norm \cdot _L$ by uniquess.

    Thus, $$\norm{\overbrace{N\_{L/K}(x)}^{\in K}}\_K = \norm {N\_{L/K}(x)} \_L = \norm{\prod_\sigma \sigma(x)} \_L \overset{\text{norm mult.}}= \prod_\sigma \norm{\sigma(x)} \_L = \norm{x} \_L^n.$$
</div>

Onto greener pastures:

<div class = "subthm-box" type = "setting">
    Consider $w \longleftrightarrow \qq \lhd B \subset L$ as a finite separable extension over $\nu \longleftrightarrow \pp \lhd A \subset K$ for $A$ a DD and $\nu$ a discrete valuation.

    We can take completions to get:
    \begin{align*}
        \norm\cdot_{\hat w} \\; \longleftrightarrow \quad &\hat \qq_w& \hspace{-20px} \lhd \quad \hat B_w \\; \subset \quad &\hat L_w& \\\\
        & \\;\vert & & \\;\vert & \\\\
        \norm\cdot_{\hat v} \\; \longleftrightarrow \quad &\hat \pp_v& \hspace{-20px} \lhd \quad \hat A_v \\; \subset \quad &\hat K_v& \\\\
        & \vert \vert & & \hspace{2.5px} \vert \vert & \\\\
        &\hspace{-10px}\pp \hat A_v& &\hspace{-20px}\text{CDVF}&
    \end{align*}

    We can check that $\hat K_v$ is a CDVF and $\hat A_v$ a CDVR in that, if $\nu$ is the valuation on DVF $K$, which is a valued field under $\norm{x}_v = \sigma^{\nu(x)}$, then $\hat \nu \coloneq \lim \nu$ is also a valuation. In particular, it quite clearly surjects onto $\Z$ since $K \inj \hat K$ and satisfies $$\hat \nu (x_n+y_n) = \lim \nu(x_n + y_n) \geq \lim \min \\{\nu(x_n), \nu(y_n)\\} \overset{\Z-\text{valued seq.}}= \min \\{\lim \nu(x_n), \lim \nu(y_n)\\} = \min \\{\hat \nu (x_n), \hat \nu (y_n)\\}, \text{ and}$$ $$\hat \nu (x_n y_n) = \lim [\nu (x_n) + \nu (y_n)] = \lim \nu (x_n) + \lim \nu (y_n) = \hat \nu(x_n) + \hat \nu(y_n).$$

    Hence, $\hat \nu \inv \Z\_{\geq 0} = \hat {A}_\nu$ is a CDVR with maximal ideal $\pp \hat{A}\_\nu$.
</div>

It turns out much of our earlier work holds in the completion:

<div class = "subthm-box" type = "prop">
    1. $[\hat L_w : \hat K_\nu] = e_{w/\nu} f_{w / \nu}$.

    2. $L \otimes_K \hat K_v \to \prod_{w / v} \hat L_w$ under $x \otimes y \mapsto (xy)$ in each $w$-component is a $\hat{K}_\nu$-algebra isomorphism.

    Note that $e_{w/\nu} = e_{\qq / \pp}, f_{w / \nu} = f_{\qq / \pp}$.
</div>

<div class = "subthm-box" type = "proof">
    1. $[\hat L_w : \hat K_\nu] = e_{\hat w / \hat \nu} \cdot f_{\hat w / \hat \nu}$ per usual. But this equals $e_{w/\nu}f_{w/\nu} = e_{\qq / \pp}f_{\qq /\pp}$ because:
    \begin{align*}
        &B/\qq& \hspace{-10px}\overset{\sim}\to \quad &\hat B_w/ \hat\qq_w& \\\\
        &\uparrow& &\quad \uparrow& \\\\
        &A/\pp& \hspace{-10px}\overset\sim\to \quad &\hat A_\nu / \hat \pp_\nu&
    \end{align*}

    2. It is obviously an algebra homomorphism.
    
    We show surjectivity. The codomain is clearly a Hausdorff TVS. Since, $\prod_{w / \nu} \hat L_w$ is finite-dimensional over $\hat K_\nu$ and a normed vector space so is complete. Next, by the approximation lemma, $L$ has dense image in $\prod_{w / \nu} \hat L_w$. So the image is everything.

    As for injectivity, $$\dim_{\hat K_\nu} L \otimes \hat K_\nu = \dim_K L= [L:K] = \sum_{w / \nu} e_{w / \nu} f_{w / \nu} = \sum_{w / \nu} [\hat L_w : \hat K_\nu] = \dim_{\hat K_\nu} \prod_{w / \nu} \hat L_w.$$
</div>

Some corollaries before we go:

<div class = "subthm-box" type = "cor 1">
    In the same setting ($\hat L_w$ is an extension of $\hat K_\nu$ and $L$ where $\hat K_\nu$ is the completion of $K$ and $L$ is finite separable over $K$):

    1. $\hat L_w = \hat K_\nu \cdot L$.

    2. $\hat L_w / \hat K_\nu$ is separable.
</div>

<div class = "subthm-box" type = "proof">
    1. From part 2 of the proposition: $ L \otimes_K \hat K_\nu \overset\sim\to \prod \hat L_w \sur \hat L_w$.

    2. This follows from part 1.
</div>

<div class = "subthm-box" type = "cor 2">
    If $x \in L$, we have the multiplication maps $[x]: L \to L$ and $[x]\_w: \hat L\_w \to \hat L\_w$.

    Then (where $\char$ denotes the characteristic polynomial as a $K$-linear map): $$\char\_K[x] = \prod\_{w / \nu} \char\_{\hat K\_\nu} [x]\_w \implies \begin{cases} \Tr\_{L/K}(x) = \sum\_{w / \nu} \Tr\_{\hat L\_w / \hat K\_\nu}(x), \\\\ N\_{L/K} = \prod\_{w/\nu} N\_{\hat L\_w / \hat K\_\nu}.\end{cases}$$
</div>

<div class = "subthm-box" type = "proof">
    The following diagram commutes:
    \begin{align*}
        &L& \hspace{-30px}\overset{x \mapsto x \otimes 1}\longrightarrow \quad &L \otimes_K \hat K_\nu& \hspace{-30px} \overset{\sim, \text{ Prop.}}\longrightarrow \quad &\prod_{w/\nu} \hat L_w& \\\\
        &\small{[x]} \big\downarrow& &\big\downarrow \small{[x] \otimes \id}& &\big \downarrow \small{\prod_{w/\nu} [x]_w}& \\\\
        &L& \hspace{-30px}\longrightarrow \quad &L \otimes_K \hat K_\nu& \hspace{-30px} \overset{\sim, \text{ Prop.}}\longrightarrow \quad &\prod_{w/\nu} \hat L_w&
    \end{align*}

    Because the characteristic polynomial does not change through isomorphism or extension by scalars, $\char [x] = \prod_{w / \nu}\char[x]_w$.
</div>

<div class = "subthm-box" type = "cor 3">
    Say $L/K$ is a finite Galois extension. Then:

    1. $\hat L_w / \hat K_\nu$ is also Galois.

    2. $D_w = \{\sigma \in \Gal(L/K) : \sigma w = w\} \overset{\sim}\hookrightarrow \Aut(\hat L_w / \hat K_\nu)$ mapping $\sigma \to \hat \sigma$ is a canonical isomorphism (where $\hat \sigma$ acts term-by-term).
</div>

<div class = "subthm-box" type = "proof">
    The map in part 2 is well-defined because $\hat \sigma$ will send $w$-Cauchy sequences to $w$-Cauchy sequences since the Galois group preserves norms in the extension as we saw earlier.

    The injection is obvious.

    For surjectivity, we use a cardinality argument: $$e_{w/\nu} f_{w / \nu} = \norm{D_w} \leq \norm{\Aut (\hat L_w / \hat K_\nu)} \leq [\hat L_w : \hat K_\nu] = e_{w / \nu} f_{w / \nu}.$$

    Thus, all of the inequalities are equalities.

    The first inequality proves 2 and the second inequality proves 1.
</div>