import { IconApple } from '../Icons/IconApple/index.js';
import { IconGoogle } from '../Icons/IconGoogle/index.js';
import { IconIn } from '../Icons/IconIn/IconIn.js';

/**
 * @typedef { import ('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} dataLink
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (dataLink, className = '') => {
  const { url, type, content } = dataLink;
  const iconMap = {
    apple: IconApple(),
    google: IconGoogle(),
    Linkedin: IconIn(),
  };

  return `
    <a class="${className}" href="${url}">
      ${type === 'image' ? iconMap[content] : ''}
      ${type === 'text' ? content : ''}
    </a>
  `;
};
