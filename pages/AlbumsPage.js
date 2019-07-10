'use strict';

function AlbumsPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.albums = null;
    this.loading = null;
};

AlbumsPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.conectToAPI();
    this.elements = `
    <header class="title" >
      <h1>Lose yourself in 50 million songs.</h1>
    </header>
    <section class="card-container">
`;
    this.albums.forEach((album) => {
        this.elements += `
        <article class="card-album">
          <img src="${album.artworkUrl100}" alt="">
          <h3>${album.collectionName}</h3>
          <p>${album.artistName}</p>
        </article>
        `
    });
    this.elements += '</section>'
    this.render();
};

AlbumsPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};

AlbumsPage.prototype.conectToAPI = async function() {
    this.albums = await itunesAlbumServiceInstance.getAllAlbums();
};