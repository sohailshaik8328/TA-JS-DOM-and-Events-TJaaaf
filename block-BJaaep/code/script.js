let boxes1 = document.querySelector('.boxes1')
let wrapper = document.querySelector('.wrapper')
let container = document.querySelector('.container')


let count = 0;

for(let i = 0 ; i < 12 ; i++){
    let li = document.createElement('li');
    li.classList.add('box')
    boxes1.append(li)
    wrapper.append(boxes1)
    container.append(wrapper)

    li.addEventListener('click', function(){
        count += 1;
      let text =   li.innerText = count

        return text;
        //  setInterval(() => {
        //     text.style.display = 'none'
        // }, 2000);
    })


}



