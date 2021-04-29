let allBoxes = document.querySelector('.boxes');

function generateRandomColor(){
    let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        let randomNumber = getRandomNumber(16); 
        color += hexCharacters[randomNumber];
    }
    return color;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

// Create 500 boxes

for(let i = 0 ; i < 500 ; i++){
    let div = document.createElement('div');
    div.classList.add('box');
    // div.style.background = generateRandomColor();

    let h3 = document.createElement('h3');
    h3.classList.add('h3')
    let randomNum = getRandomNumber(500);
    h3.innerText = randomNum;

    div.append(h3)
    allBoxes.append(div)

}
// Add an event of mousemove to change each random number and color
let eachBox = document.querySelectorAll('.box')
let changeNum = document.querySelectorAll('.h3')
function handleMouse(){
    eachBox.forEach((box) => {
        box.style.background = generateRandomColor();
    })
    changeNum.forEach((num) => {
        num.innerHTML = getRandomNumber(500);
    })
}


allBoxes.addEventListener('mousemove', handleMouse)
