import refs from './refs';
import data from './data';

import renderDateMarkup from './curentTime';
import showImgFullScreen from './renderMarkupModal';

// const deletedImg = [];

function renderMarkup() {
  const getFromLocal = localStorage.getItem('deletedImg');
  const parsedSettings = JSON.parse(getFromLocal);


  const arrFromData = () =>
    data.map(el => {
      return +el.id;
    });
  try {
    const arrFromStorage = () => {
      return parsedSettings.map(el => {
        return +el;
      });
    };

    const uniqueValue = arrFromData().filter(
      a => arrFromStorage().indexOf(a) == -1,
    );

    if (parsedSettings.length !== null) {
      const markupFromS = uniqueValue.reduce(
        (string, el) =>
          string +
          `  <li class="list-item-img" id="${el}">
           <div class="img-background-${el} img-background" id="${el}"></div>
           <button class="list-item-img-button">X</button>
           </li>`,
        '',
      );
      refs.wrapperContent.innerHTML = `
        <div class="container">
         <ul class="list-img">${markupFromS}</ul>
         <button class="return-img" type="button">Востановить изображения</button>
        </div>`;

      refs.returnImgBtn().addEventListener('click', returnsImgOnClick);

      refs.listImg().addEventListener('click', showImgFullScreen);
      renderDateMarkup(0);
      return;
    }
  } catch {}

  const markup = data.reduce(
    (string, data) =>
      string +
      `  
        <li class="list-item-img" id="${data.id}">
        <div class="img-background-${data.id} img-background" id="${data.id}"></div>
        <button class="list-item-img-button">X</button>
       </li>`,

    '',
  );
  refs.wrapperContent.innerHTML = `<div class="container">
         <ul class="list-img">${markup}</ul>
         <button class="return-img" type="button">Востановить изображения</button>
        </div>`;

  refs.returnImgBtn().addEventListener('click', returnsImgOnClick);

  renderDateMarkup(0);

  const listImg = document.querySelector('.list-img');
  listImg.addEventListener('click', showImgFullScreen);
}

//

function returnsImgOnClick(e) {
  const wrapperContentCountImg = document.querySelector('.wrapper-content-js');

  localStorage.removeItem('deletedImg');
  wrapperContentCountImg.innerHTML = '';
  renderMarkup();
}

export default renderMarkup;

//
//
//

// import refs from './refs';
// import data from './data';

// import curentDate from './curentTime';
// import showImgFullScreen from './renderMarkupModal';

// function renderMarkup() {
//   const getFromLocal = localStorage.getItem('deletedImg');
//   const parsedSettings = JSON.parse(getFromLocal);

//   try {
//     if (parsedSettings.length !== null) {
//       const markupFromS = parsedSettings.reduce((string, el) => {
//         if (parsedSettings !== data) {
//           console.log(data);
//         }
//         string +
//           `  <li class="list-item-img" id="${el}">
//            <div class="img-background-${el} img-background" id="${el}"></div>
//            <button class="list-item-img-button">X</button>
//            </li>`;
//       }, '');
//       refs.wrapperContent.innerHTML = `<div class="container">
//          <ul class="list-img">${markupFromS}</ul>
//         </div>`;
//       return;
//     }
//   } catch {}

//   const markup = data.reduce(
//     (string, data) =>
//       string +
//       `
//         <li class="list-item-img" id="${data.id}">
//         <div class="img-background-${data.id} img-background" id="${data.id}"></div>
//         <button class="list-item-img-button">X</button>
//        </li>`,
//     '',
//   );
//   refs.wrapperContent.innerHTML = `<div class="container">
//          <ul class="list-img">${markup}</ul>
//         </div>`;

//   refs.wrapperContentCountImg.innerHTML = `<h2>Количество картинок - ${
//     refs.quantityImg().length
//   } || Время ${curentDate()}</h2>`;

//   const listImg = document.querySelector('.list-img');
//   listImg.addEventListener('click', showImgFullScreen);
// }

// //

// export default renderMarkup;
