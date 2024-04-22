
const button = document.querySelector('#meow');

let x = 1;

function createNewParagraph() {
const parent = document.querySelector('.container');

const pElement = document.createElement('p');
  
pElement.setAttribute('class', 'para');

const paraCount = 'This paragraph is number ' + x++;

const text = document.createTextNode(paraCount);
  
pElement.appendChild(text);
  
parent.appendChild(pElement);
}

button.onclick = createNewParagraph;
