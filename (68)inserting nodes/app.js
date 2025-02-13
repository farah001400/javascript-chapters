//----part-1----//
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

//----part-2----//
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
    if(activeItem) {
        var text = document.getElementById('itemInput').value;
        if(text) {
            var subUl = activeItem.querySelector('ul') || document.createElement('ul');
            var li = createListItem(text);
            subUl.appendChild(li);
            if(!activeItem.querySelector('ul')) {
                activeItem.appendChild(subUl);
            }
            document.getElementById('itemInput').value = "";
        }
    }
    else{
        alert('Please select an item first.')
    }
}
//----part-3----//












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