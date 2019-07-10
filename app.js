'use strict';

function main() {
    var ENTRY_POINT = '/';
    var layoutInstance = null;
    var navbarInstance = null;
    var links = [{
            name: 'Search',
            url: '/'
        },
        // {
        //     name: 'Albums',
        //     url: '/albums'
        // }
    ];

    var rootElement = document.querySelector('#root');

    generateLayout();
    generateNavbar();
    activateRouter();
    addListennersToNavbar();

    function addListennersToNavbar() {
        var anchors = document.querySelectorAll('a');
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', changePage);
        })
    };

    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();
    };

    function generateNavbar() {
        navbarInstance = new Navbar(layoutInstance.header, links);
        navbarInstance.generate();
    };

    function activateRouter() {
        routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
    };

    function changePage(event) {
        var url = event.target.attributes.url.value;
        routerInstance.buildDOM(url, layoutInstance.main);
        addListennersToNavbar();
    };
};

// MacOS dark mode 
// window.matchMedia('(prefers-color-scheme: dark)')

window.addEventListener('load', main);