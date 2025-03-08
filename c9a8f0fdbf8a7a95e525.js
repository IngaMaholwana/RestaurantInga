console.log("Hello");

import loadContent from './load';
import loadMenu from './menu';
import loadAbout from './about';
import './style.css';


document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener('click', () => {
    loadContent();
});

menuButton.addEventListener('click', () => {
    loadMenu();
});

aboutButton.addEventListener('click', () => {
    loadAbout();
})