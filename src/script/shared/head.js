export function head(array) {
    const head = document.querySelector('head');
    head.append(metas().metaCharset);
    head.append(metas().metaHttp);
    head.append(metas().metaName);

    array.forEach((info) => {
        const link = document.createElement('link');
        link.rel = info.rel;
        link.href = info.href;
        link.type = info.type;
        head.append(link);
    });

    return head;
}

function metas() {
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');

    const metaHttp = document.createElement('meta');
    metaHttp.httpEquiv = 'X-UA-Compatible';
    metaHttp.content = 'IE=edge';

    const metaName = document.createElement('meta');
    metaName.name = 'viewport';
    metaName.content = 'width=device-width, initial-scale=1, minimum-scale=1';

    return { metaCharset, metaHttp, metaName };
}

export function links(rel, href, type) {
    return { rel, href, type };
}

// const linksConfig = [
//     links('shortcut icon', 'images/logo/logo-travel.png', 'image/x-icon'),
//     links('stylesheet', './styles/reset.css', ''),
//     links('stylesheet', './styles/global.css', ''),
//     links('stylesheet', './styles/header.css', ''),
//     links('stylesheet', './styles/footer.css', ''),
//     links('stylesheet', './styles/news.css', ''),
//     links('stylesheet', './styles/main-content.css', ''),
//     links('stylesheet', './styles/text-presets.css', ''),
//     links('stylesheet', './styles/sign-up.css', ''),
//     links(
//         'stylesheet',
//         'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
//         ''
//     ),
// ];
