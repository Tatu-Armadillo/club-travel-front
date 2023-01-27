import { gereneteHomePage } from "./home-page.js";

window.addEventListener("load", () => gereneteHomePage());

document.querySelector('body').onload = () => document.querySelector('dialog').showModal();
