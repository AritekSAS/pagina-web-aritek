// Toggle menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !expanded);
    menu.setAttribute('aria-expanded', !expanded);
    if (!expanded) menu.style.display = 'flex';
    else menu.style.display = 'none';
  });
}

// Ajuste anclajes con header fijo (opcional si se requiere)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const header = document.querySelector('.site-header');
    const y = el.getBoundingClientRect().top + window.pageYOffset - (header?.offsetHeight || 0);
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});