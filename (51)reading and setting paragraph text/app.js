//---------------------------reading and setting paragraph text(51)-----------------------//
function readParagraphText() {
    var initialpara = document.getElementById('initial_para');
    var outputpara = document.getElementById('output_para');
    outputpara.textContent = 'Current paragraph text:' + '"' + initialpara.textContent + '"'
}
function setParagraphText() {
    var initialpara = document.getElementById('initial_para');
    var newText = document.getElementById('newTextInput');
    var outputpara = document.getElementById('output_para');
    if (newText.value.trim() === '') {
        outputpara.textContent = "Please enter some text to set!";
        outputpara.style.color = "red";
    }
    else {
        initialpara.textContent = newText.value;
        outputpara.textContent = "Paragraph text has been updated!";
        outputpara.style.color = "green";
        newText.value = "";
    }
}
//----- OR ------//
function expandParagraph() {
    var more = document.getElementById('morePara');
    var less = document.getElementById('lessPara');
    less.innerHTML = more.innerHTML;
}
function placeAList() {
    var listToPlace = "<ul><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ul>";
    var seeList = document.getElementById('seeList');
    seeList.innerHTML = listToPlace;
    document.getElementById('list').style.display = 'none';
}