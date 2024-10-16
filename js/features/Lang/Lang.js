import { IconLang } from '../../ui/Icons/IconLang/IconLang.js'

/**
 * @typedef {import('./types').LangData} LangData
 */

/**
 * @function Lang
 * @param {LangData[]} langList
 * @returns {string} HTML
 */

export const Lang = (langList) => `
  <label class="header__lang">
    ${IconLang()}
    <select id="lang">
      ${langList.map((langItem) => `
        <option value="${langItem.key}">
          ${langItem.name}
        </option>
      `).join('')}
    </select>
  </label>
`;
