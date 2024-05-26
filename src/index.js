import "./style.css"
console.log('its working');

const actualYear = document.querySelector('.actual-year');

actualYear.innerHTML = new Date().getFullYear();