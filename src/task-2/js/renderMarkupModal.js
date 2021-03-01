import refs from './refs';
import modal from './modal.js';
import renderDateMarkup from './curentTime';
const deletedImg = [];
let isActive = false;

// import '../../task-2/images/'
//  <img src="../images/${curentNumberImg}.jpg" alt="images"
function showImgFullScreen(e) {
  if (e.target.classList[1] === 'img-background') {
    const curentNumberImg = e.target.getAttribute('id');

    refs.wrapperContentModal.innerHTML = `<div class="backdrop js-backdrop">
            <div class="modal">
               
                <div class="modal-img-backg-${curentNumberImg} modal-img-backg"></div>
                <button type="button" class="button" data-action="close-modal">
                    Закрыть
                </button>
            </div>
        </div>`;
    modal();
  }
  if (e.target.nodeName === 'BUTTON') {
    renderDateMarkup(1);

    if (!isActive) {
      const getFromLocal = localStorage.getItem('deletedImg');
      const parsedSettings = JSON.parse(getFromLocal);

      if (parsedSettings !== null) {
        deletedImg.push(...parsedSettings);
      }
      isActive = true;
    }

    deletedImg.push(e.target.parentElement.getAttribute('id'));
    console.log(deletedImg);

    localStorage.setItem(`deletedImg`, JSON.stringify(deletedImg));
    e.target.parentElement.remove();
  }
}

export default showImgFullScreen;
