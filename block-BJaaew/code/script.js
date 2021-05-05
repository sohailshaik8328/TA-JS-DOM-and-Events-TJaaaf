let starksBtn = document.querySelector('.starksBtn');
let lannistersBtn = document.querySelector('.lannistersBtn');
let baratheonsBtn = document.querySelector('.baratheonsBtn');
let targaryensBtn = document.querySelector('.targaryensBtn');
let grayjoysBtn = document.querySelector('.grayjoysBtn');
let tyrellsBtn = document.querySelector('.tyrellsBtn');
let tullysBtn = document.querySelector('.tullysBtn');
let redwyneBtn = document.querySelector('.redwyneBtn');
let freysBtn = document.querySelector('.freysBtn');
let arrynsBtn = document.querySelector('.arrynsBtn');
let dothrakysBtn = document.querySelector('.dothrakysBtn');

// let buttons = document.querySelectorAll('.buttons')
// buttons.forEach((button) => {
//     if(button.innerHTML == 'Starks'){
//         button.addEventListener('click', handleButton)

//         function handleButton(button){
//             got.houses.forEach((house) => {
//                 if(house.name === 'Starks'){
//                     house.people.map((person) => {
//                         createUI(person);
//                     })
//                 }
                
//             })
//         }
//     }
// })

let search = document.querySelector('#search')
let ul = document.querySelector('ul');


function handleStarks(){
    got.houses.forEach((house) => {
        if(house.name === 'Starks'){
            house.people.map((person) => {
                createUI(person);
            })
        }
        
    })
}

function handleLannisters(){
    got.houses.forEach((house) => {
        if(house.name === 'Lannisters'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}
function handleBaratheons(){
    got.houses.forEach((house) => {
        if(house.name === 'Baratheons'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}
function handleTargaryens(){
    got.houses.forEach((house) => {
        if(house.name === 'Targaryens'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}
function handleGrayjoys(){
    got.houses.forEach((house) => {
        if(house.name === 'Greyjoys'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}

function handleTyrells(){
    got.houses.forEach((house) => {
        if(house.name === 'Tyrells'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}


function handleTullys(){
    got.houses.forEach((house) => {
        if(house.name === 'Tullys'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}

function handleRedwyne(){
    got.houses.forEach((house) => {
        if(house.name === 'Redwyne'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}


function handleFreys(){
    got.houses.forEach((house) => {
        if(house.name === 'Freys'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}


function handlearryns(){
    got.houses.forEach((house) => {
        if(house.name === 'Arryns'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}

function handledothrakyns(){
    got.houses.forEach((house) => {
        if(house.name === 'Dothrakis'){
            house.people.map((person) => {
                createUI(person);
            })
        }
    })
}


function createUI(person){
    let li = document.createElement('li');
    li.classList.add('li');

    let image = document.createElement('img');
    image.classList.add('image');
    image.src = person.image;

    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    h2.innerText = person.name;

    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerText = person.description;

    let knowMoreBtn = document.createElement('button');
    knowMoreBtn.classList.add('knowMoreBtn');
    knowMoreBtn.innerText = 'KNOW MORE!';

    li.append(image, h2, desc, knowMoreBtn);
    ul.append(li)
}

function handleSearch(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ""){
        got.houses.forEach((house) => {
            if(house.name.includes('Starks')){
                house.people.filter((person) => {
                    createUI(person);
              })
            }else if(house.name.includes('Lannisters')){
                house.people.filter((person) => {
                    createUI(person);

              })
            }
        })
    }
}

starksBtn.addEventListener('click', handleStarks);
lannistersBtn.addEventListener('click', handleLannisters);
baratheonsBtn.addEventListener('click', handleBaratheons);
targaryensBtn.addEventListener('click', handleTargaryens);
grayjoysBtn.addEventListener('click', handleGrayjoys);
tyrellsBtn.addEventListener('click', handleTyrells);
tullysBtn.addEventListener('click', handleTullys);
redwyneBtn.addEventListener('click', handleRedwyne);
freysBtn.addEventListener('click', handleFreys);
arrynsBtn.addEventListener('click', handlearryns);
dothrakysBtn.addEventListener('click', handledothrakyns);

search.addEventListener('keyup', handleSearch)