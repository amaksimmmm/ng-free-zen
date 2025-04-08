import { dataEnFromAPI } from './api/index.js';

import { handleLogoClick } from './handlers.js';
import { handleLangsChange } from './handlers.js';
import { onThemeClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';
import { handleOrderOpenClick } from './handlers.js';
import { handleOrderCloseClick } from './handlers.js';
import { toggleMenuBurger } from './utils/Burger/index.js';

// import {
//   onThemeClick,
//   handleLogoClick,
//   handleBurgerClick,
//   handleLang
// } from './handlers.js';

/** @typedef {import('./types').AppData} AppData */

/**
 *@function addHandlers
 * @returns {void}
 */

export const addHandlers = () => {
  const $logo = document.querySelector('#logo');
  const $themeButton = document.querySelector('#theme');
  const $burgerBtn = document.querySelector('#burger');
  const $linkNav = document.querySelectorAll('[data-id="nav-link"]');
  const $orderOpen = document.querySelector('#order-open');
  const $closeModal = document.querySelector('#close');
  const $Lang = document.querySelector('#lang');

  $logo.addEventListener('click', handleLogoClick);
  $themeButton?.addEventListener("click", (event) => onThemeClick(event, dataEnFromAPI.clients.brands));
  $burgerBtn.addEventListener('click', toggleMenuBurger);
  $linkNav?.forEach(($linkNav) => $linkNav.addEventListener('click', handleBurgerClick));
  $orderOpen?.addEventListener('click', handleOrderOpenClick);
  $closeModal?.addEventListener('click', handleOrderCloseClick);
  $Lang?.addEventListener('change', handleLangsChange);

  // console.log($Langs);

};
