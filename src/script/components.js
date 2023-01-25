function navBar() {
    const nav = document.createElement("nav");
    const nameList = ["início", "infográficos", "cadastro", "sobre nós"];

    const a = document.createElement("a");
    a.className = "logo";
    a.href = "#";
    a.innerText = "travel club";
    nav.append(a);

    let i = 0;

    nameList.forEach(name => {
        const ul = document.createElement("ul");
        ul.className = "nav-list";

        const li = document.createElement("li");
        ul.append(li);

        const anchor = document.createElement("a");
        anchor.className = "linkNav";
        anchor.href = "#";
        anchor.innerText = name;

        li.append(anchor);

        nav.append(ul);
    });

    return nav;
}

function header() {
    const header = document.createElement("header");
    header.append(navBar())
    return header;
};

export function gereneteComponent() {
    document.body.prepend(header());
};