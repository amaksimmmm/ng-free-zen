/**
 * @typedef {import ('./types').CheckboxData} CheckboxData
 */

/**
 * @function Checkbox
 * @param {CheckboxData} checkbox
 * @returns {string}
 */

export const Checkbox = (checkbox) => `
  <label class="form__checkbox">
    <input type="checkbox" id="policy"/>
    <a href="${checkbox.url}" target="_blank">
      ${checkbox.content}
    </a>
  </label>
`;
