import { IconClose } from '../../ui/Icons/IconClose/index.js';
import { Title } from './../../ui/Title/index.js';
import { Form } from './../../features/Form/Form.js';

/**
 * @typedef {import('./types').ModalData} ModalData
 */

/**
 * @function Modal
 * @param {ModalData} data
 * @returns {string} HTML
 */

export const Modal = (data) =>  `
  <div class="modal" id="modal">
    <div class="modal__body">
      <button class="modal__close" id="close">
        ${IconClose()}
      </button>
      ${Title(data.title, 'modal__title')}
      ${Form(data)}
    </div>
  </div>
`;
