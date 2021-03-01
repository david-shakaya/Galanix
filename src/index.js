import './sass/main.scss';
import '../src/task-1/sass/main.scss';
import './task-2/sass/main.scss';
import './task-3/js/renderMarkupHomePage';
import refs from './task-2/js/refs';
import renderMarkupTask1 from './task-1/js/task-1';
import renderMarkup from './task-2/js/renderMarkup';

refs.linkTask2.addEventListener('click', renderMarkup);
