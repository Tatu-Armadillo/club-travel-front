import { header } from '../shared/header.js';
import { footer } from '../shared/footer.js';
import { head, links } from '../shared/head.js';

const linksConfig = [
    links('shortcut icon', 'images/logo/logo-travel.png', 'image/x-icon'),
    links('stylesheet', './styles/sign-up.css', ''),
    links('stylesheet', './styles/reset.css', ''),
    links('stylesheet', './styles/global.css', ''),
    links('stylesheet', './styles/header.css', ''),
    links('stylesheet', './styles/footer.css', ''),
    links(
        'stylesheet',
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
        ''
    ),
];

document.body.onload = () => {
    head(linksConfig);
};

document.body.prepend(header());
document.body.append(footer());
