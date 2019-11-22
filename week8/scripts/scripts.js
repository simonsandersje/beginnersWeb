window.addEventListener("load", function (){
  setValidation();
});

function setValidation() {
  var ddForm = document.getElementById("ddForm");
  ddForm.onsubmit = function (event) {
    event.preventDefault();
    if (formFieldsAreValid() === true) {
      ddForm.submit();
    } else {
      addErrorMessage("You need to complete all fields in the form", ddForm);
    }
  };
}

function formFieldsAreValid() {
  var formIsValid = true;
  var radioButtonIsSelected = false;
  var inputFields = document.querySelectorAll('input[type="text"], input[type="password"], input[name="happy"], textarea, select');
  for (i = 0; i < inputFields.length; i++) {
    inputFields[i].style = "background-color: white;";
    if ((inputFields[i].type === "text" && inputFields[i].value === "") || 
        (inputFields[i].type === "password" && inputFields[i].value === "") || 
        (inputFields[i].type === "textarea" && inputFields[i].value === "") || 
        (inputFields[i].type === "select-one" && inputFields[i].value === "Please select...")) {
      inputFields[i].style = "background-color: yellow;";
      formIsValid = false;
    }
    if (inputFields[i].type === "radio") {
      if (inputFields[i].checked === true && radioButtonIsSelected === false) {
        radioButtonIsSelected = true;
      }
    }
  }
  return formIsValid && radioButtonIsSelected;
}

function addErrorMessage(messageText, element) {
  var errorContainer = document.getElementById("errorMessage");
  if (errorContainer === null) {
    var errorMessageContainer = document.createElement("p");
    errorMessageContainer.id = "errorMessage";
    errorMessageContainer.innerText = messageText;
    errorMessageContainer.style = "color: red;";
    element.prepend(errorMessageContainer);
  }
}
