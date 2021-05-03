let form = document.querySelector('form');
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')

let userInfo = {};
function handleSubmit(event){
    event.preventDefault();
    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.selection = form.elements.selection.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.genre = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    createModal()
}

function createModal(){
    let div = document.createElement('div');
    div.classList.add('box');

    let name = document.createElement('h2');
    name.append( `Hello ${userInfo.name}`);

    let email = document.createElement('h3');
    email.append(`Email : ${userInfo.email}`);

    let selection = document.createElement('h3');
    selection.append(`Selection : ${ userInfo.selection}`);

    let color = document.createElement('h3');
    color.append( `color : ${userInfo.color}`);

    let range = document.createElement('h3')
    range.append( `Rating : ${ userInfo.range}`)

    let genre = document.createElement('h3')
    genre.append( `Genre : ${userInfo.genre}`)

    let terms = document.createElement('h3')
    terms.append(`Terms : ${userInfo.terms}`)

    div.append(name, email,selection, color, range, genre, terms)

    modal.append(div )

    modal.style.display = 'block'
}

form.addEventListener('submit', handleSubmit)

close.addEventListener('click', () => {
    modal.style.display = 'none'
    // modal.innerText = ""
    modal.close.style.display = 'block'
})