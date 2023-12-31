const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.textContent = "Hey I'm red!";
container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
const h1 = document.createElement('h1');
h1.textContent = "I'm a div";
div.appendChild(h1);
const p = document.createElement('p');
p.textContent = "ME TOO!";
div.appendChild(p);
container.appendChild(div);