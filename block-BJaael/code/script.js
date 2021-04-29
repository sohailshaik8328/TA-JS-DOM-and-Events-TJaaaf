let table = document.querySelector('table');
// let tbody = document.querySelector('tbody');
// let tr = document.querySelector('tr')
// let td = document.querySelectorAll('td')
// tr.append(td)
// tbody.append(tr)
// table.append(tbody)


function handleTd(){
    let randomColor = generateRandomColor();
    table.style.background = randomColor
}

function generateRandomColor(){
    // let x = Math.floor(Math.random() * 256);
    // let y = Math.floor(Math.random() * 256);
    // let z = Math.floor(Math.random() * 256);

    // let bgColor = 'rgb(' + x + ',' + y + ',' + z  + ')';
    // table.style.background = bgColor;
    let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        let randomNumber = Math.floor(Math.random() * 16); 
        color += hexCharacters[randomNumber];
    }
    return color;
}

table.addEventListener('click', handleTd);