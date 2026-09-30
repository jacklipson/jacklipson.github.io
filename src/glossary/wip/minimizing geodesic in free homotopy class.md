---
layout: layouts/proof.njk
title: minimizing geodesic in free homotopy class
publish_date: "2026-09-29"
---

This was a non-HW exercise from my Riemannian Geometry class taught by John Lott in Spring 2026. The following question arose in the proof of Synge's theorem.

<div class = "subthm-box" type = "problem">
    The free (as in ignoring basepoint) homotopy class of loops on a compact Riemannian manifold $(M,g)$ contains a geodesic representative that is minimizing among the class.
</div>


<div class = "subthm-box" type = "proof">    
    It's not immediate that a sequence of freely homotopic continuous loops with decreasing length will have some convergent subsequence nor that this is a geodesic. It thus helps to look at a subfamily of curves.

    <div class = "subthm-box" type = "finding length-minimizing loop">
        We first reduce to looking at nicer curves.

        Recall that, for $\gamma \in C^1([0,1], M)$, $$\int_a^b \sqrt{g(\dot\gamma, \dot\gamma)} = \lim_{\delta \to 0^+}\sup_{\max_i \Delta t_i < \delta} \sum_{i = 1}^n d_g(\gamma(t_{i-1}), \gamma(t_i)).$$

        Step 1. Since $C^0$ curves may have infinite length per the righthandside definition, we apply a helpful bound.
        
        Fix some $\gamma$ in the free homotopy class. By Whitney's Approximation theorem, we can assume $\gamma$ is smooth (and in the same class) and thus take its length $\tilde{L} = L(\gamma)$ using the Riemannian metric on $M$ which is finite by compactness and continuity of $\dot\gamma$.

        Step 2. We can always consider arc-length reparametrizations of curves (and thus keeping the free homotopy class) by taking $$\tilde \sigma(t) = \sigma (\tau (t)) \qquad \tau(t) = \inf \\{u: L(\sigma_{[0,u]}) \geq L(\sigma)t\\}.$$

        Note $L(\sigma|\_\{[0,\tau(t)]\}) \geq L(\sigma)t > L(\sigma|\_{[0, u]})$ where the first inequality is always true and the second holds for $u < \tau(t)$ so taking $u \uparrow \tau(t)$ and the continuity of $u \mapsto L(\sigma|\_{[0, u]})$ imply $L(\tilde \sigma|_{[0, t]}) = L(\sigma)t$. Thus, for $0 \leq s < t \leq 1$, the additivity of length gives: $$L(\tilde \sigma|\_\{[s,t]\}) = L(\sigma|\_\{[0,\tau(t)]\}) - L(\sigma|\_\{[0, \tau(s)]\}) = L(\sigma)(t-s).$$

        In particular $d\_g(\tilde \sigma(s), \tilde \sigma(t)) \leq L(\tilde\sigma|\_{[s,t]}) \leq L(\tilde \sigma) d\_{S^1}(s,t) \leq \tilde Ld_{S^1}(s,t)$.

        Step 3. So it suffices to define the following subfamily (using the partition-definition of length): $$\FF = \left\\{\sigma \in C(S^1, M): [\sigma] = [\gamma], \\; L(\sigma) \leq \tilde{L}, \text{ and } d_g(\sigma(s), \sigma(t)) \leq \tilde{L} d\_\{S^1\}(s,t) \right\\}.$$

        We will conclude $\FF$ is compact via a corollary to Arzelá-Ascoli (see: <u><a href="/assets/class notes/tool notes.pdf"> these notes</a></u>):

        <div class = "thm-box" name = "Arzelá-Ascoli">
            A subset of $\FF \subseteq C(X,M) \subseteq B(X,M)$, for a compact topological space $X$ and complete metric space $(M,d)$, is compact if and only if it is equicontinuous, closed, and bounded.
        </div>

        Note $M$ is a complete metric space (with respect to $d_g$ via Hopf-Rinow) because it is compact.

        (i). $\FF$ is equicontinuous because $d_g(\sigma(s), \sigma(t)) \leq \tilde{L}d\_{S^1}(s,t)$ for any $\sigma \in \FF$ by definition.

        (ii). $\FF$ is bounded because $M$ is compact so, using the supremum norm, $d_\infty(\sigma, \eta) \leq \text{diam} \; M < \infty$.

        (iii). We show $\FF$ is closed. Say $(\sigma_n) \subseteq \FF$ with $\sigma_n \to \sigma$ a continuous map under the supremum norm. 

        Since $d_\infty(\sigma_n, \sigma) < \text{inj} \\;(M) <\infty$ for large enough $n$, $\sigma_n(t)$ and $\sigma(t)$ can be joined by a unique short geodesic which altogether provides a homotopy $[\sigma] = [\sigma_n] = [\gamma]$.

        For $n$ large enough, $d_\infty(\sigma, \sigma_n) < \epsilon$ so $$d_g(\sigma(s), \sigma(t)) \leq d_g(\sigma(s), \sigma_n(s)) + d_g(\sigma(t), \sigma_n(t)) + d_g(\sigma_n(s), \sigma_n(t)) \leq 2 \epsilon + \tilde Ld_{S^1}(s,t).$$

        Taking $\epsilon \to 0$, $d_g(\sigma(s), \sigma(t)) \leq \tilde L d_{S^1}(s,t)$.
        
        It thus follows from the definition of length via partitions that $L(\sigma) \leq L(\sigma_n) \leq \tilde L$ for large enough $n$. So $\sigma \in \FF$ and $\FF$ is closed.

        Hence $\FF$ is compact so the length functional (which is lower-semicontinuous) attains a minimum at some $\gamma$.

        Per our reductions, $\gamma$ is a length-minimizer for the free homotopy class.
    </div>

    We replace $\gamma$ with its arc-length parametrization as in Step 2 above.

    <div class = "subthm box" type = "our minimizer is a geodesic">
        If $L(\gamma) = 0$, the constant path is a geodesic so we consider $L(\gamma) > 0$.

        Suppose $\gamma$ is not locally length-minimizing. So there are $s<t$ close enough that $$d_g(\gamma(s), \gamma(t)) < L(\gamma|\_{[s,t]}) = L(\gamma)d_{S^1}(s,t).$$

        $M$ is complete so there is a minimizing geodesic $\alpha:[s,t] \to M$ from $\gamma(s) \to \gamma(t)$ with $L(\alpha) = d_g(\gamma(s), \gamma(t))$.

        If we choose $s,t$ close enough, then we can replace $\gamma|_{[s,t]}$ with $\alpha$ so this new loop is freely homotopic to $\gamma$ but of strictly shorter length. Reparametrizing or taking $\alpha$ to be unit-speed, this lives in $\FF$ so $\gamma$ is no longer minmizing - contradiction.

        A locally length-minimizing curve is a geodesic so we are done.
    </div>
</div>

Alternatively, Professor Lott suggested replacing $\FF \subseteq C^0(S^1, M)$ with $W^{1,2}$ loops of uniformly bounded energy (rather than length) and use the fact $W^{1,2}(S^1) \inj C^0(S^1)$ is compact because $S^1$ is one-dimensional.