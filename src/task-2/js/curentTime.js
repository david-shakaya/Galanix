import refs from './refs';
function curentDate() {
  const date = new Date();
  let year = date.getFullYear(); // год
  let month = date.getMonth(); // месяц,
  let dayy = date.getDate(); // день недели

  let hours = date.getHours(); // часы
  let minutes = date.getMinutes(); // минуты
  return `${pad(dayy)}.${pad(month)}.${pad(year)}  ${pad(hours)}:${pad(
    minutes,
  )} `;
}

//  Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function pad(value) {
  return String(value).padStart('2', 0);
}

function renderDateMarkup(num) {
  refs.wrapperContentCountImg.innerHTML = `<h2>Количество картинок - ${
    refs.quantityImg().length - num
  } || Время ${curentDate()}</h2>`;
}

export default renderDateMarkup;
