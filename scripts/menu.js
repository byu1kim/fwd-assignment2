// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const bar = document.getElementById('bar');
const nav = document.getElementById('main-navigation');

btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

function openMenu() {
  // Do some open/close nav stuff here...
}
