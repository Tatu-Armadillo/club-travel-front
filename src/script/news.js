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

const buildNews = (date, author, title, content) => {
    Main.innerHTML = `
            <div class="header-news">
                <p>${date}</p>
                <a href="#">${author}</a>
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
    'Marcos',
    'Pousadas em Barra Grande, Bahia: as 15 mais charmosas',
    post
);

function setComponent(object) {
    let { tagname, content } = object;
    const newElement = document.createElement(tagname);
    if ((tagname === 'p', 'h2')) newElement.innerText = content;
    if ((tagname === 'img', 'ifame')) newElement.src = content;
    return newElement;
}
