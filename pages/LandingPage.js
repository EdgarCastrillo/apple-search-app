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
                    <div class="landing-page-bottom">
                    <p>Stream 50 million songs ad‑free.</p>
                    <p>Our vision for television.</p>
                    <p>Get exclusive and original content.</p>
                    <p>Download your favorite apps.</p>
                    </div>
    `;
    this.render();
};


LandingPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};

// // Switch dark & light mode

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);