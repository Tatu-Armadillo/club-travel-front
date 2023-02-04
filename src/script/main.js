import { gereneteHomePage } from './pages/home-page.js';
import { setNotice } from './notice.js';
import { searchNews } from './services.js';

window.addEventListener('load', () => gereneteHomePage());

// document.querySelector('body').onload = () =>
//     document.querySelector('dialog').showModal();

searchNews('https://restcountries.com/v3.1/all').then((result) =>
    setNotice(result)
);
