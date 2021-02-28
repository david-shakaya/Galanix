import renderMarkup from './renderMarkup';
import refs from './refs';

function returnsImgOnClick(e) {
  const wrapperContentCountImg = document.querySelector('.wrapper-content-js');

  localStorage.removeItem('deletedImg');
  wrapperContentCountImg.innerHTML = '';
}

export default returnsImgOnClick;
