import Notice from './news.js';
import { searchNews } from './services.js';
document
    .querySelector('.mobile-menu')
    .addEventListener('click', handleClickActive);

function handleClickActive() {
    const menuMobile = document.querySelector('.nav-list');
    const burguer = document.querySelector('.mobile-menu');

    menuMobile.classList.toggle('active');
    burguer.classList.toggle('active');
}

document.querySelector('body').onload = () =>
    document.querySelector('dialog').showModal();

document.querySelector('.btn-close-modal').onclick = () =>
    document.querySelector('dialog').close();

const setNotice = (json) => {
    for (let i = 0; i < 5; i++) {
        const { png } = json[i].flags;
        const { region } = json[i];
        const { common: countryName } = json[i].name;
        document
            .querySelector('.last-articles-container')
            .append(Notice(png, countryName, region, region, png, countryName));
    }
};
searchNews('https://restcountries.com/v3.1/all').then((result) =>
    setNotice(result)
);
