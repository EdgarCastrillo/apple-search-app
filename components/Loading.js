'use strict';

function Loading(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
};

Loading.prototype.generate = function() {
    this.elements = `
    <div class="loader">
        <p>Wait...</p>
    </div>
`
    this.render();
};

Loading.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
};