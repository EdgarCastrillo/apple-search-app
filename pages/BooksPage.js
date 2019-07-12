'use strict';

function BooksPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.books = null;
    this.loading = null;
};

BooksPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.conectToAPI();
    this.elements = `
    <header class="title" >
      <h1>Reading Now. Your digital nightstand.</h1>
    </header>
    <section class="card-container">
`;
    this.books.forEach((book) => {
        this.elements += `
        <article class="card-album">
          <img src="${book.artworkUrl100}" alt="">
          <h3>${book.trackName}</h3>
          <p>${book.artistName}</p>
        </article>
        `
    });
    this.elements += '</section>'
    this.render();
};

BooksPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};

BooksPage.prototype.conectToAPI = async function() {
    this.books = await itunesAlbumServiceInstance.getAllBooks();
};