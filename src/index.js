import menuData from './menu.json';
import foodServiceTpl from '../src/partials/food-service.hbs'; 

const foodServiceMarkUp = foodServiceTpl(menuData);
// 

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', foodServiceMarkUp);