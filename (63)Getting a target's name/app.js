var infoPanel = document.getElementById('infoPanel');
var nodeNameElement = document.getElementById('nodeName');
var nodeValueElement = document.getElementById('nodeValue');

function displayElementInfo(event){
    var element = event.target;
    nodeNameElement.textContent = 'Node Name:' + element.nodeName;
    nodeValueElement.textContent = 'Node Value:' + (element.firstChild ? element.firstChild.nodeValue : 'null');
}
var clickableElements = document.querySelectorAll('.clickable');
for(var i = 0; i < clickableElements.length; i++){
    clickableElements[i].addEventListener('click', displayElementInfo)
}

//-----------------------------------------------Practice the same function---------------------------------------------------------------//
var infoPanel = document.getElementById('infoPanel');
var nodeNameElement = document.getElementById('nodeName');
var nodeValueElement = document.getElementById('nodeValue');

function displayElementInfo(event){
    var element = event.target;
    nodeNameElement.textContent = 'Node Name:' + element.nodeName;
    nodeValueElement.textContent = 'Node Value:' + (element.firstChild ? element.firstChild.nodeValue : 'null');
}
var clickableElements = document.querySelectorAll('.clickable');
for(var i = 0; i < clickableElements.length; i++){
    clickableElements[i].addEventListener('click', displayElementInfo)
}