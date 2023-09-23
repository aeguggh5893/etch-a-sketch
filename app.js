"use strict"

let color = 'black'
let draw = false;

document.addEventListener('DOMContentLoaded', function() {
    
    createBoard(16);

    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.tagName != 'BUTTON') {
            draw = !draw;
            let drawing = document.querySelector('#draw');

            if (draw) {
                drawing.innerText = 'Draw Mode: On!';
            } else {
                drawing.innerText = 'Draw Mode: Off!';
            };
        };
    });

    let blackButton = document.querySelector('#black');
    // blackButton.addEventListener('click', setColor());
    blackButton.addEventListener('click', blackColor);

    let rainbowButton = document.querySelector('#rainbow');
    // rainbowButton.addEventListener('click', setColor());
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

        // div.addEventListener('mouseover', colorDiv);

        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });

        board.insertAdjacentElement('beforeend', div);
        div.classList.add('box');


    };
};

// function colorDiv() {
//     if (color === 'random') {
//         this.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
//     } else {
//         this.style.backGroundColor = 'black';
//     };
// };

// function setColor(e) {
//     if (e.target.id === 'black') {
//         color = 'black';
//     } else {
//         color = 'random';
//     };
// };



function blackColor() {
    

    let divs = document.querySelectorAll('.box');
    color = 'black';
    
    
    divs.forEach((item) => {
        
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    
    });
    
    let ink = document.querySelector('#ink');
    ink.innerText = 'Using Ink: Black!';

};

function rainbowColor() {
    
    let divs = document.querySelectorAll('.box');
    color = 'random';

    

    divs.forEach((item) => {
        
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
        });
    
    });

    let ink = document.querySelector('#ink');
    ink.innerText = 'Using Ink: Rainbow!'

};


function eraser() {
    let divs = document.querySelectorAll('.box');
    divs.forEach((item) => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'white';
        });
    });

    let ink = document.querySelector('#ink');
    ink.innerText = 'Using Eraser!';
};

function changeSize() {
    let input = +prompt('Enter a value between 1 and 64');

    if (input >= 1 && input <= 64) {
        createBoard(input);
    } else {
        alert('Not a valid input, please enter a value between 1 and 64');
    };

    let bar = document.querySelector('.bar');
    let numberDisplay = bar.getElementsByTagName('h4')[2];
    let rangeBarValue = bar.lastElementChild;
    numberDisplay.innerText = `Grid Size: ${input}`;
    rangeBarValue.value = input;

};

function clearBoard() {
    let divs = document.querySelectorAll('.box');

    divs.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
};

function rangeNumber(e) {
    let bar = document.querySelector('.bar');
    let numberDisplay = bar.getElementsByTagName('h4')[2];
    numberDisplay.innerText = `Grid Size: ${e.target.value}`;
};

function rangeValue(e) {
    let value = e.target.value;
    createBoard(value);
};

