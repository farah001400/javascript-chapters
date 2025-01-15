//---------------------------------Reading field values(49)------------------------------//
// function checkFields(nameField, emailField){
//     var nameVal = document.getElementById(nameField).value;
//      var emailVal = document.getElementById(emailField).value;
//     if(nameVal === "" || emailVal === ""){
//         alert('Please complete the form');
//     }
//     else{
//         alert("Congratulation! form submited");
//     }
// }
// OR //
function checkFields(nameField, emailField) {
    var nameVal = document.getElementById(nameField).value.trim();
    var emailVal = document.getElementById(emailField).value.trim();
    if (nameVal.length < 1 || emailVal.length < 1) {
        alert('Please complete the form');
    }
    else {
        alert(`Welcome ${nameVal} with your last name ${emailVal}`);
    }
}
//---------------------------------Setting field values(50)------------------------------//
function setAreaName() {
    var zipCode = +document.getElementById('zipCode').value;
    var area = document.getElementById('area');
    if (zipCode === 45200) {
        area.value = "Glora";
    }
    else if (zipCode === 44210) {
        area.value = "Islamabad F-7 Markaz";
    }
    else if (zipCode === 44320) {
        area.value = "Islamabad Federal Board";
    }
    else if (zipCode === 44310) {
        area.value = "Islamabad Allama Iqbal Open University";
    }
    else {
        area.value = "Invalid Code";
        area.style.color = "red";
    }
}
function fillCity(){
    var cityName;
    var zipEntered = document.getElementById('zip').value;
    switch(zipEntered){
        case "60608" : cityName = "Chicago";
        break;
        case "68114" : cityName = "Omaha";
        break;
        case "53212" : cityName = "Milwaukee";
        break;
        default :  cityName = "Invalid Code";
    }
    document.getElementById('city').value = cityName;
}

