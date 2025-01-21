function swapImage(imageSrc){
    var selectedImage = document.getElementById('selectedImage');
     selectedImage.src = imageSrc
}

function swapPic(){
    var bef = document.getElementById('bef');
    bef.src = "assets/nature2.jpg";
    
}
// function swapping(eId,imgSrc){
//     var eId = document.getElementById(eId);
//     eId.src = imgSrc;

// }
function swapping(before, imgSrc){
    var before = document.getElementById(before);
    before.src = imgSrc;

}