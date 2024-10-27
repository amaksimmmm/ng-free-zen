import { Column } from './../../ui/Column/index.js';
import { IconFooterLogo } from '../../ui/Icons/IcomLogoFooter/IconLogoFooter.js';
import { Developer } from '../../ui/Developer/Developer.js';

/**
 * @typedef {import('./types').SecondaryInfoData} SecondaryInfoData
 */

/**
 * @function Footer
 * @param {SecondaryInfoData} data
 * @returns {string} HTML
 */

export const Footer = (data) => {
  const { columns, texts, developer } = data;
  return `
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${columns.map((column) => Column(column)).join('')}
        </div>
        <div class="footer__info">
          <div class="footer__logo">
            <a href="http://example.com">
              ${IconFooterLogo()}
            </a>
          </div>
          ${texts.map((text) => `
            <p class="footer__copy">
              ${text}
            </p>
            `).join('')}
            ${Developer(developer)}
        </div>
      </div>
    </footer>
  `;
};
