var watchMeChange = document.getElementById('text');
watchMeChange.style.color = "black";
watchMeChange.style.fontSize = "15px";
watchMeChange.style.border = "3px solid black";

function changeColor() {
    watchMeChange.style.color = watchMeChange.style.color === "black" ? 'red' : 'black';
}
function changeSize() {
    watchMeChange.style.fontSize = watchMeChange.style.fontSize === '15px' ? '25px' : '15px';
}
function changeBorder() {
    watchMeChange.style.border = watchMeChange.style.border === '3px solid black' ? '5px dashed blue' : '3px solid black';
}