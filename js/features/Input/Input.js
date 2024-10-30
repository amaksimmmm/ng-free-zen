/**
 * @typedef {import ('./types').InputData} InputData
 */

/**
 * @function Input
 * @param {InputData} input
 * @returns {string}
 */

export const Input = (input) => {
  const { type, placeholder, id } = input;
  return `
    <label class="form__field">
      <input
        type="${type}"
        placeholder="${placeholder}"
        id="${id}"
      />
    </label>
  `;
};
