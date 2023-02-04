import { head, links } from '../shared/head.js';
import { header } from '../shared/header.js';
import { footer } from '../shared/footer.js';
const linksConfig = [
    links('shortcut icon', 'images/logo/logo-travel.png', 'image/x-icon'),
    links('stylesheet', './styles/global.css', ''),
    links('stylesheet', './styles/news.css', ''),
    links('stylesheet', './styles/header.css', ''),
    links('stylesheet', './styles/footer.css', ''),
    links(
        'stylesheet',
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
        ''
    ),
    ,
];

const Main = document.querySelector('main');
let post = [
    {
        tagname: 'p',
        content: `No post o que fazer na Península de Maraú: as melhores praias e passeios você vai poder conferir o melhor que a região oferece. Agora, vamos descobrir onde ficar nesse lugar tão especial.
        `,
    },
    {
        tagname: 'p',
        content: `Se você está com passagem comprada para conhecer esse cantinho especial da Bahia, precisa ler esse post com dicas de 15  pousadas em Barra Grande, Bahia e nas proximidades, para você curtir com conforto e tranquilidade as principais praias da região.
        `,
    },
    {
        tagname: 'h2',
        content: `Onde ficar em Barra Grande, Bahia?`,
    },
    {
        tagname: 'p',
        content: `No post o que fazer na Península de Maraú: as melhores praias e passeios você vai poder conferir o melhor que a região oferece. Agora, vamos descobrir onde ficar nesse lugar tão especial.`,
    },
    {
        tagname: 'img',
        content: `https://www.maladeaventuras.com/wp-content/uploads/2017/03/PONTA_DO_MUTA.jpg`,
    },
];

const buildNews = (date, destination, title, content) => {
    document.body.prepend(header());
    document.body.append(footer());
    Main.innerHTML = `
            <div class="header-news">
                <p><span class="material-symbols-outlined">
                chronic
                </span>${date}</p>
                <a class="destination" href="#"><p>${destination}</p><img src="./images/icons/map.svg" alt="" /></a>
            </div>
            <div class="container-news">
                <h1 >${title}</h1>
                <div class="container-component"></div>
            </div>`;
    content.forEach((item) =>
        document
            .querySelector('.container-component')
            .append(setComponent(item))
    );
};

document.body.onload = buildNews(
    '26/01/2023',
    'Bahia',
    'Pousadas em Barra Grande, Bahia: as 15 mais charmosas',
    post
);
document.body.onload = head(linksConfig);

function setComponent(object) {
    let { tagname, content } = object;
    const newElement = document.createElement(tagname);
    if ((tagname === 'p', 'h2')) newElement.innerText = content;
    if ((tagname === 'img', 'ifame')) newElement.src = content;
    return newElement;
}
