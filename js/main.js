/**
  * @author Aapo Salo
  * @author Aleksi Kallio
  * @author Joona Karhu
  * @author Sami Nousiainen
  * @author Toni Leinonen
  *
*/


// Click event for redirecting user to selected game page.

$(".game-intro-block").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});


// Open hamburger menu

const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
}


// Close hamburger menu

const navLink = document.querySelectorAll(".menu-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    Menu.classList.remove("active");
}