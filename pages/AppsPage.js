'use strict';

function AppsPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.apps = null;
    this.loading = null;
};

AppsPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.conectToAPI();
    this.elements = `
    <header class="title" >
      <h1>Games that redefine games.</h1>
    </header>
    <section class="card-container">
`;
    this.apps.forEach((app) => {
        this.elements += `
        <article class="card-album">
          <img src="${app.artworkUrl100}" alt="">
          <h3>${app.trackName}</h3>
          <p>${app.artistName}</p>
        </article>
        `
    });
    this.elements += '</section>'
    this.render();
};

AppsPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};

AppsPage.prototype.conectToAPI = async function() {
    this.apps = await itunesAlbumServiceInstance.getAllApps();
};