const heading = document.createElement('h1');
heading.textContent = 'List element:';
document.body.appendChild(heading);

const button = document.createElement('button');
button.classList.add('header-button');
button.textContent = 'Add element';
document.body.appendChild(button);

const container = document.createElement('div');
container.classList.add('container-elements');
document.body.appendChild(container);


button.addEventListener('click', () =>{
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');

    const elementCount = container.childElementCount + 1;
    newElement.textContent = `Елемент ${elementCount}`;

    container.appendChild(newElement);
});



