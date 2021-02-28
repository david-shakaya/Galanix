import './sass/main.scss';
import '../src/task-1/sass/main.scss';
import refs from './task-2/js/refs';
import renderMarkupTask1 from './task-1/js/task-1';
// import './task-1/js/task-1.js';
import renderMarkup from './task-2/js/renderMarkup';

import './task-2/sass/main.scss';

refs.linkTask2.addEventListener('click', renderMarkup);

console.log(refs);
