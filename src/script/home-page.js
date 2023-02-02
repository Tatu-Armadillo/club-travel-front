import { header } from './shared/header.js';
import { footer } from './shared/footer.js';
import { head, links } from './shared/head.js';

const linksConfig = [
    links('shortcut icon', 'images/logo/logo-travel.png', 'image/x-icon'),
    links('stylesheet', './styles/reset.css', ''),
    links('stylesheet', './styles/global.css', ''),
    links('stylesheet', './styles/header.css', ''),
    links('stylesheet', './styles/footer.css', ''),
    links('stylesheet', './styles/main-content.css', ''),
    links('stylesheet', './styles/text-presets.css', ''),
    links(
        'stylesheet',
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
        ''
    ),
];

export function gereneteHomePage() {
    head(linksConfig);
    document.body.prepend(header());
    document.body.append(footer());
    // document.querySelector('.btn-close-modal').onclick = () => document.querySelector('dialog').close();
}
