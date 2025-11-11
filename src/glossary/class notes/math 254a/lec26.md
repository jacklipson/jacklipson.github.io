---
layout: layouts/classnote.njk
title: math 254a - lec 26
class: math 254a
lec_date: "2025-10-27"
---

Today, we examine differents and discriminants under localization and completion.

<div class = "subthm-box" type = "setting">
    Consider a multiplicative set $S \subseteq A$ and $B \subseteq S\inv B \subseteq L$ over $A \subseteq S\inv A \subseteq K$ for $A, B$ DD.
</div>

<div class = "subthm-box" type = "prop">
    1. $\D_{S\inv B / S\inv A} = S\inv D_{B/A}$.

    2. $\dd_{S\inv B / S\inv A} = S\inv \dd_{B/A}$.
</div>

<div class = "subthm-box" type = "proof">
    1. Recall $\D_{B/A} = (B^*)\inv$. So it suffices to show $S\inv B^* = (S\inv B)^*$. If $x = s\inv y \in S\inv B^*$, then $\Tr(x) = s\inv \Tr(y) \in S\inv A$ so $S\inv B^* \subset (S\inv B)^*$. 
    
    Conversely, if $(b_i)_1^n$ generate $B$ as an $A$-module and $x \in (S\inv B)^\*$, then $\Tr(x b\_i) \in S\inv A$ so $\Tr (x b\_i) = s\inv a\_i$ for $a\_i \in A$. Thus $sx \in B^*$ so $x \in S\inv B^*$.
    
    2. $\dd\_{B/A} = N\_{L/K} (\D\_{B/A})$ so $$\dd\_{S\inv B / S\inv A} = N\_{L/K} (\D\_{S\inv B / S\inv A}) = N\_{L/K} (S\inv \D\_{B/A}) = S\inv N\_{L/K}(D\_{B/A}) = S\inv \dd\_{B/A}.$$
</div>

Now we figure out completion:

<div class = "subthm-box" type = "setting 2">
    COnsider $\qq \lhd B \subseteq L$ over $\pp \lhd A \subseteq K$ and complete to get $\hat B_\qq \subseteq L_\qq$ over CDVR $\hat A = \hat A_\pp$ in CDVF $K_\pp$.

    Recall $\hat B = B \otimes_A \hat A \cong \prod_{\rr | \pp} \hat B_\rr$ via $\Tr_{L/K} \otimes \id \mapsfrom \sum_{\rr | \pp} \Tr_{L_\rr / K_\pp}$.

    And this is contained in $\hat L = L \otimes_K K_\pp \cong \prod_{\rr | \pp} L_r$ under $N_{L/K} \otimes \mapsfrom \prod_{\rr | \pp} N_{L_\rr / K_\pp}$.
</div>

<div class = "subthm-box" type = "prop">
    1. $\D_{B/A} \cong \prod_{\rr | \pp} \D_{\hat B_\rr / \hat A}$ as ideals of $\hat B$.

    2. $\D_{B/A} \cdot \hat B_\qq = \D_{\hat B_\qq / \hat A}$ as ideals of $\hat B_ \qq$.

    3. $\dd_{B/A} \otimes_A \hat A = \prod_{\rr | \pp} \dd_{\hat B_\rr / \hat A}$.
</div>

<div class = "subthm-box" type = "proof">
    $1. \implies 3.):$ Take the norm of $\D_{B/A} \otimes_A \hat A \cong \prod_{\rr | \pp} \D_{\hat B_\rr / \hat A}$.

    $1. \implies 2.):$ Simply project 1 via $\hat B \sur \hat B_\qq$.

    Now we prove 1. We assume $A$ is a DVR so $B = \oplus_1^n Ae_i$. Hence $B^\* = \oplus A e_j^\*$ so $\Tr_{L/K} (e_i e_j^\*) = \delta_{ij}$.
    
    Similarly, $\hat B = \oplus \hat A e_i$ so $\hat B^\* = \oplus \hat A e_j^\* = B^\* \otimes_A \hat A = \prod_{\rr | \pp} \hat B_\rr^*$ where this last step follows from $\Tr_{L/K} = \sum_{\rr | \pp} \Tr(L_\rr / K_\pp)$.
    
    Taking inverses shows $\D_{B/A} \otimes_A \hat A \cong \prod_{\rr | \pp} D_{B_\rr / K_\pp}$.
</div>

We start discussing how this connects to ramification. That is, consider $\qq \lhd B \subseteq L$ over $\pp \lhd A \subseteq K$ in our usual setting.

<div class = "thm-box">
    1. $\qq \nmid \D_{B/A}$ if and only if $\qq$ is unramified in $L/K$.

    2. $\qq \nmid \dd_{B/A}$ if and only if $\pp$ is unramified in $L/K$ (i.e. $\qq | \pp$ is unramified).
</div>

<div class = "subthm-box" type = "proof">
    $1. \implies 2.):$ $\pp \nmid \dd_{B/A} = N_{K/K}(\D_{B/A})$ if and only if for all $\qq | \pp$, $\qq \nmid \D_{B/A}$ if and only if each $\qq | \pp$ is unramified.

    Now we prove 1. We may assume $A, B$ are CDVRs. $\ell = B/\pp B = B/\qq^e B$ is unramified iff $e = 1$ iff $\ell$ is a field and moreover a finite separable extension of $k = A/ \pp$.

    To continue, recall the following fact:

    <div class = "subthm-box" type = "fact">
        Say $\ell$ is a finite-dimensional $k$-\algebra. TFAE:

        1. $\ell/k$ is a product of finite separable field extensions.

        2. $\Tr: \ell \times \ell \to k$ is perfect.

        3. For every $k$-basis $(e_i)$ for $\ell$, $\det (\Tr(e_i, e_j)) \neq 0$.
    </div>

    Take a basis $(e_i)$ for $B$ over $A$ and write $B = \oplus Ae_i$ so $B/pB = \oplus k \ol e_i$.
    
    We know $\pp \nmid \dd_{B/A}$ if and only if $\dd_{B/A} = (\det \Tr_{L/K}(e_i, e_j)) \neq 0 \mod \pp$ if and only if $\det \Tr_{\ell / k}(\ol e_i, \ol e_j) \mod \pp$ if and only if (per our fact) $\ell / k$ is a finite separable field extension, where we are ignoring the "product of" portion since $\ell$ is local.
</div>