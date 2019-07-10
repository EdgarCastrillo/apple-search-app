'use strict';

function Layout(root, style) {
    this.root = root;
    this.style = style;
    this.elements = null;
    this.header = null;
    this.main = null;
    this.footer = null;
};

Layout.prototype.generate = function() {
    this.elements = `
    <header id="site-header"></header>
    <main id="site-main"></main>
`;
    this.render();
    this.getContainers();
};

Layout.prototype.render = function() {
    this.root.innerHTML = this.elements;
};

Layout.prototype.getContainers = function() {
    this.header = document.querySelector('#site-header')
    this.main = document.querySelector('#site-main')
};


// Switch dark & light mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);