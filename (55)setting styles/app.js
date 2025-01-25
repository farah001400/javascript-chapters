var watchMeChange = document.getElementById('text');
watchMeChange.style.color = "black";
watchMeChange.style.fontSize = "15px";
watchMeChange.style.border = "3px solid black";

function changeColor() {
    watchMeChange.style.color = watchMeChange.style.color === "black" ? 'green' : 'black';
}
function changeSize() {
    watchMeChange.style.fontSize = watchMeChange.style.fontSize === '15px' ? '25px' : '15px';
}
function changeBorder() {
    watchMeChange.style.border = watchMeChange.style.border === '3px solid black' ? '5px dashed blue' : '3px solid black';
}


//----------------------------------Practice-----------------------------------//
// var text = document.getElementById('text');
// text.style.color = 'black';
// text.style.fontSize = '20px';
// text.style.border = 'yellow solid 4px';

// function changeColor(){
//     text.style.color = text.style.color === 'black'? 'blue' : 'black';
// }
// function changeSize(){
//     text.style.fontSize = text.style.fontSize === '20px'? '30px': '20px';
// }
// function changeBorder(){
//     text.style.border = text.style.border === '4px solid yellow'? '5px dotted white': '4px solid yellow';
// }

//----------------------------------STYLING WIH USING JAVASCRIPT------------------------------ -->

// document.querySelector('.main').style.width = "70%";
// document.querySelector('.main').style.backgroundColor = 'pink'
// document.querySelector('.main').style.border = "8px groove pink";
// document.querySelector('.main').style.padding = "30px";
// document.querySelector('.main').style.textAlign = "center";
// document.querySelector('.main').style.margin = "20px auto";

//---------------OR-----------//
var main = document.querySelector('.main');
main.style.width = "70%";
main.style.backgroundColor = "pink";
main.style.border = "3px red solid";
main.style.padding = "30px";
main.style.textAlign = 'center';
main.style.margin = '15px auto';

element = document.querySelectorAll('.main');
console.log(element)