function main(){
    let inputText = document.querySelector('#input');
let ul = document.querySelector('ul');
let completedBtn = document.querySelector('.compltedBtn');
let activeBtn = document.querySelector('.activeBtn')
let allBtn = document.querySelector('.allBtn')
let clear_completed = document.querySelector('.clear_completed')
let count_div = document.querySelector('.count_div')

let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

let count = 0;

function handleInput(event){
    // event.preventDefault();
    let value = event.target.value;

    if(event.keyCode === 13 && value !== ""){
        let todo = {
            name : value,
            isDone : false,
        };
        allTodos.push(todo);
       event.target.value = "";

        createUI(allTodos, ul);
    }

}

function handleDelete(event){
    // console.log(event.target)
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    // count = count - 1
    // count_div.innerText = `${count} Items left`;
    createUI(allTodos, ul);
}

function handleToggle(event){
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
  
    localStorage.setItem('todos', JSON.stringify(allTodos));

    createUI(allTodos, ul);


}


function createUI(data, ulElm){
    ulElm.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement('li');
        li.classList.add('li')
        li.classList.add('flex')

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isDone;
        checkbox.classList.add('checkbox');

        checkbox.setAttribute('data-id', index)
        checkbox.addEventListener('input', handleToggle)

        let h2 = document.createElement('h2');
        h2.classList.add('h2');
        h2.innerText = todo.name;

        let closeIcon = document.createElement('i')
        closeIcon.className = "fas fa-times";
        closeIcon.classList.add('closeIcon')

        closeIcon.addEventListener('click', handleDelete)
        closeIcon.setAttribute('data-id', index)

        
        if(checkbox.checked == true){
            h2.style.textDecoration = 'line-through'
            h2.style.color = 'gray'
        }

        completedBtn.addEventListener('click', () => {
            if(checkbox.checked == true){
                li.style.display = 'inline-flex'
            }else{
                li.style.display = 'none'
            }
        })

        activeBtn.addEventListener('click', () => {
            if(checkbox.checked == false){
                li.style.display = 'inline-flex'
            }else{
                li.style.display = 'none'
            }
        })

        allBtn.addEventListener('click', () => {
            li.style.display = 'inline-flex'
        })

        clear_completed.addEventListener('click', () => {
            if(checkbox.checked == true){
                li.remove();
            }
        })

        localStorage.setItem('todos', JSON.stringify(allTodos));

        li.append(checkbox, h2, closeIcon)
        ulElm.append(li)

    })
    count  = count + 1 ;
    count_div.innerText = `${count} Items left`;

    
    
}

inputText.addEventListener('keyup', handleInput);


}

main();