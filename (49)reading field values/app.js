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
//--------OR------------- //
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