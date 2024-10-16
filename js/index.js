import { data } from './data.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';

const $root = document.querySelector('#root');

// if ($root) {
//   $root.insertAdjacentHTML('beforeend', Download(data.download));
// };

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));

const $logo = document.querySelector('#logo');

$logo?.addEventListener('click', () => {
  console.log('clickedLogo');
});
