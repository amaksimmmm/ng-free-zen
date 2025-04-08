import { dataEnFromAPI } from './api/index.js';
import { dataRuFromAPI } from './api/index.js';

import { App } from './app/App.js';
import { addHandlers } from './addHandlers.js';

import { IconSun } from './ui/Icons/IconTheme/IconSun/IconSun.js';
import { IconMoon } from './ui/Icons/IconTheme/IconMoon/IconMoon.js';

import { toggleMenuBurger } from './utils/Burger/ToggleMenuBurger.js';

/**
 * @typedef {import('./widgets/Clients/types').Client} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  /** @type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  if (!$brandNodes || !$themeButton || !$root) return;

  const currentTheme = $themeButton.dataset.theme;

  if (currentTheme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $root.dataset.theme = 'dark';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darksource;
    });
  }

  if (currentTheme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $root.dataset.theme = 'light';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightsource;
    });
  };
};

/**
 * @function handleLogoClick
 * @descripti logo button
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
};

/**
 * @function handleBurgerClick
 * @description burger menu opening-closing
 * @param {Event} event
 * @returns {void}
 */

export const handleBurgerClick = (event) => {
  event.preventDefault();

  /** @type {HTMLAnchorElement} */
  const idTarget = /** @type {HTMLAnchorElement} */ (event.target).hash;
  /** @type {HTMLElement | null} */
  const $targetElement = document.querySelector(idTarget);
  /** @type {HTMLElement | null} */
  const $header = document.querySelector('header');
  const headerHeight = $header?.offsetHeight || 0;

  if (!idTarget || !$targetElement) return;

  const positionTarget = $targetElement.getBoundingClientRect().top - headerHeight;

  window.scrollBy({
    top: positionTarget,
    behavior: 'smooth',
  });

  toggleMenuBurger();
};

/**
 * @function handleOrderOpenClick
 * @returns {void}
 */

export const handleOrderOpenClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.add('active');
};

/**
 * @function handleOrderCloseClick
 * @returns {void}
 */

export const handleOrderCloseClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.remove('active');
};

/**
   * @function handleLang
   * @description language
   * @param {Event} event
   * @returns {void}
   */

export const handleLangsChange = (event) => {
  const $langSelector = /** @type { HTMLSelectElement  | null } */ (event.target).value
  /** @type { HTMLElement | null } */
  const $root = document.querySelector('#root');

  if (!$root) return;

  const data = $langSelector === 'ru' ? dataRuFromAPI : dataEnFromAPI;
  $root.innerHTML = App(data);

  addHandlers(data);
};
