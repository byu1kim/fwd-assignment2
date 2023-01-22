// JavaScript Document

const body = document.body;
const btnMenu = document.getElementById("btn-menu");
const bar = document.getElementById("bar");
const nav = document.getElementById("main-navigation");

btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

function openMenu() {
  body.classList.toggle("show");
  nav.classList.add("activated");
}

const mql = window.matchMedia("(min-width: 560px)");
mql.addListener(removeTransition);

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
    nav.classList.remove("activated");
  }
}
