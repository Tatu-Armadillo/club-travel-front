export function header() {
    const header = document.createElement("header");
    header.append(navBar());
    return header;
};

function linkAndNames(name, href) {
    return {name, href};
}

const arrLinkAndNames = [
    linkAndNames("início", "home.html"),
    linkAndNames("infográficos", "#"),
    linkAndNames("cadastro", "sign-up.html"),
    linkAndNames("sobre nós", "#")
]

function navBar() {
    const nav = document.createElement("nav");

    const a = document.createElement("a");
    a.className = "logo";
    a.href = "#";
    a.innerText = "travel club";
    nav.append(a);

    const ul = document.createElement("ul");
    ul.className = "nav-list";

    arrLinkAndNames.forEach(info => {
        const li = document.createElement("li");
        ul.append(li);

        const anchor = document.createElement("a");
        anchor.className = "linkNav";
        anchor.href = info.href;
        anchor.innerText = info.name;

        li.append(anchor);

        nav.append(ul);
    });

    const div = document.createElement("div");
    div.className = "mobile-menu";
    nav.append(div);
    div.addEventListener('click', () => handleClickActive());

    for (let index = 0; index < 3; index++) {
        const span = document.createElement("span");
        span.className = "line";
        div.append(span);
    }

    return nav;
}

function handleClickActive() {
    const menuMobile = document.querySelector('.nav-list');
    const burguer = document.querySelector('.mobile-menu');

    menuMobile.classList.toggle('active');
    burguer.classList.toggle('active');
}
