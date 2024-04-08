const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function handleSticky() {
    const offset = window.pageYOffset();
    console.log(offset);
}

navbar.addEventListener("scroll", handleSticky);
