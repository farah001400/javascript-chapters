var container1 = document.getElementById('content1');
var paragraphs = container1.getElementsByTagName('p');
container1.style.border = '5px aqua groove';
container1.style.margin = '20px 0';
for(var i=0; i<paragraphs.length; i++){
    paragraphs[i].style.padding = '8px';
    paragraphs[i].style.fontFamily = 'algerian';
    paragraphs[i].style.fontSize = '1.3rem'
    paragraphs[1].style.color = 'blue';
}

var container2 = document.getElementById('content2');
var paragraph =container2.getElementsByTagName('p');
container2.style.border = '5px orange dashed';
container2.style.margin = '20px 0';
for(var i=0; i<paragraph.length; i++){
    paragraph[i].style.fontFamily = 'Arial';
    paragraph[i].style.fontSize = '1.5rem';
    paragraph[i].style.padding = "8px";
    paragraph[0].style.color = 'green'
    paragraph[1].style.color = 'grey'
    paragraph[2].style.color = 'red';
}
var main = document.getElementsByClassName('main')[0];
var heading = main.getElementsByTagName('h1')[1];
heading.innerHTML = '<em>' + 'This Heading is Changed by javascript'+ '</em>';
//--------------------------------------------------------------------------------------------------------------------//

var listItems = document.getElementsByTagName('li');

//Highlight even items
document.getElementById('highlightEven').onclick = function () {
    for(var i = 0; i < listItems.length; i++){
        if((i + 1) % 2 === 0){
            listItems[i].classList.add('highlight');
        }
    }
}

//Highlight odd items
document.getElementById('highlightOdd').onclick = function () {
    for(var i = 0; i < listItems.length; i++){
        if((i + 1) % 2  ==! 0){
            listItems[i].classList.add('highlight')
        }
    }
}

//Reset all items
document.getElementById('reset').onclick = function () {
    for(var i = 0; i < listItems.length; i++){
        listItems[i].classList.remove('highlight');
    }
}


//-------------------------------------------------------Practice-------------------------------------------------------//
// var listItems = document.getElementsByTagName('li');
// document.getElementById('highlightEven').onclick = function () {
//     for(var i = 0; i < listItems.length; i++){
//         if((i + 1) % 2 === 0){
//             listItems[i].classList.add('highlight');
//         }
//     }
// }

// document.getElementById('highlightOdd').onclick = function () {
//     for(var i = 0; i < listItems.length; i++){
//         if((i + 1) % 2 ==! 0){
//             listItems[i].classList.add('highlight');
//         }
//     }
// }

// document.getElementById('reset').onclick = function () {
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].classList.remove('highlight')
//     }
// }

//-------------------------------------------------------Practice-------------------------------------------------------//
// var listItems = document.getElementsByTagName('li');
// var highlightEven = document.getElementById('highlightEven');
// highlightEven.onclick = function () {
//     for(var i = 0; i < listItems.length; i++){
//         if((i + 1) % 2 === 0){
//             listItems[i].classList.add('highlight')
//         }
//     }
// }

// var highlightOdd = document.getElementById('highlightOdd');
// highlightOdd.onclick = function () {
//     for(var i = 0;  i < listItems.length; i++){
//         if((i + 1) % 2 ==! 0){
//             listItems[i].classList.add('highlight');
//         }
//     }
// }

// var reset = document.getElementById('reset');
// reset.onclick = function () {
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].classList.remove('highlight');
//     }
// }