'use strict';

function ItunesAlbumService() {
    this.baseUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term='
};
ItunesAlbumService.prototype.getAllAlbums = async function() {
    var response = await fetch(`${this.baseUrl}pop&entity=album`);
    var data = await response.json();
    console.log(data);
    return data.results;
};

ItunesAlbumService.prototype.getAllMovies = async function() {
    var response = await fetch(`${this.baseUrl}comedy&entity=movie`);
    var data = await response.json();
    console.log(data);
    return data.results;
};

ItunesAlbumService.prototype.getAllBooks = async function() {
    var response = await fetch(`${this.baseUrl}comedy&entity=ebook`);
    var data = await response.json();
    console.log(data);
    return data.results;
};

ItunesAlbumService.prototype.getAllApps = async function() {
    var response = await fetch(`${this.baseUrl}games&entity=software`);
    var data = await response.json();
    console.log(data);
    return data.results;
};

var itunesAlbumServiceInstance = new ItunesAlbumService();