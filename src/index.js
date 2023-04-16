import menuData from './menu.json';
import foodServiceTpl from '../src/partials/food-service.hbs'; 

const foodServiceMarkUp = foodServiceTpl(menuData);
// 

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', foodServiceMarkUp);

const switcherTheme = document.querySelector('.theme-switch__toggle');
const theme = localStorage.getItem('currentTheme');
switcherTheme.addEventListener('change', changeSwitcher)

function changeSwitcher() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const value = document.body.classList;
    localStorage.setItem('currentTheme', value[1])
}
if (theme === null) {
    localStorage.setItem('currentTheme', 'light-theme');
    document.body.classList.add('light-theme')
} else {
    document.body.classList.add(theme)
};
if (theme === 'dark-theme') {
    switcher.checked = true;
}
