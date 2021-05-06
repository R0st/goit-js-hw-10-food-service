import menuTmp from './templates/menu.hbs';
// import menuTmpOne from './templates/menuOne.hbs';
import menuTmpData from './menu.json';

import './styles.css';

const iconTmp = document.querySelector('.js-menu');
const markup = menuTmp(menuTmpData);
iconTmp.insertAdjacentHTML('beforeend', markup);
console.log(menuTmp(menuTmpData));

// CHANGE THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyTheme = document.querySelector('body');
const checkboxEl = document.querySelector('.theme-switch__toggle');

const savedTheme = localStorage.getItem('theme');
bodyTheme.classList = savedTheme;

if (savedTheme === null) {
    localStorage.setItem('theme', Theme.LIGHT);
};
if (savedTheme === Theme.DARK) {
        checkboxEl.checked = true;
    }


checkboxEl.addEventListener('change', onInputChangeTheme);

function onInputChangeTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === Theme.LIGHT) {
        localStorage.removeItem('theme', Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        bodyTheme.classList.remove(Theme.LIGHT);
        bodyTheme.classList.add(Theme.DARK);
        
    } if (currentTheme === Theme.DARK) {
            localStorage.removeItem('theme', Theme.DARK);
            localStorage.setItem('theme', Theme.LIGHT);
            bodyTheme.classList.remove(Theme.DARK);    
            bodyTheme.classList.add(Theme.LIGHT);   
        }
};