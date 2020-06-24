import './styles.scss';
import './js/switch-theme';
import menuRef from './menu.json';
import template from './templates/template-menu.hbs';

const markup = template(menuRef);
const galleryMenu = document.querySelector('.js-menu');

galleryMenu.insertAdjacentHTML('beforeend', markup);
