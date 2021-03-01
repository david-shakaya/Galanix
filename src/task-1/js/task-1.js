const linkTask1 = document.querySelector('.link-task-1');
const wrapperContent = document.querySelector('.wrapper-content-js');
const wrapperContentCountImg = document.querySelector(
  '.wrapper-content-countImg-js',
);
const wrapperTask3 = document.querySelector('.wrapper-task-3');

linkTask1.addEventListener('click', renderMarkupTask1);

function renderMarkupTask1() {
  wrapperTask3.innerHTML = '';
  wrapperContentCountImg.innerHTML = '';
  wrapperContent.innerHTML = `
<div class="container">
    <!-- Задание 1 -->

    <ul class="flag-list">
        <li class="flag-list-item">
            <div class="flag-list-item-wrapper">
                <span class="flag-ukr-item-elem1"></span>
                <span class="flag-ukr-item-elem2"></span>
            </div>
        </li>
        <li class="flag-list-item">
            <div class="flag-list-item-wrapper">
                <span class="flag-jap-item-elem1"></span>
                <span class="flag-jap-item-elem2"></span>
            </div>
        </li>
        <li class="flag-list-item">
            <div class="flag-list-item-wrapper">
                <span class="flag-ice-item-elem1"></span>
                <span class="flag-ice-item-elem2"></span>
                <span class="flag-ice-item-elem3"></span>
                <span class="flag-ice-item-elem4"></span>
                <span class="flag-ice-item-elem5"></span>
            </div>
        </li>
        <li class="flag-list-item">
            <div class="flag-list-item-wrapper">
                <span class="flag-cze-item-elem1"></span>
                <span class="flag-cze-item-elem2"></span>
                <span class="flag-cze-item-elem3"></span>
            </div>
        </li>
    </ul>
</div>
`;
}

export default renderMarkupTask1;
