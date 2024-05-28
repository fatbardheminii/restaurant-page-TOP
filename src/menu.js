import cheesecakeImg from "./images/cheesecake.jpg";
import chocolateCakeImg from "./images/chocolate-cake.jpg";
import tiramisuCakeImg from "./images/tiramisu-cake.jpg";
import rouladeCakeImg from "./images/roulade-cake.jpg";
import baklavaImg from "./images/baklava.jpg";
import birthdayCakeImg from "./images/birthday-cake.jpg";

//get names from img path for h3 text Content
function capitalizeAndSplit(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createCakeItem(name, imagePath) {
  const cakeItem = document.createElement("div");
  cakeItem.classList.add("cake-item");

  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = capitalizeAndSplit(name);

  const h3 = document.createElement("h3");
  h3.textContent = capitalizeAndSplit(name);

  cakeItem.appendChild(img);
  cakeItem.appendChild(h3);

  return cakeItem;
}

function fillGrid() {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.appendChild(createCakeItem("cheesecake", cheesecakeImg));
  grid.appendChild(createCakeItem("chocolate-cake", chocolateCakeImg));
  grid.appendChild(createCakeItem("tiramisu-cake", tiramisuCakeImg));
  grid.appendChild(createCakeItem("roulade-cake", rouladeCakeImg));
  grid.appendChild(createCakeItem("baklava", baklavaImg));
  grid.appendChild(createCakeItem("birthday-cake", birthdayCakeImg));
  return grid;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("active-module");

  const h1 = document.createElement("h1");
  h1.textContent = "Enjoy our homemade Cakes";

  menu.appendChild(h1);
  menu.appendChild(fillGrid());
  return menu;
}

function loadMenu() {
  const content = document.querySelector("#content");
  content.appendChild(createMenu());
}

export default loadMenu;
