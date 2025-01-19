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
//-----OR----//
function makeInvisible(){
    var image = document.getElementById('parrot');
    image.className = "hidden";
}
//-----OR---//
function makePerfect(){
    var pigeon = document.getElementById('pigeon');
    pigeon.className = "Border";
    pigeon.className += " Height";
}