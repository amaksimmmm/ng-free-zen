import { data } from './data.js';
import { Download } from './widgets/Download/Download.js';

const $root = document.querySelector('#root');

if ($root) {
  $root.insertAdjacentHTML('beforeend', Download(data.download));
};

// $root?.insertAdjacentHTML('beforeend', Download(data.download));
