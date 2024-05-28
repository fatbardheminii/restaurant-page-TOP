function createIframeManually() {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.9949566338867!2d11.56520939419074!3d48.13913915510556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f6e1b4effd%3A0x53135f10bc66421d!2sStachus!5e1!3m2!1sde!2sde!4v1716719706462!5m2!1sde!2sde" 

  iframe.width = "600";
  iframe.height = "450";
  iframe.loading = 'lazy'
  iframe.allowFullscreen = '';
  iframe.referrerpolicy = "no-referrer-when-downgrade";
  return iframe;
}

function createParagraph(textContent, classes){
    const icon = document.createElement('i');
    icon.ariaHidden = true;
    icon.classList.add(...classes.split(" "));

    const paraContent = document.createTextNode(textContent);

    const paragraph = document.createElement('p');
    paragraph.appendChild(icon);
    paragraph.appendChild(paraContent);
    return paragraph;
}

function createAbout() {
  const about = document.createElement("div");
  about.id = "about";
  about.classList.add('active-module');

  const h1 = document.createElement("h1");
  h1.textContent = "Dreamy Desserts";

  about.appendChild(h1);
  about.appendChild(createIframeManually());
  about.appendChild(createParagraph("0123 4567 889", "fa-solid fa-phone"));
  about.appendChild(
    createParagraph("Mo-Sa: 11:00 - 20:00", "fa-regular fa-clock")
  );

  return about;
}

function loadAbout() {
    const content = document.querySelector("#content");
    content.appendChild(createAbout());
}

export default loadAbout;