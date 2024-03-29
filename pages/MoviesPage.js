'use strict';

function MoviesPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.movies = null;
    this.loading = null;
};

MoviesPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.conectToAPI();
    this.elements = `
    <header class="title" >
      <h1>Easily find what
      you want to watch.</h1>
    </header>
    <section class="card-container">
`;
    this.movies.forEach((movie) => {
        this.elements += `
        <article class="card-album">
          <img src="${movie.artworkUrl100}" alt="">
          <h3>${movie.trackName}</h3>
          <p>${movie.artistName}</p>
        </article>
        `
    });
    this.elements += '</section>'
    this.render();
};

MoviesPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};

MoviesPage.prototype.conectToAPI = async function() {
    this.movies = await itunesAlbumServiceInstance.getAllMovies();
};