/**
 * @function Button
 * @param {string} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Button = (data, className) => `
  <button class="${className}"
    type="button"
    id="order-open">
      ${data}
  </button>
`;
