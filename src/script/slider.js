export const fakeResponse = (url, description, title) => {
    return {
        url,
        description,
        title,
    };
};

export const Slider = (list) => {
    const slider = document.querySelector('.slider');
    slider.innerHTML = `
    <div class="slides">
        <input
            type="radio"
            name="radio-image"
            id="radio-image-1"
            checked
        />
        <input
            type="radio"
            name="radio-image"
            id="radio-image-2"
        />
        <input
            type="radio"
            name="radio-image"
            id="radio-image-3"
        />
        <input
            type="radio"
            name="radio-image"
            id="radio-image-4"
        />
    </div>`;
    const slidesContainer = slider.querySelector('.slides');
    list.forEach((item) => {
        slidesContainer.append(setSlideImage(item));
    });

    slider.innerHTML += `
    <div class="navigation">
    <label
        for="radio-image-1"
        class="btn-navegation"
    ></label>
    <label
        for="radio-image-2"
        class="btn-navegation"
    ></label>
    <label
        for="radio-image-3"
        class="btn-navegation"
    ></label>
    <label
        for="radio-image-4"
        class="btn-navegation"
    ></label>
</div>`;
    slider
        .querySelectorAll('label')
        .forEach((label) => label.addEventListener('click', passIntoImg));
    return Slider;
};

export function setSlideImage(object) {
    let { url, description, title } = object;
    const slide = document.createElement('div');
    slide.innerHTML = `
    <img
    src="${url}"
    alt="${description}"
    />
    <p class="title text-md">${title}</p>`;
    return slide;
}

function passIntoImg() {
    let inputList = document.querySelectorAll('input[type="radio"]');
    inputList.forEach((ipt) => {
        ipt.removeAttribute('checked');
        ipt.classList.remove('checked');
    });
    const label = event.target;
    const idBtn = label.getAttribute('for');
    console.log(idBtn);
    document.getElementById(`${idBtn}`).setAttribute('checked', 'true');
    document.getElementById(`${idBtn}`).classList.add('checked');
    console.log(document.getElementById(`${idBtn}`).checked);
    // document.getElementsByName(`${label.}`);
}
