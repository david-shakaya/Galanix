import './renderMarkup';
import refs from './refs.js';

//Лучше конечно методами обьекта это сделать(

function modal() {
  refs.buttonCloseModalRef().addEventListener('click', onCloseModal);
  refs.backdropRef().addEventListener('click', onBackdropClick);

  function onOpenModal() {
    console.log('open');
    window.addEventListener('keydown', onPressEscape);
    refs.bodyRef().classList.add('show-modal');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onPressEscape);
    refs.bodyRef().classList.remove('show-modal');
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  }

  function onPressEscape(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }

  onOpenModal();
}
export default modal;
