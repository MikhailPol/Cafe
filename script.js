const btnOpenMenu = document.querySelector('.navbar__toggle--open');
const btnCloseMenu = document.querySelector('.navbar__toggle--close');
const navbar = document.querySelector('.navbar');

btnOpenMenu.addEventListener('click', function() {
    navbar.classList.add('navbar--opened');
});
btnCloseMenu.addEventListener('click', function() {
    navbar.classList.remove('navbar--opened');
})