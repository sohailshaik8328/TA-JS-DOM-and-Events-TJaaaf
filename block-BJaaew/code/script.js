let ul = document.querySelector('ul');
let buttons = document.querySelector('.buttons')
let search = document.querySelector('#search')

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allTags = got.houses.map(house => house.name);
let activeHouse = "";
// console.log(allTags)

function createCards(data = []){
    ul.innerHTML = "";
    data.forEach((people) => {
    let li = document.createElement('li');
    li.classList.add('li');

    let image = document.createElement('img');
    image.classList.add('image');
    image.src = people.image;

    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    h2.innerText = people.name;

    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerText = people.description;

    let knowMoreBtn = document.createElement('button');
    knowMoreBtn.classList.add('knowMoreBtn');
    knowMoreBtn.innerText = 'KNOW MORE!';

    li.append(image, h2, desc, knowMoreBtn);
    ul.append(li)
    })
}

function createButtonsUI(tags = []){
    buttons.innerHTML = "";
    tags.forEach((tag) => {
    let li = document.createElement('li');
    li.classList.add('button');
    li.innerText = tag;
    if(activeHouse === tag){
        li.classList.add('active')

    }

    li.addEventListener('click', () => {
        activeHouse = tag;
        let peopleOfHouse = got.houses.find((house) => 
        house.name === tag).people || [];
        createCards(peopleOfHouse);
        createButtonsUI(allTags);
    })

   
    buttons.append(li)
    })
}

function handleSearch(event){
    let searchValue = event.target.value;
    let filteredPeople = allPeople.filter((person) => 
    person.name.toLowerCase().includes(searchValue.toLowerCase()));
    createCards(filteredPeople);
}

createCards(allPeople);
createButtonsUI(allTags);

search.addEventListener('input', handleSearch);




