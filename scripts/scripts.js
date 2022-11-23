let menuMobile = document.querySelector('.menu-mobile')

function toggleMenu() {
    let nav = document.querySelector('.nav')
    nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu)