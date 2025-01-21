function swapImage(imageSrc){
    var selectedImage = document.getElementById('selectedImage');
     selectedImage.src = imageSrc
}
//---OR---//

function swapPic(){
    var bef = document.getElementById('bef');
    bef.src = "assets/nature2.jpg";
    
}
//------OR----//

// function swapping(eId,imgSrc){
//     var eId = document.getElementById(eId);
//     eId.src = imgSrc;

// }
function swapping(before, imgSrc){
    var before = document.getElementById(before);
    before.src = imgSrc;
}

//----OR----//
function swapCurrentImg(element, imgSrc){
        element.src = imgSrc;
}
function swapImg(element, imgSrc){
    element.src = imgSrc
}






