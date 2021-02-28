import modal from './moda.js';
import refs from './refs';

let quantityImg = 0;
let q = `Количество изображений ${quantityImg}`;

function renderMarkup() {
    refs.wrapperContent.innerHTML = `<div class="container">

            <ul class="list-img">
                <li class="list-item-img">
                    <div class="img-background-1 img-background" id="1"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-2 img-background" id="2"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-3 img-background" id="3"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-4 img-background" id="4"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-5 img-background" id="5"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-6 img-background" id="6"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-7 img-background" id="7"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-8 img-background" id="8"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-9 img-background" id="9"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-10 img-background" id="10"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-11 img-background" id="11"></div>
                    <button class="list-item-img-button">X</button>
                </li>
                <li class="list-item-img">
                    <div class="img-background-12 img-background" id="12"></div>

                    <button class="list-item-img-button">X</button>
                </li>
            </ul>
        </div> `;

    refs.wrapperContentCountImg.innerHTML = `<h2>Количество ${
        refs.quantityImg().length
    }</h2>`;
    const listImg = document.querySelector('.list-img');
    listImg.addEventListener('click', showImgFullScreen);
}

//

function showImgFullScreen(e) {
    if (e.target.classList[1] !== 'img-background') {
        return;
    }
    console.log(e.target.getAttribute('id'));
    const curentNumberImg = e.target.getAttribute('id');

    // onOpenModal();
    refs.wrapperContentModal.innerHTML = `<div class="backdrop js-backdrop">
            <div class="modal">
                <img src="../../task-2/images/${curentNumberImg}.jpg" alt="" />
                <button type="button" class="button" data-action="close-modal">
                    Закрыть
                </button>
            </div>
        </div>;`;
    modal();
}
export default renderMarkup;
