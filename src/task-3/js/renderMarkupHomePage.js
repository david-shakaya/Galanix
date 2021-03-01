const wrapperContent = document.querySelector('.wrapper-content-js');
const linkTask3 = document.querySelector('.link-task-3');
const wrapperTask3 = document.querySelector('.wrapper-task-3');
const wrapperContentCountImg = document.querySelector(
  '.wrapper-content-countImg-js',
);

linkTask3.addEventListener('click', renderMarkupTask3);

function renderMarkupTask3() {
  wrapperContentCountImg.innerHTML = '';
  wrapperContent.innerHTML = `<div class="container">
  <form class="search-form" id="search-form">
    <input
      type="text"
      name="query"
      autocomplete="off"
      placeholder="Search ..."
    />
    <button>Отправить</button>
  </form>
  <section class="section-gallery">
    <ul class="gallery"></ul>
  </section>
  <div id="hide"></div>
</div>`;
}
renderMarkupTask3();
const form = document.querySelector('.search-form');
form.addEventListener('submit', search);

function search(e) {
  e.preventDefault();

  let inputValue = e.target.elements.query.value;
  fetchUniversities(inputValue);
}

let numberUniver = 0;
function fetchUniversities(query) {
  fetch(`http://universities.hipolabs.com/search?country=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const mar = data.reduce(
        (string, univer) =>
          string +
          `  
         <li class="list-item-univer">
       <span class="list-item-univer-number">${(numberUniver += 1)}</span> 
       <p class="list-item-univer-name">${univer.name}</p>
        <a class="list-item-univer-link" href="${univer.web_pages[0]}">${
            univer.web_pages[0]
          }</a>
    </li>`,
        '',
      );
      wrapperTask3.innerHTML = `<div class="container"> 
      <h2 class="title-univer">По вашему запросу найдено ${data.length} университетов</h2>
        ${mar} </div>`;
    });
}
