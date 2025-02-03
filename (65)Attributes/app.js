function changeAttributes(){
    var image = document.getElementById('myImage');
    var newSrc = document.getElementById('srcInput').value;
    var newAlt = document.getElementById('altInput').value;
    var newTitle = document.getElementById('titleInput').value;

    if(newSrc) image.src = newSrc;
    if(newAlt) image.alt = newAlt;
    if(newTitle) image.title = newTitle;
    console.log(image);
}
