'use strict';

function ItunesMovieService() {
    this.baseUrl = 'https://itunes.apple.com/search?term='
};
ItunesMovieService.prototype.getAllMovies = async function() {
    var response = await fetch(`${this.baseUrl}thriller&entity=movie`);
    var data = await response.json();
    console.log(data);
    return data.results;
};

var ItunesMovieServiceInstance = new ItunesMovieService();

ItunesMovieServiceInstance.getAllMovies();