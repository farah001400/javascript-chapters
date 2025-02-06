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