/**
 * @typedef {import('./types').SelectData} SelectData
 */

/**
 * @function Select
 * @param {SelectData[]} selects
 * @param {string} selectText
 * @returns {string}
*/

export const Select = (selectText, selects) => {
  return `
    <label class="form__field">
      <span>
        ${selectText}
      </span>
      <select id="connection">
        ${selects.map((selectItem) => `
          <option value="${selectItem.value}">
            ${selectItem.optionText}
          </option>
        `).join('')}
      </select>
    </label>
  `;
};
