import menuTmp from './templates/menu.hbs';
import menuTmpOne from './templates/menuOne.hbs';
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


bodyTheme.classList = localStorage.getItem('theme');
// if (localStorage.getItem('theme') === Theme.DARK) {
//   localStorage.getItem('theme');
// }

if (localStorage.getItem('theme') === Theme.DARK) {
    checkboxEl.checked = true;
}
checkboxEl.addEventListener('change', onInputChangeTheme);

function onInputChangeTheme() {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        localStorage.removeItem('theme', Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        bodyTheme.classList.remove(Theme.LIGHT);
        bodyTheme.classList.add(Theme.DARK);
        
    } if (localStorage.getItem('theme') === Theme.DARK) {
            localStorage.removeItem('theme', Theme.DARK);
            localStorage.setItem('theme', Theme.LIGHT);
            bodyTheme.classList.remove(Theme.DARK);    
            bodyTheme.classList.add(Theme.LIGHT);   
        }
};


// bodyTheme.classList = localStorage
//     ? localStorage.getItem('theme')
//     : localStorage.getItem('theme')===Theme.LIGHT;
// const savedLocal = localStorage.getItem('theme');
// bodyTheme.classList = savedLocal;
// }

// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 2 }));


// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);