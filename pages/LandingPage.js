'use strict';

function LandingPage(parentElement) {
    this.parentElement = parentElement;
    this.linksCards = [{
            name: 'Music',
            url: '/albums'
        },
        {
            name: 'Movies',
            url: '/movies'
        },
        {
            name: 'Books',
            url: '/books'
        },
        {
            name: 'Apps',
            url: '/apps'
        }
    ];
};

LandingPage.prototype.generate = function() {
    this.elements = `
      <header class="title">
        <h1 class="flow">What are you looking for?</h1>
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
                    <div class="landing-page-bottom">
                    <p id="in-out-1">Stream 50 million songs ad‑free.</p>
                    <p id="in-out-2">Our vision for television.</p>
                    <p id="in-out-3">Get exclusive and original content.</p>
                    <p id="in-out-4">Download your favourite apps.</p>
                    </div>
    `;
    this.render();
};


LandingPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};