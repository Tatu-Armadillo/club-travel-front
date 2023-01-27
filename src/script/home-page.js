import { header } from "./shared/header.js";
import { footer } from "./shared/footer.js";

export function gereneteHomePage() {
    document.body.prepend(header());
    document.body.append(footer());
    document.querySelector('.btn-close-modal').onclick = () => document.querySelector('dialog').close();
};
