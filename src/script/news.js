const Notice = (url, title, author, datePost, urlImage, descImage) => {
    const notice = document.createElement('a');
    notice.href = url;
    notice.classList.add('link-wrapper');
    notice.innerHTML = `<div class='article-item'>
        <div class='header-article'>
            <h3 class='text-lg title-news'>${title}</h3>
            <p>${author}</p>
            <p>${datePost}</p>
        </div>
        <div class='footer-article'>
            <img
                src='${urlImage}'
                alt='${descImage}'
            />
        </div>
    </div>`;
    return notice;
};

export default Notice;
