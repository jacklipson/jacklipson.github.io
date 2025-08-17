document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".colorwave").forEach(container => {
    const text = container.textContent || '';
    container.textContent = ''; // clear original text

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const span = document.createElement('span');
      span.className = 'char';
      span.style.setProperty('--i', i);

      if (ch === ' ') {
        span.classList.add('space');
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = ch;
      }

      container.appendChild(span);
    }
  });
});
