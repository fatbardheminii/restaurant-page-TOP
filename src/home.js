function createHome(){
    const home = document.createElement('div');
    home.id = 'home';
    home.classList.add("active-module");

    const h1 = document.createElement('h1');
    h1.textContent = 'Sweeten your day at \n';

    const span = document.createElement('span');
    span.id = 'h1-span';
    span.innerHTML = 'Dreamy <br> Desserts';

    h1.appendChild(span);
    home.appendChild(h1);

    return home;
}

function loadHome(){
    const content = document.querySelector('#content');
    content.appendChild(createHome());
}

export default loadHome;

