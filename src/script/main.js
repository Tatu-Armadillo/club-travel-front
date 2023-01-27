import { gereneteHomePage } from "./home-page.js";
import Notice from "./news.js";
import { searchNews } from "./services.js";

window.addEventListener("load", () => gereneteHomePage());

document.querySelector('body').onload = () => document.querySelector('dialog').showModal();

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
