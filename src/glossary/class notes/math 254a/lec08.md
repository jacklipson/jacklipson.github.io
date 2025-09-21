---
layout: layouts/classnote.njk
title: math 254a - lec 08
class: math 254a
lec_date: "2025-09-15"
---

It's my birthday lol.

We recall the setting: $A$ is a DD with fraction field $K$. $L/K$ is a finite <u>separable</u> field extension of degree $n = [L:K]$. $B$ is the integral closure of $A$ in $L$. 

Today, our goal is to show $B$ is also a DD.

To start:

<div class = "subthm-box" type = "prop">
    $B$ is finitely-generated as an $A$-module.
</div>

<div class = "subthm-box" type = "proof">
    We will proceed in four steps. <u><a href = "../lec08">Lecture 04</a></u> covers some definitions the reader may have forgot.

    1. Choose an arbitrary $K$-basis $(e_i')_1^n$ for $L$. We want to force this basis into $B$. Since we previously showed that $$L = B \cdot K = \left\\{\frac{\text{elements of $B$}}{\text{elements of $A$}}\right\\},$$ there is some $a_i \in A$ for which $e_i \coloneq a_i \cdot e_i' \in B$.

    It is clear $(e_i)_1^n$ still forms a $K$-basis for $L$. But now $M = \oplus_1^n A e_i \subset B$ is a free rank-$n$ $A$-submodule of $B$.

    2. Recall that the trace map $\Tr_{L/K}$ is an isomorphism from $L$ to $L^\vee$. If we take the (normal linear algebra) dual basis $e_i^\vee \in L^\vee$ for $e_i$, then we can pull back via the trace isomorphism to get back some $e_i^*$ for which $e_i^*e_j = \delta_{ij}$.

    We claim $M^* = \oplus_1^n A e_i^*$ is a free rank-$n$ $A$-submodule of $L$. But, clearly, this is just a basis after 2 isomorphisms, so still a basis.

    3. Notice that taking the dual lattice $*$ reverses inclusion because the larger set will impose strictly more conditions. Hence, $M \subset B$ implies $B^\* \subset M^\*$.

    From lecture 04's "refresher," we showed that the trace of any element in $B$ is in $A$. So obviously $\Tr(bb') \in A$ for all $b' \in B$, implying $b \in B^\*$ so $B \subset B^\* \subset M^\*$. 
    
    4. $M^\*$ is Noetherian because it is finitely-generated and Noetherian. Since $B$ is an $A$-submodule of $M^\*$, $B$ must also be a finitely-generated $A$-module and we are done.
</div>

It turns out this was a little overkill for what we needed! But still a nice fact.

Regardless, it is enough to prove today's proposition:

<div class = "subthm-box" type = "prop">
    $B$ is a Dedekind domain.
</div>

<div class = "subthm-box" type = "proof">
    We have to prove $B$ is Noetherian, integrally closed, every nonzero prime of $B$ is maximal, and (for our convention) $B$ is not a field.

    Noetherian: This follows from the last proposition because every finitely-generated module over a Noetherian ring is Noetherian.

    Integrally closed: Note that $L = B \cdot K \subseteq \Frac B \subseteq L$ so $L = \Frac B$. Now, any $x \in L$ integral over $B$ is integral over $A$ by transitivity so, by definition, in $B$, so we're done.

    Not a field: $A$ has a nonzero maximal prime because it is also a DD so not a field. Since $B$ is integral over $A$, we can apply the "going-up" theorem to get a nonzero prime in $B$.

    All nonzero primes are max: Given a chain $0 \subsetneq \pp \subsetneq \mm$ in $B$, we can intersect with $A$ to arrive at a contradiction since $A$ is a DD.
</div>

The rest of class discussed primes in $B$.

<div class = "subthm-box" type = "rmk">
    Fix a nonzero prime $\pp$ in $A$. We would like to lift this to a prime $\pp B$ in $B$, but it is not clear this is prime.

    Thus, we can take the decomposition $\pp B = \prod_{\qq \lhd B} \qq^{e_{\qq / \pp}}$.
    
    It is known that $e_{\qq / \pp} = \nu_\qq (\pp B) > 0$ for finitely many $\qq$.

    <i>Note, in situations like this, we say $\qq | \pp$ "$\qq$ divides $\pp$" or "$\qq$ is over $\pp$."</i>

    This happens if and only if $\pp B \subseteq \qq$ which happens if and only if $\pp \subseteq \qq$. 

    Since $\pp \lhd A$, it's clear this implies $\pp \subseteq \qq \cap A$ (and since, $\pp$ is maximal) $\pp = \qq \cap A$. The reverse implication holds trivially.

    So we have found a nice characterization of the lifted primes in $B$.
</div>