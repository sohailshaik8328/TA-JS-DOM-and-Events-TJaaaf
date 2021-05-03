
let userRoot = document.querySelector('.user-icons')
let computerRoot = document.querySelector('.computer-icons')
let output = document.querySelector('.output')
let reset = document.querySelector('.reset')

let dataSet = [
    {
        name : "rock",
        beats : "scissors"
    },
    {
        name : "scissors",
        beats : "paper"
    },
    {
        name : "paper",
        beats : "rock"
    }
]

let userSelected = {}, computerSelected = {};





function getWinner(user, computer){
    if(user.name === computer.name){
        output.innerText = "It's a Tie"
    }else if (user.beats === computer.name){
        output.innerText = 'You Win'
    }else{
        output.innerText = 'Computer Win'
    }

}

function getRandomNumber(max = 3){
    return Math.floor(Math.random() * max)
}



function createUserLayout(){
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
    
        i.className = `fa fa-hand-${icon.name}-o`
        li.append(i);

        if(userSelected.name === icon.name){
            li.classList.add('selected')
        }

        li.addEventListener('click', () => {
            userSelected = icon;

            computerSelected = dataSet[getRandomNumber()];
            // console.log(userSelected, computerSelected)

            getWinner(userSelected, computerSelected)
            createComputerLayout();
            createUserLayout();
        })

        userRoot.append(li)
    })
}

createUserLayout();


function createComputerLayout(){
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
    
        if(computerSelected.name === icon.name){
            li.classList.add('selected')
        }

        i.className = `fa fa-hand-${icon.name}-o`
        li.append(i);

        computerRoot.append(li)
    })
}

createComputerLayout();

reset.addEventListener('click', () => {
    userSelected = {};
    computerSelected = {};
    createUserLayout();
    createComputerLayout();
    output = ""
})

