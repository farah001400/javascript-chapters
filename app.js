//---------------------------------Reading field values(49)------------------------------//
// function checkFields(nameField, emailField){
//     var nameVal = document.getElementById(nameField).value;
//      var emailVal = document.getElementById(emailField).value;
//     if(nameVal === "" || emailVal === ""){
//         alert('Please complete the form');
//     }
//     else{
//         alert("Congratulation! form submited");
//     }
// }
// OR //
// function checkFields(nameField, emailField) {
//     var nameVal = document.getElementById(nameField).value.trim();
//     var emailVal = document.getElementById(emailField).value.trim();
//     if (nameVal.length < 1 || emailVal.length < 1) {
//         alert('Please complete the form');
//     }
//     else {
//         alert(`Welcome ${nameVal} with your last name ${emailVal}`);
//     }
// }
//---------------------------------Setting field values(50)------------------------------//
// function setAreaName() {
//     var zipCode = +document.getElementById('zipCode').value;
//     var area = document.getElementById('area');
//     if (zipCode === 45200) {
//         area.value = "Glora";
//     }
//     else if (zipCode === 44210) {
//         area.value = "Islamabad F-7 Markaz";
//     }
//     else if (zipCode === 44320) {
//         area.value = "Islamabad Federal Board";
//     }
//     else if (zipCode === 44310) {
//         area.value = "Islamabad Allama Iqbal Open University";
//     }
//     else {
//         area.value = "Invalid Code";
//         area.style.color = "red";
//     }
// }
// function fillCity(){
//     var cityName;
//     var zipEntered = document.getElementById('zip').value;
//     switch(zipEntered){
//         case "60608" : cityName = "Chicago";
//         break;
//         case "68114" : cityName = "Omaha";
//         break;
//         case "53212" : cityName = "Milwaukee";
//         break;
//         default :  cityName = "Invalid Code";
//     }
//     document.getElementById('city').value = cityName;
// }
//---------------------------reading and setting paragraph text(51)-----------------------//
// function readParagraphText() {
//     var initialpara = document.getElementById('initial_para');
//     var outputpara = document.getElementById('output_para');
//     outputpara.textContent = 'Current paragraph text:' + '"' + initialpara.textContent + '"'
// }
// function setParagraphText() {
//     var initialpara = document.getElementById('initial_para');
//     var newText = document.getElementById('newTextInput');
//     var outputpara = document.getElementById('output_para');
//     if (newText.value.trim() === '') {
//         outputpara.textContent = "Please enter some text to set!";
//         outputpara.style.color = "red";
//     }
//     else {
//         initialpara.textContent = newText.value;
//         outputpara.textContent = "Paragraph text has been updated!";
//         outputpara.style.color = "green";
//         newText.value = "";
//     }
// }
// // OR //
// function expandParagraph() {
//     var more = document.getElementById('morePara');
//     var less = document.getElementById('lessPara');
//     less.innerHTML = more.innerHTML;
// }
// function placeAList() {
//     var listToPlace = "<ul><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ul>";
//     var seeList = document.getElementById('seeList');
//     seeList.innerHTML = listToPlace;
//     document.getElementById('list').style.display = 'none';
// }
//--------------------------------manipulating images and text(52)--------------------------//
var paragraph = document.getElementById("paragraph");
var input = document.getElementById("input");
var outputPara = document.getElementById("outputPara");
var image = document.getElementById("image");
function setParagraph() {
    if(input.value.trim() === ""){
    outputPara.textContent = "Please enter some text!"
    outputPara.style.color = "red";
    outputPara.style.fontWeight= "bold"
}
else{
    paragraph.textContent = input.value;
    input.value = "";
    outputPara.textContent = "New paragrapg has been updated!"
    outputPara.style.color = "green";
    outputPara.style.fontWeight = "bold";
}
}
function toggleImage() {
if(image.src.includes("assets/dog.jpeg")){
    image.src = "assets/horse.jpg";
    outputPara.textContent = "Image has been changed to the first image!"
    outputPara.style.color = "green";
    outputPara.style.fontWeight = "bold";
}
else{
    image.src = "assets/dog.jpeg";
    outputPara.textContent = "Image has been changed to the second image!"
}
}
function hideImage(){
image.style.display = "none";
outputPara.textContent = "image is now hiden!"
outputPara.style.color = "green";
}
function showImage() {
image.style.display = "inline";
outputPara.textContent = "image is now visible!"
}





