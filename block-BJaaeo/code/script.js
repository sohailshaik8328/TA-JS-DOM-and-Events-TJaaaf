let output = document.querySelector('.output')
let allBtns = document.querySelectorAll('button')

let initialValue = 0;


function handleBtnClick(event){
    // output.append(event.target.innerHTML)
    if(event.target.classList.contains("equal")){
        output.innerText = eval(output.innerText);
        return;
    }
    if(event.target.classList.contains("clear_operator")){
        output.innerText = initialValue;
        return;
    }

    if(output.innerText == initialValue){
        output.innerText = event.target.innerText;
    }else{
        output.innerText += event.target.innerText;
    }
   
}

allBtns.forEach((btn) =>{
    btn.addEventListener('click', handleBtnClick)
})

output.innerHTML = initialValue;





