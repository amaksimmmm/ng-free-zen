/**
 * @function Developer
 * @returns {string} HTML
 */

export const Developer = (data) => `
  <div class="footer__dev">
    <a href="${data.url}">
      <img
        src="${data.contact}"
        alt="developer"
      />
    </a>
  </div>
`;
