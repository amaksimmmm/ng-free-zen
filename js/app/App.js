import { Header } from './../widgets/index.js';
import { Download } from './../widgets/index.js';
import { Warranty } from './../widgets/index.js';
import { Care } from './../widgets/index.js';
import { Cashback } from './../widgets/index.js';
import { Clients } from './../widgets/index.js';
import { Footer } from './../widgets/index.js';
import { Modal } from './../widgets/index.js';

/**
 * @typedef {import('../../js/types.ts').AppData} AppData
 */

/**
 * @function App
 * @param {AppData} data
 * @return {string} HTML
 */

export const App = (data) => {
  return `
    ${Header(data.primaryInfo)}
    ${Download(data.download)}
    ${Warranty(data.warranty)}
    ${Care(data.care)}
    ${Cashback(data.cashback)}
    ${Clients(data.clients)}
    ${Footer(data.secondaryInfo)}
    ${Modal(data.modal)}
  `;
};
