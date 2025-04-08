/**
 * @function toggleMenuBurger
 * @returns {void}
 */

export const toggleMenuBurger = () => {
  const $menuNav = /** { HTMLElement | null } */ document.querySelector('.nav');
  const $burgerBtn = /** { HTMLElement | null } */ document.querySelector('#burger');
  // const body = document.body;

  if (!$menuNav || !$burgerBtn) return

    $menuNav.classList.toggle('active');
    $burgerBtn.classList.toggle('active');
    // body.classList.toggle('lock');
};
