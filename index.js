const btn = document.querySelector('nav p');
const nav = document.querySelector('nav');
const lovkost = document.querySelector('.lovkost');
const cardLovkost = document.querySelector('.card-lovkost');
const sila = document.querySelector('.sila');
const cardSila = document.querySelector('.card-sila');
const unik = document.querySelector('.unik');
const cardUnik = document.querySelector('.card-unik');
const intelekt = document.querySelector('.intelekt');
const cardIntelekt = document.querySelector('.card-intelekt');

btn.addEventListener('click', () => {
    nav.classList.add('active-nav-menu');
    btn.classList.add('active-strelka');
});


sila.addEventListener('click', () => {
    cardLovkost.classList.remove('active-card-lovkost');
    lovkost.classList.remove('active-btn');

    cardIntelekt.classList.remove('active-card-intelekt');
    intelekt.classList.remove('active-btn');

    cardUnik.classList.remove('active-card-unik');
    unik.classList.remove('active-btn');

    cardSila.classList.add('active-card-sila');
    sila.classList.add('active-btn');
});

lovkost.addEventListener('click', () => {
    cardSila.classList.remove('active-card-sila');
    sila.classList.remove('active-btn');

    cardIntelekt.classList.remove('active-card-intelekt');
    intelekt.classList.remove('active-btn');

    cardUnik.classList.remove('active-card-unik');
    unik.classList.remove('active-btn');

    cardLovkost.classList.add('active-card-lovkost');
    lovkost.classList.add('active-btn');
});

intelekt.addEventListener('click', () => {
    cardSila.classList.remove('active-card-sila');
    sila.classList.remove('active-btn');

    cardLovkost.classList.remove('active-card-lovkost');
    lovkost.classList.remove('active-btn');

    cardUnik.classList.remove('active-card-unik');
    unik.classList.remove('active-btn');

    cardIntelekt.classList.add('active-card-intelekt');
    intelekt.classList.add('active-btn');
});

unik.addEventListener('click', () => {
    cardSila.classList.remove('active-card-sila');
    sila.classList.remove('active-btn');

    cardLovkost.classList.remove('active-card-lovkost');
    lovkost.classList.remove('active-btn');

    cardIntelekt.classList.remove('active-card-intelekt');
    intelekt.classList.remove('active-btn');

    cardUnik.classList.add('active-card-unik');
    unik.classList.add('active-btn');
});