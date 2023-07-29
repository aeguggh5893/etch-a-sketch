"use strict"

const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class','button-container');
body.appendChild(buttonContainer);

const button = document.createElement('button');
button.setAttribute('id','button');
button.textContent = 'Adjust grid';
buttonContainer.appendChild(button);

const actualContainer = document.createElement('div');
actualContainer.setAttribute('class', 'big-container');
body.appendChild(actualContainer);


const div = document.createElement('div');
div.setAttribute('class', 'container');






let row1 = "";

for (let i = 0; i < 16; i++) {
    row1 += '<div class="square"></div>';
};

div.innerHTML = row1;


let divs;

for (let i = 0; i < 16; i++) {
  divs = document.createElement('div');
  divs.setAttribute('class', 'container');
  actualContainer.appendChild(divs);
  divs.innerHTML = row1;
}


let squares = document.querySelectorAll('.square');



function changeColor() {
    this.classList.replace('square','squareBlack');
};



squares.forEach(square => {
    square.addEventListener('mouseover', changeColor)
})



