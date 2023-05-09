export const fakeResponse = (url, description, title) => {
    return {
        url,
        description,
        title,
    };
};

export const Slider = (array) => {
    array.forEach((item, index) => setImage(item, index));
};

function setImage(obj, index) {
    let { url, description, title } = obj;
    let imgTagList = document.querySelectorAll('aside img');
    imgTagList[index].src = url;
    imgTagList[index].alt = description;
    let titleTagList = document.querySelectorAll('aside p');
    titleTagList[index].innerText = title;
}

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

// function passIntoImg() {
//     let inputList = document.querySelectorAll('input[type="radio"]');
//     inputList.forEach((ipt) => {
//         ipt.removeAttribute('checked');
//         ipt.classList.remove('checked');
//     });
//     const label = event.target;
//     const idBtn = label.getAttribute('for');
//     console.log(idBtn);
//     document.getElementById(`${idBtn}`).setAttribute('checked', 'true');
//     document.getElementById(`${idBtn}`).classList.add('checked');
//     console.log(document.getElementById(`${idBtn}`).checked);
//     // document.getElementsByName(`${label.}`);
// }
