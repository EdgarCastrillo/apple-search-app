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
            <a href="#0" url=${link.url}> <img src="./img/apple-logo.png" url=${link.url} alt"Logo Apple">${link.name}</a>
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
};

Navbar.prototype.render = function()  {
    //añadir elementos al DOM
    this.parentElement.innerHTML = this.elements;
};