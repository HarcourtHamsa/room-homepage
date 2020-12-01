const hamburgerMenu = document.querySelector('#hamburger')
const navLinks = document.querySelector('#nav-links')

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open')
})