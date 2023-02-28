export function footer() {
    const footer = document.createElement("footer");
    footer.className = "container-footer";
    footer.append(section());
    return footer;
}

function newLinkInfo(href, src, alt, className) {
    return { href, src, alt, className };
}

const linkInfos = [
    newLinkInfo("https://t.me/+e-UE2kn0mGkwZWVh", "images/icons/telegram.svg", "ícone telegran", "svgImg"),
    newLinkInfo("https://www.instagram.com/agenciadeviagem.eth/", "images/icons/instagram.svg", "ícone instagram", "svgImg"),
    newLinkInfo("https://api.whatsapp.com/message/C4GH5VQQYFZAD1?autoload=1&app_absent=0", "images/icons/whatsapp.svg", "ícone whatsapp", "svgImg"),
    newLinkInfo("https://tiktok.com/@agenciadeviagem.eth", "images/icons/tiktok.svg", "ícone tiktok", "svgImg"),
    newLinkInfo("https://twitter.com/Web3TravelClub", "images/icons/twitter.svg", "ícone twitter", "svgImg"),
    newLinkInfo("mailto:agenciadeviagem.eth@gmail.com", "images/icons/gmail.svg", "ícone gmail", "svgImg")
];

function section() {
    const section = document.createElement("section");
    section.className = "box-aboutUs";

    const h3 = document.createElement("h3");
    h3.innerText = "sobre nós";

    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquams eaque quam asperiores placeat deserunt ratione quis distinctio sapiente, ad, facere iste praesentium architecto dolorum dolore ullam debitis earum molestiae labore.";

    const ul = document.createElement("ul");
    ul.className = "list-networks";

    linkInfos.forEach(info => {
        const li = document.createElement("li");
        ul.append(li);
        const a = document.createElement("a");
        a.href = info.href;
        li.append(a);
        const img = document.createElement("img");
        img.src = info.src;
        img.className = info.className;
        img.alt = info.alt;
        a.append(img);
    });

    const div = document.createElement("div");
    div.className = "copyright";

    const spanSection = document.createElement("span");
    spanSection.innerHTML = "&copy;2023 travel club";

    div.append(spanSection);

    section.append(h3);
    section.append(p);
    section.append(ul);
    section.append(div);
    return section;
}
