let first = document.querySelector('.first');
let second = document.querySelector('.second');

function handleFirst(){
    randomBgColor();
}

function handleSecond(){
    randomBgColor2();
}

first.addEventListener('click', handleFirst);
second.addEventListener('mousemove', handleSecond)


function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(bgColor);
   first.style.backgroundColor = bgColor;

} 

function randomBgColor2() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(bgColor);
   second.style.backgroundColor = bgColor;

} 

