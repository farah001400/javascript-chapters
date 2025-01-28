var parentDiv1 = document.getElementById('parentDiv1');
console.log(parentDiv1);
var allElements = parentDiv1.children;
console.log(allElements);
for(var i = 0; i < allElements.length; i++){
    allElements[i].style.color = "blue";
}


var parentDiv2 = document.getElementById('parentDiv2');
console.log(parentDiv2);
var allNodes = parentDiv2.childNodes;
console.log(allNodes);
for(var i = 0; i < allNodes.length; i++){
    if(allNodes[i].nodeType === 1){
    allNodes[i].style.backgroundColor = "yellow";
    }
}