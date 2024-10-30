import { Input } from "../Input/index.js";
import { Select } from "../Select/index.js";
import { Checkbox } from "../../ui/Checkbox/index.js";
import { Button } from "../../ui/Button/index.js";

/**
 * @typedef {import('./../../widgets/Modal/types').ModalData} ModalData
 */

/**
 * @function Form
 * @param {ModalData} data
 * @returns {string}
 */

export const Form = (data) => {
  const { input, selectText, selects, checkbox, buttonText } = data;
  return `
    <form class="form" id="order">
      ${input.map((inputItem) => Input(inputItem)).join('')}
      ${Select(selectText, selects)}
      ${Checkbox(checkbox)}
      ${Button(buttonText, 'form__submit')}
    </form>
  `;
};
