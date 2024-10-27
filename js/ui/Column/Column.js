import { Title } from '../Title/index.js';
import { Link } from '../Link/index.js';

/**
 * @typedef {import('./types').ColumnData} ColumnData
 */

/**
 * @function Column
 * @param {ColumnData} data
 * @returns {string} HTML
 */

export const Column = (data) => `
  <div class="column">
    ${Title(data.title, 'column__title')}
    <ul class="column__list">
      ${data.links.map((link) => `
        <li class="column__item">
          ${Link(link)}
        </li>
      `).join('')}
    </ul>
  </div>
`;
