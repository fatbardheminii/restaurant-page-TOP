import "./style.css";
import loadHome from "./home";
import loadMenu from './menu.js';
import loadAbout from "./about.js";

const buttons = document.querySelectorAll("button");

(function getActualYear() {
  const actualYear = document.querySelector(".actual-year");
  actualYear.innerHTML = new Date().getFullYear();
})();

function setActiveButton(button) {
  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove("active-btn");
    }
  });

  button.classList.add("active-btn");
}

function setActiveModule(button){
    const content = document.querySelector("#content");
    content.innerHTML = '';
    setActiveButton(button);
        if(button.id === 'home-btn'){
            loadHome();
        } else if(button.id === 'menu-btn'){
            loadMenu();
        } else {
            loadAbout();
        }
}

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    setActiveModule(event.currentTarget);
  });
});


(function initializeWebsite() {
    loadHome();
})()

