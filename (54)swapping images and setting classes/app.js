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

