import menuTmp from './templates/menu.hbs';
import menuTmpOne from './templates/menuOne.hbs';
import menuTmpData from './menu.json';

import './styles.css';

const iconTmp = document.querySelector('.js-menu');
const markup = menuTmp(menuTmpData);
iconTmp.insertAdjacentHTML('beforeend', markup);
console.log(menuTmp(menuTmpData));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 2 }));


// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);