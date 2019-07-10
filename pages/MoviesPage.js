'use strict';

function MoviesPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.albums = null;
    this.loading = null;
};

MoviesPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.conectToAPI();
    this.elements = `
    <header class="title" >
      <h1>Lose yourself  movies.</h1>
    </header>
    <section class="card-container">
`;
    this.albums.forEach((movie) => {
        this.elements += `
        <article class="card-album">
          <img src="${movie.artworkUrl100}" alt="">
          <h3>${movie.collectionName}</h3>
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
    this.movies = await itunesMovieServiceInstance.getAllMovies();
};