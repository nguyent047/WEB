/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log('Javascriptbestand Project WEB Alyssa Nguyen');

/* Filter Form */
var screenflowImg = document.querySelector('article section:nth-of-type(2) img');

function visible() {
    event.preventDefault();
    screenflowImg.classList.toggle('active');
}

screenflowImg.addEventListener('click', visible);