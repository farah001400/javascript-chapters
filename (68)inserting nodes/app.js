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
// ------------------------------------------------------------------------------------------------//

