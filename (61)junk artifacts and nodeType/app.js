// var container = document.getElementById('container');
// var allNodes = container.childNodes;
// var junkArtifacts =[];
// var elementNodes = [];
// for(var i = 0; i < allNodes.length; i++){
//     if(allNodes[i].nodeType !== 1){
//         junkArtifacts.push(allNodes[i])
//     }
//     else{
//         elementNodes.push(allNodes[i])
//     }
// }
// console.table([allNodes, junkArtifacts, elementNodes]);
//-------------------------------------------------------------------------------------------------------------------//

// var container = document.getElementById('container');
// var allNodes = container.childNodes;
// var junkArtifacts = [];
// var elementNodes = [];
// for(var i = 0; i < allNodes.length; i++){
//     if(allNodes[i].nodeType !== 1){
//         junkArtifacts.push(allNodes[i]);
//     }
//     else{
//         elementNodes.push(allNodes[i]);
//     }
// }
// console.table([allNodes, junkArtifacts, elementNodes]);
//-------------------------------------------------------------------------------------------------------------------//

// var container = document.getElementById('container1');
// var allNodes = container1.childNodes;
// var junkArtifacts = [];
// var elementNodes = [];
// for(var i = 0; i < allNodes.length; i++){
//     if(allNodes[i].nodeType === 1){
//         elementNodes.push(allNodes[i]);
//     }
//     else{
//         junkArtifacts.push(allNodes[i]);
//     }
// }
// console.table([allNodes, junkArtifacts, elementNodes]);
//-------------------------------------------------------------------------------------------------------------------//

// var container2 = document.getElementById('container2');
// var nodes = container2.childNodes;
// for(var i = 0; i < nodes.length; i++){
//     if(nodes[i].nodeType === 1){
//         console.log('Element Node:', nodes[i]);
//     }
//     else if(nodes[i].nodeType === 3){
//         console.log('Text Node:', nodes[i].textContent.trim());
//     }
//     else if(nodes[i].nodeType === 8){
//         console.log('Comment Node:', nodes[i])
//     }
// }
//-------------------------------------------------------------------------------------------------------------------//

var container2 = document.getElementById('container2');
var allNodes = container2.childNodes;
for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].nodeType === 1) {
        console.log("Elements Node:", allNodes[i]);
    }
    else if(allNodes[i].nodeType === 3){
        console.log("Text Node:", allNodes[i].textContent.trim());
    }
    else if(allNodes[i].nodeType === 8){
        console.log("Comment Node:", allNodes[i])
    }
}