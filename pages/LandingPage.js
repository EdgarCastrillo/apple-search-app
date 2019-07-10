'use strict';

function LandingPage(parentElement) {
    this.parentElement = parentElement;
    this.linksCards = [{
            name: 'Music',
            url: '/albums'
        },
        {
            name: 'Movies',
            url: '/'
        },
        {
            name: 'Books',
            url: '/'
        },
        {
            name: 'Apps',
            url: '/'
        }
    ];
};

LandingPage.prototype.generate = function() {
    this.elements = `
      <header class="title">
        <h1>What are you looking for?</h1>
      </header>
  `;
    this.render();
    this.elements += `<section class="grid-cards">
                         `;
    this.linksCards.forEach((link) => {
        this.elements += `
          <article class="grid-cards-options">
            <a href="#0" url=${link.url}>${link.name}</a>
          </article>
        `;
    });
    this.elements += `
                    </section>
    `;
    this.render();
};


LandingPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};