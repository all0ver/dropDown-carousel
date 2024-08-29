import './css/style.css';
import './css/dropDown.css';
import './css/carousel.css';

import { dropDown } from './modules/dropDown.js';
import { next } from './modules/carousel.js';
import { previous } from './modules/carousel.js';
const dropDownBtn = document.querySelector(".dropBtn");
dropDownBtn.addEventListener("click", dropDown);

const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", next);
left.addEventListener("click", previous);
