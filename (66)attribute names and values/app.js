function updateProfile(imgSrc, name, age, profession) {
    var rightSide = document.getElementById('rightSideContent')
    var profileImg = document.getElementById('profileImg');
    profileImg.setAttribute('src', imgSrc);
    rightSide.setAttribute('data-name', name);
    rightSide.setAttribute('data-age', age);
    rightSide.setAttribute('data-profession', profession);

    document.getElementById('name').textContent = rightSide.getAttribute('data-name');
    document.getElementById('age').textContent = 'Age: ' + rightSide.getAttribute('data-age');
    document.getElementById('profession').textContent = 'Profession: ' + rightSide.getAttribute('data-profession');
}
// ---------------------------------------------------------------------------------------------------------------------------//

// function changeProfile(_imgSrc, _name, _age, _profession){
//     var profileImage = document.getElementById('profileImage');
//     var about = document.getElementById('about');
//     profileImage.setAttribute('src',_imgSrc);
//     about.setAttribute('name', _name);
//     about.setAttribute('age', _age);
//     about.setAttribute('profession', _profession);

//     document.getElementById('_name').textContent = about.getAttribute('name');
//     document.getElementById('_age').textContent = 'Age: ' + about.getAttribute('age');
//     document.getElementById('_profession').textContent = 'Profession: ' + about.getAttribute('profession');
// }
// ---------------------------------------------------------------------------------------------------------------------------//

function changeProfile(_imgSrc, _name, _age, _profession) {
    var about = document.getElementById('about');
    var profileImage = document.getElementById('profileImage');
    profileImage.setAttribute('src', _imgSrc);

    about.setAttribute('name', _name);
    about.setAttribute('age', _age);
    about.setAttribute('profession', _profession);

    document.getElementById('_name').textContent = about.getAttribute('name');
    document.getElementById('_age').textContent = 'Age: '+ about.getAttribute('age');
    document.getElementById('_profession').textContent = 'Profession: ' + about.getAttribute('profession')
}