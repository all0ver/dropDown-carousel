import './css/style.css';
import './css/dropDown.css';

import { dropDown } from './modules/dropDown';

const dropDownBtn = document.querySelector(".dropBtn");

dropDownBtn.addEventListener("click", dropDown);
