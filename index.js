const hamburgerMenu = document.querySelector('#hamburger')
const navLinks = document.querySelector('#nav-links')
const navBar = document.querySelector('nav')
const Logo = document.querySelector('#logo')

const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const firstGridBox = document.querySelector('#box1')
const h1 = document.querySelector('#intro-header')
const p = document.querySelector('#intro-text')

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    navBar.classList.toggle('open')
    hamburgerMenu.classList.toggle('open')
})

const defaultSlide = {
    h1: "Discover innovative\nways to decorate",
    p:
        `
    We provide unmatched quality, comfort, and style for property
     owners across the country. Our experts combine form and 
     function in bringing your vision to life. Create a room in
     your own style with our collection and make your property a
      reflection of you and what you love.
    `
}

const firstSlide = {
    h1: "We are available\nall across the globe",
    p: `
    With stores all over the world, it's easy for you to
    find furniture for your home or place of business. Locally, we’re in most
    major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today    
    `
}

const secondSlide = {
    h1: "Manufactured with\nthe best materials",
    p: `
    Our modern furniture store provide a
    high level of quality. Our company has invested in advanced technology to
    ensure that every product is made as perfect and as consistent as possible.
    With three decades of experience in this industry, we understand what
    customers want for their home and office
    `
}

nextBtn.addEventListener('click', () => {
    if (firstGridBox.className.includes("zero")) {
        h1.textContent = firstSlide.h1
        p.textContent = firstSlide.p
        firstGridBox.classList.replace("zero", "one")
    } else {
        h1.textContent = secondSlide.h1
        p.textContent = secondSlide.p
        firstGridBox.classList.replace("one", "two")
    }
})

prevBtn.addEventListener('click', () => {
    if (firstGridBox.className.includes("one")) {
        firstGridBox.classList.replace("one", "zero")
        h1.textContent = defaultSlide.h1
        p.textContent = defaultSlide.p

    } else if (firstGridBox.className.includes("two")) {
        firstGridBox.classList.replace("two", "one")
        h1.textContent = firstSlide.h1
        p.textContent = firstSlide.p

    } else {
        firstGridBox.className = "zero"
    }
})