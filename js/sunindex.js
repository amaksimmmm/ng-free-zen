import { generateSunIcon } from './sunui/generateSunIcon.js';
import { generateMoonIcon } from './sunui/generateMoonIcon.js';

// const $app = document.querySelector('#app');
// const $themeButton = document.querySelector('#theme');

// const handleThemeButtonClick = (event) => {
//   const $themeButton = event.currentTarget;
//   const theme = $themeButton.dataset.theme;
//   console.log($themeButton);
//   console.log(theme);
//   if (theme === 'light') {
//     $themeButton.dataset.theme = 'dark';
//     $themeButton.innerHTML = generateSunIcon();
//     $app.classList.add('dark');
//     $app.classList.remove('light');
//   }
//   if (theme === 'dark') {
//     $themeButton.dataset.theme = 'light';
//     $themeButton.innerHTML = generateMoonIcon();
//     $app.classList.add('light');
//     $app.classList.remove('dark');
//   }
// };

// $themeButton.addEventListener('click', handleThemeButtonClick);

////////////////////////////////////////////////////////////////////////

const $app = document.querySelector('#app');
const $themeButton = document.querySelector('#theme');

const handleThemeButtonClick = (event) => {
  const $themeButton = event.currentTarget;
  const theme = $themeButton.dataset.theme;
  console.log($themeButton);
  console.log(theme);
  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = generateSunIcon();
    $app.classList.add('dark');
    $app.classList.remove('light');
  } else {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = generateMoonIcon();
    $app.classList.add('light');
    $app.classList.remove('dark');
  }
};

$themeButton.addEventListener('click', handleThemeButtonClick);

// const app = document.querySelector('.app');
// const themeButton = document.getElementById('theme');
// const themeImg = document.querySelector('#theme img');

// handleChangeIcon = () => {
//   themeButton.removeChild(themeImg);
//   themeButton.innerHTML = 'svg code?';
// }

// handleSwitchTheme = () => {
//   app.classList.toggle('light');
//   app.classList.toggle('dark');
//   handleChangeIcon();
// }

// themeButton = addEventListener('click', handleSwitchTheme);
