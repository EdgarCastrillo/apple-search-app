'use strict';

function Router() {
    this.page = null;
};

Router.prototype.buildDOM = function(url, parentElement) {

    switch (url) {
        case '/':
            this.generateLandingPage(parentElement);
            break;
        case '/albums':
            this.generateAlbumsPage(parentElement);
            break;
        case '/movies':
            this.generateMoviesPage(parentElement);
            break;
        case '/books':
            this.generateBooksPage(parentElement);
            break;
        case '/apps':
            this.generateAppsPage(parentElement);
            break;
        default:
            this.generateLandingPage(parentElement);
    };
};

Router.prototype.generateLandingPage = function(parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate();
};

Router.prototype.generateAlbumsPage = function(parentElement) {
    this.page = new AlbumsPage(parentElement);
    this.page.generate();
};

Router.prototype.generateMoviesPage = function(parentElement) {
    this.page = new MoviesPage(parentElement);
    this.page.generate();
};

Router.prototype.generateBooksPage = function(parentElement) {
    this.page = new BooksPage(parentElement);
    this.page.generate();
};

Router.prototype.generateAppsPage = function(parentElement) {
    this.page = new AppsPage(parentElement);
    this.page.generate();
};

var routerInstance = new Router();