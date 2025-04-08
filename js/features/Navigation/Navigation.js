/**
 * @typedef {import('./types').NavIteamData} NavIteamData
 */

/**
 * @function Navigation
 * @param {NavIteamData[]} navList
 * @returns {string} HTML
 */

export const Navigation = (navList) => `
  <ul class="nav" id="nav">
    ${navList.map((navItem) => `
      <li class="nav__item">
        <a href="#${navItem.key}" data-id="nav-link">
          ${navItem.name}
        </a>
      </li>
    `).join('')}
  </ul>
`;
