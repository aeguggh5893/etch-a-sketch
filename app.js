"use strict"

const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class','button-container');
body.appendChild(buttonContainer);

const button = document.createElement('button');
button.setAttribute('id','button');
button.textContent = 'Adjust Grid';
buttonContainer.appendChild(button);

const buttonColor = document.createElement('button');
buttonColor.setAttribute('id','button');
buttonColor.textContent = 'Random Colors';
buttonContainer.appendChild(buttonColor);

const actualContainer = document.createElement('div');
actualContainer.setAttribute('class', 'big-container');
body.appendChild(actualContainer);


// const div = document.createElement('div');
// div.setAttribute('class', 'container');






let row1 = "";

for (let i = 0; i < 16; i++) {
    row1 += '<div class="square"></div>';
};

// div.innerHTML = row1;


let divs;

for (let i = 0; i < 16; i++) {
  divs = document.createElement('div');
  divs.setAttribute('class', 'container');
  actualContainer.appendChild(divs);
  divs.innerHTML = row1;
  
}


const squares = document.querySelectorAll('.square');



function changeColor() {
    this.classList.replace('square','squareBlack');
};



squares.forEach(square => {
    square.addEventListener('mouseover', changeColor)
})



function adjustGrid() {
    let gridSize = +prompt('Enter a grid size');
    
    clearGrid();

    redeclareGrid(gridSize);

};

function clearGrid() {
    const sqElements = document.querySelectorAll('.square');
    const containerElements = document.querySelectorAll('.container');

    sqElements.forEach(item => item.remove());
    containerElements.forEach(item => item.remove());
};

function redeclareGrid(num) {
    let rdq = "";
    let rdqDivs;

        for (let i = 0; i < num; i++) {
            rdq += '<div class="square"></div>';
        };

        

        for (let i = 0; i < num; i++) {
          rdqDivs = document.createElement('div');
          rdqDivs.setAttribute('class', 'container');
          actualContainer.appendChild(rdqDivs);
          rdqDivs.innerHTML = rdq;
        }

        const rdqSquares = document.querySelectorAll('.square');

        rdqSquares.forEach(square => {
            square.addEventListener('mouseover', changeColor)
        });
}

function getRainbow() {
    const randomColorz = Math.floor(Math.random()*16777215).toString(16);
  
    this.style.backgroundColor = "#" + randomColorz;
  
    
}

function randomColors() {
    const classSquares = document.querySelectorAll('.square');

    classSquares.forEach(item => item.classList.replace('square', 'squareRandom'));

    classSquares.forEach(square => {
        square.addEventListener('mouseover', getRainbow)
    });
}

button.addEventListener('click', adjustGrid);
buttonColor.addEventListener('click', randomColors());


