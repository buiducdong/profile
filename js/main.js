const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $('.navbar__links');
const menuButton = $('.navbar__icons');
const overlay = $('#overlay');
const header = $('.header');

menuButton.addEventListener("click", function() {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})

overlay.addEventListener("click", function() {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})

window.addEventListener('scroll', () => {
    header.classList.toggle('scroll', window.scrollY > 0)
})