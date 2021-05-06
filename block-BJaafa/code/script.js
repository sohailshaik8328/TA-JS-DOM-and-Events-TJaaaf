let shortcut = document.querySelector('.shortcut');
let description = document.querySelector('.description')
let button = document.querySelector('button')

function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function handleClick() {
    let randomIndex = generateRandomNumber(data.length);
    let randomShortcut = data[randomIndex];

    shortcut.innerHTML = randomShortcut.shortcut;

    description.innerHTML = randomShortcut.description;
}

button.addEventListener('click', handleClick);