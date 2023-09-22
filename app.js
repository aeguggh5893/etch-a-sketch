"use strict"

let color = 'black'
let draw = true;

document.addEventListener('DOMContentLoaded', function() {
    
    createBoard(16);

    let body = document.querySelector('body');
    body.addEventListener('click', drawMode);

    let blackButton = document.querySelector('#black');
    blackButton.addEventListener('click', blackColor);

    let rainbowButton = document.querySelector('#rainbow');
    rainbowButton.addEventListener('click', rainbowColor);

    let eraseButton = document.querySelector('#erase');
    eraseButton.addEventListener('click', eraser);

    let changeButton = document.querySelector('#change-size');
    changeButton.addEventListener('click', changeSize);

    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearBoard);

    let rangeBar = document.querySelector('#range-bar');
    rangeBar.addEventListener('input', rangeNumber)
    rangeBar.addEventListener('mouseup', rangeValue);
    
});

function createBoard(size) {
    let board = document.querySelector('.container');
    let header = document.querySelector('.header');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    header.lastElementChild.innerText = `Now Playing on ${size} x ${size} board!`;

    let boardSize = size * size;

    
    for (let i = 0; i < boardSize; i++) {
        let div = document.createElement('div');

        board.insertAdjacentElement('beforeend', div);
        div.classList.add('box');

        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = color;
        });

    };
};

function blackColor() {
    let divs = document.querySelectorAll('.box');

    divs.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    });
};

function rainbowColor() {
    let divs = document.querySelectorAll('.box');

    divs.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
        });
    });
};


function eraser() {
    let divs = document.querySelectorAll('.box');
    divs.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'white';
        });
    });
};

function changeSize() {
    let input = +prompt('Enter a value between 1 and 64');

    if (input >= 1 && input <= 64) {
        createBoard(input);
    } else {
        alert('Not a valid input, please enter a value between 1 and 64');
    };
};

function clearBoard() {
    let divs = document.querySelectorAll('.box');

    divs.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
};

function rangeNumber(e) {
    let bar = document.querySelector('.bar');
    let numberDisplay = bar.getElementsByTagName('h4')[1];
    numberDisplay.innerText = `Grid Size: ${e.target.value}`;
};

function rangeValue(e) {
    let value = e.target.value;
    createBoard(value);
};

function drawMode(e) {
    let drawing = document.querySelector('#draw');
    
    if (e.target.tagName != 'BUTTON' || e.target.tagName != 'INPUT') {
        draw = !draw;
    } 

    if (draw) {
        drawing.innerText = 'Draw Mode: On!';
    } else {
        drawing.innerText = 'Draw Mode: Off!';
    };

};