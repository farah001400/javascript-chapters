var myList = document.getElementById('myList');
var firstItem = myList.firstElementChild;
var lastItem = myList.lastElementChild;
var current = firstItem;

function highLightFirst() {
    current.style.backgroundColor = "";
    current = firstItem;
    current.style.backgroundColor = "green";
    current.style.color = 'white';
}
function highLightLast() {
    current.style.backgroundColor = "";
    current = lastItem;
    current.style.backgroundColor = "green";
    current.style.color = "white";
}
function highLightNext() {
    current.style.backgroundColor = "";
    if (current.nextElementSibling) {
        current = current.nextElementSibling;
    }
    current.style.backgroundColor = "green";
    current.style.color = "white";
}