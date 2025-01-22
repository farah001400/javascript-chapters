function swapImage(newImgSrc, clickedThumbnail) {
    var mainImg = document.getElementById('mainImage');
    mainImg.src = newImgSrc;
    var thumbnail = document.querySelectorAll('.gallery img')
    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].classList.remove('active');
    }
    clickedThumbnail.classList.add('active');
    mainImg.style.border = "1px solid blue"
}

// function swapImage(imgSrc, element){
//     var mainImg = document.getElementById('mainImage');
//     mainImg.src = imgSrc;
//     var elements = document.querySelectorAll('.gallery img');
//     for(var i = 0; i < elements.length; i++){
//         elements[i].classList.remove('active')    
//     }
//     element.classList.add('active');
// }

// function swapImage(currentImgSrc, ele){
//     var mainImage = document.getElementById('mainImage');
//     mainImage.src = currentImgSrc;
//     var allElements = document.querySelectorAll('.gallery img');
//     for(var i = 0; i < allElements.length; i++){
//         allElements[i].classList.remove('active');
//         }
//     ele.classList.add('active');
// }