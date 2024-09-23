const heading = document.createElement('h1');
heading.textContent = 'This is first header!';
document.body.appendChild(heading);

const button = document.createElement('button');
button.classList.add('header-button');
button.textContent = 'Change header';
document.body.appendChild(button);

button.addEventListener('click', () =>{
    heading.textContent = 'Changed successfully!';
});

