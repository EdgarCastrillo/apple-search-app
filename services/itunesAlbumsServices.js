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

var itunesAlbumServiceInstance = new ItunesAlbumService();

itunesAlbumServiceInstance.getAllAlbums();