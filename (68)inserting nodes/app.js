function createListItem(text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
}

function addMainItem() {
    var text = document.getElementById('itemInput').value;
    if(text) {
        var li = createListItem(text);
        document.getElementById('list').appendChild(li);
        document.getElementById('itemInput').value = "";
    }
    else{
        alert("Main item can't be null/empty!");
    }
}




var activeItem = null;
document.getElementById('list').addEventListener('click', handleListClick);

function handleListClick(e) {
    if (e.target.tagName = 'li') {
        // remove already selected item //
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        activeItem = e.target;
        activeItem.classList.add('active');
    }
}

function addSubItem() {

}
// ------------------------------------------------------------------------------------------------//

// function addMainItem() {
//     var inputText = document.getElementById('itemInput').value;
//     if(inputText) {
//         var li = createLi(inputText);
//         document.getElementById('list').appendChild(li);
//         document.getElementById('itemInput').value = "";
//     }
//     else{
//         alert('Please first enter any item')
//     }
// }

// function createLi(text){
//     var li = document.createElement('li');
//     li.textContent = text;
//     return li;
// }