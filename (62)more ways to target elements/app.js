var myList = document.getElementById('myList');
var itemfirst = myList.firstElementChild;
var itemlast = myList.lastElementChild;
var currentItem = itemfirst;

function highLightFirst() {
    currentItem.style.backgroundColor = "";
    currentItem = itemfirst;
    currentItem.style.backgroundColor = "green";
    currentItem.style.color = 'white';
}
function highLightLast() {
    currentItem.style.backgroundColor = "";
    currentItem = itemlast;
    currentItem.style.backgroundColor = "green";
    currentItem.style.color = "white";
}
function highLightNext() {
    currentItem.style.backgroundColor = "";
    if (currentItem.nextElementSibling) {
        currentItem = currentItem.nextElementSibling;
    }
    currentItem.style.backgroundColor = "green";
    currentItem.style.color = "white";
}
//---------------------------------------------------------------------------------------------------------------------------------//

var list = document.getElementById('parent');
var noItem =document.getElementById('noItem');
var firstItem = list.firstElementChild;
var lastItem = list.lastElementChild;
var current = firstItem;
console.log(firstItem);

function firstHighLight(){
    noItem.style.display = "none";
    current.style.backgroundColor = "";
    current.style.color = 'black';
    current = firstItem;
    current.style.backgroundColor = 'blue';
    current.style.color = "white";
}
function lastHighLight(){
    noItem.style.display = "none";
    current.style.backgroundColor = "";
    current.style.color ='black';
    current = lastItem;
    current.style.backgroundColor = "blue";
    current.style.color = "white";
}

function nextHighLight(){
    current.style.backgroundColor = "";
    current.style.color = 'black'
    if(current.nextElementSibling){
        current = current.nextElementSibling;
        current.style.backgroundColor = "blue";
        current.style.color = 'white';
    }
    else{
         noItem.style.display = "block";
    noItem.innerText = "No more items";
    noItem.style.color = 'red';
    noItem.style.fontWeight = "bold";
    noItem.style.paddingBottom = "10px "
    }   
}
