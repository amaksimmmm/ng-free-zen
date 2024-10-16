import { IconMoon } from '../../ui/Icons/IconTheme/IconMoon/IconMoon.js'

/**
 * @function Theme
 * @param {string}
 * @returns {string} HTML
 */

export const Theme = () => `
  <button class="header__theme"
    type="button"
    id="theme"
    data-theme="ligth"
  >
    ${IconMoon()}
  </button>
`;
