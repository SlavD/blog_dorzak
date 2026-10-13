document.documentElement.classList.add('js-ready');

document.querySelectorAll('.article-body pre').forEach((block) => {
  const button = document.createElement('button');
  button.className = 'code-copy';
  button.type = 'button';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy code block');
  button.addEventListener('click', async () => {
    const code = block.querySelector('code') || block;
    try {
      await navigator.clipboard.writeText(code.innerText);
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1400);
    } catch {
      button.textContent = 'Select code';
    }
  });
  block.append(button);
});
