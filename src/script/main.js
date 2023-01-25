import { gereneteComponent } from "./components.js";

window.addEventListener("load", () => gereneteComponent());

// document.querySelector('.mobile-menu').addEventListener('click', handleClickActive);

document.querySelector('body').onload = () => document.querySelector('dialog').showModal();

document.querySelector('.btn-close-modal').onclick = () => document.querySelector('dialog').close();

function handleClickActive() {
    const menuMobile = document.querySelector('.nav-list');
    const burguer = document.querySelector('.mobile-menu');

    menuMobile.classList.toggle('active');
    burguer.classList.toggle('active');
}

