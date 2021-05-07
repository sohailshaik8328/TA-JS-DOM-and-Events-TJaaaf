let form = document.querySelector('form')
let ul = document.querySelector('ul')
function handleSumbit(event){
    event.preventDefault();
    let movieName = event.target.elements.input.value

    let li = document.createElement('li')
    li.classList.add('flex')
    li.classList.add('li')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')

    let h2 = document.createElement('h2')
    h2.innerText = movieName;
    h2.classList.add('h2')

    let closeIcon = document.createElement('i')
    closeIcon.className = "fas fa-times"
    closeIcon.classList.add('closeIcon')

    closeIcon.addEventListener('click', () => {
        li.remove();
    })

    li.append(checkbox, h2, closeIcon)
    ul.append(li)




}

form.addEventListener('submit', handleSumbit)