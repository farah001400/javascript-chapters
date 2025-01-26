var container1 = document.getElementById('content1');
var paragraphs = container1.getElementsByTagName('p');
container1.style.border = '5px aqua groove';
container1.style.margin = '20px 0';
for(var i=0; i<paragraphs.length; i++){
    paragraphs[i].style.padding = '5px';
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
//--------------------------------------------------------------------------------------------------------------------//