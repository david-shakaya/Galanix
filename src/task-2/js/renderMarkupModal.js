import refs from './refs';
import modal from './modal.js';
import renderDateMarkup from './curentTime';

const deletedImg = [];

function showImgFullScreen(e) {
  if (e.target.classList[1] === 'img-background') {
    const curentNumberImg = e.target.getAttribute('id');

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
  if (e.target.nodeName === 'BUTTON') {
    renderDateMarkup(1);
    deletedImg.push(e.target.parentElement.getAttribute('id'));
    console.log(deletedImg);

    localStorage.setItem(`deletedImg`, JSON.stringify(deletedImg));
    e.target.parentElement.remove();
  }
}

export default showImgFullScreen;
