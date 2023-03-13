import { header } from '../shared/header.js';
import { footer } from '../shared/footer.js';
import { head, links } from '../shared/head.js';
import { Slider, fakeResponse } from '../slider.js';
import { setNotice } from '../notice.js';
import { searchNews } from '../services.js';

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
let list = Array(
    fakeResponse(
        'https://www.maladeaventuras.com/wp-content/uploads/2022/12/melhore-hoteis-em-belo-horizonte-com-piscina-Bourbon-Belo-Horizonte.jpg',
        'Qualquer',
        'Qualquer'
    ),
    fakeResponse(
        'https://www.maladeaventuras.com/wp-content/uploads/2022/12/melhores-passeios-malta-1536x1229.jpg.webp',
        'Qualquer',
        'Qualquer'
    ),
    fakeResponse(
        'https://www.maladeaventuras.com/wp-content/uploads/2022/11/Mellieha-Beach-Malta-1536x1229.jpg.webp',
        'Qualquer',
        'Qualquer'
    ),
    fakeResponse(
        'https://www.maladeaventuras.com/wp-content/uploads/2022/12/melhores-passeios-malta-1536x1229.jpg.webp',
        'Qualquer',
        'Qualquer'
    )
);

export function gereneteHomePage() {
    head(linksConfig);
    document.body.prepend(header());
    Slider(list);
    document.body.append(footer());

    searchNews('https://restcountries.com/v3.1/all').then((result) =>
        setNotice(result)
    );
    // document.querySelector('.btn-close-modal').onclick = () => document.querySelector('dialog').close();
}
