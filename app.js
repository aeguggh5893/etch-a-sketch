"use strict"

const body = document.querySelector('body');

const div = document.createElement('div');
div.setAttribute('id', 'container');

body.appendChild(div);

// const square = document.createElement('div');
// square.setAttribute('class', 'square');
// div.appendChild(square);

let row1 = "";

for (let i = 0; i < 4; i++) {
    row1 += '<div class="square"></div>';
};

div.innerHTML = row1;

let squares = document.querySelectorAll('.square');



function changeColor() {
    this.classList.toggle('squareBlack');
};

// square.addEventListener('click', changeColor);

squares.forEach(square => {
    square.addEventListener('click', changeColor)
})



