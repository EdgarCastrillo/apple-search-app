'use strict';

function Navbar(parentElement, links, style) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
};

Navbar.prototype.generate = function()  {
    //generar dinamicamente los elementos
    this.elements = `<nav>
                         <ul>`;
    this.links.forEach((link) => {
        this.elements += `
          <li>
            <a href="#0"> 
                <img src="./img/apple-logo.svg" url=${link.url} alt"Logo Apple">
                <h2 url=${link.url}>${link.name}</h2>
            </a>
          </li> 
        `;
    });
    this.elements += `</ul>
                        <div class="theme-switch-wrapper">
                          <label class="theme-switch" for="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div class="slider round"></div>
                          </label>
                        </div>
                    </nav>
    `;
    this.render();
    this.addEventListerToSwitch();
};

Navbar.prototype.render = function()  {
    //añadir elementos al DOM
    this.parentElement.innerHTML = this.elements;
};

Navbar.prototype.addEventListerToSwitch = function() {
    var inputSwitch = document.querySelector('#checkbox');
    var image = document.querySelector('nav img');
    const changeDarkMode = () => {
        if (image.attributes.src.value === './img/apple-logo-white.svg') {
            image.attributes.src.value = './img/apple-logo.svg'
        } else {
            image.attributes.src.value = './img/apple-logo-white.svg'
        }
        if (inputSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    inputSwitch.addEventListener('click', changeDarkMode);


}