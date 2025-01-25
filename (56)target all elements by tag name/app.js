function styleAllParagraphs(){
    var paragraphs = document.getElementsByTagName('p');
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].classList.add('styled')
    }
}


function styleAllParagraphs(){
    var paragraphs = document.getElementsByTagName('p');
    var content = document.getElementsByClassName('content');
    content[0].style.border = "6px groove green";
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.backgroundColor = "yellowgreen";
        paragraphs[i].style.color = "green";
        paragraphs[i].style.border = "4px solid green"; 
        paragraphs[i].style.fontWeight = "bold";      
    }
}



// //--------------------------INDIVIDUALLY STYLING ----------------------//
// function styleAllParagraphs(){
//     document.getElementsByTagName('p')[0].style.backgroundColor = 'blue';
//     document.getElementsByTagName('p')[1].style.backgroundColor = 'yellow';
//     document.getElementsByTagName('p')[2].style.backgroundColor = 'green';
//     document.getElementsByTagName('p')[3].style.backgroundColor = 'red';
//     document.getElementsByTagName('p')[4].style.backgroundColor = 'pink';
// }

