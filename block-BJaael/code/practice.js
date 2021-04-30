// function countfunc(){
//     let h1 = document.querySelector('h1');
//     let inc = document.querySelector('.inc');
//     let dec = document.querySelector('.dec');
//     let reset = document.querySelector('.reset');

//     let count = 0;

//     inc.addEventListener('click', function(){
//         count += 1;
//         h1.innerHTML = count;
//     })

//     dec.addEventListener('click', function(){
//         count -= 1;
//         h1.innerHTML = count    
//     })

//     reset.addEventListener('click', function(){
//         count  = 0;
//         h1.innerHTML = count
//     })
//     h1.innerHTML = count;
// }
// // countfunc();

const COLORS = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green"
]

let root = document.querySelector('.buttons')
let h1 = document.querySelector('.h1')
function handleClick(colorText, e){
    if(e.shiftKey === true){
        h1.innerHTML = colorText;
        h1.style.background = colorText;
    }else{
        h1.innerHTML = "Use shift key to change color"
    }
   
}

COLORS.forEach((color) => {
    let div = document.createElement('div')
    div.classList.add('box')

    div.addEventListener('click', function(){
        handleClick(color, event);
    })
    div.style.background = color;
    root.append(div)

})