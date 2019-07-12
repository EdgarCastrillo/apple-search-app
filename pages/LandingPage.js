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
                    <p class="landing-page-bottom1">Stream 50 million songs ad‑free.</p>
                    <p class="landing-page-bottom2">Our vision for television.</p>
                    <p class="landing-page-bottom3">Get exclusive and original content.</p>
                    <p class="landing-page-bottom4">Download your favorite apps.</p>
                    </div>
    `;
    this.render();
};


LandingPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};