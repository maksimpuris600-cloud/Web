const btn = document.querySelector('nav p');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.add('active-nav-menu');
    btn.classList.add('active-strelka');
});