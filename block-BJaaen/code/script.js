// let rock = document.querySelector('.rock');
// let paper = document.querySelector('.paper');
// let scissor = document.querySelector('.scissor');
// let reset = document.querySelector('.reset')
// let name = document.querySelector('.name');
// let output = document.querySelector('.output')
// let result_score = document.querySelector('.result_score')


// let com_rock = document.querySelector('.com_rock')
// let com_paper = document.querySelector('.com_paper')
// let com_scissor = document.querySelector('.com_scissor')

// let computer = [com_rock, com_paper, com_scissor]

// // let randomCom = Math.floor(Math.random() * 3)



// let count = 0;

// rock.addEventListener('click', function(){
//     name.innerHTML =  '--- Rock';
//     count += 1
//     // count_div.innerHTML = count
    
// })

// paper.addEventListener('click', function(){
//     name.innerHTML = '--- Paper';
//     count += 1
//     // count_div.innerHTML = count
// })


// scissor.addEventListener('click', function(){
//     name.innerHTML = '--- Scissor';
//     count += 1
//     // count_div.innerHTML = count
// })

// reset.addEventListener('click', function(){
//     name.innerHTML = ""
//     output.innerHTML = ""
//     // count_div.innerHTML = 0;
    
// })

let selectionButtons = document.querySelectorAll('[data-selection]');
let finalColumn = document.querySelector('[data-final-column]')
let computerScoreSpan = document.querySelector('[data-computer-score]')
let yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name :'rock',
        beats : 'scissor'
    },
    {
        name :'paper',
        beats : 'rock'
    },
    {
        name :'scissor',
        beats : 'paper'
    }
]

selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
})

function makeSelection(selection){
    let computerSelection = randomSelection();
    let yourWinner = isWinner(selection, computerSelection)
    let computerWinner = isWinner(computerSelection, selection)
    console.log(computerSelection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

   if (yourWinner) incrementScore(yourScoreSpan)
   if(computerWinner)  incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
    let div = document.createElement('div')
    div.innerText = selection.name;
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)

}
function isWinner(selection, oppenentSelection){
    return selection.beats === oppenentSelection.name
}

function randomSelection(){
    let randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}




