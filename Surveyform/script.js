
// script.js
function resetForm() {
    document.getElementById("surveyForm").reset();
  }
  
  document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var selectedValues = {};
  
    // Get selected values from the form
    selectedValues.firstName = document.getElementById("firstName").value;
    selectedValues.lastName = document.getElementById("lastName").value;
    selectedValues.dob = document.getElementById("dob").value;
    selectedValues.country = document.getElementById("country").value;
  
    var genderOptions = document.getElementsByName("gender");
    for (var i = 0; i < genderOptions.length; i++) {
      if (genderOptions[i].checked) {
        selectedValues.gender = genderOptions[i].value;
        break;
      }
    }
  
    selectedValues.profession = document.getElementById("profession").value;
    selectedValues.email = document.getElementById("email").value;
    selectedValues.mobile = document.getElementById("mobile").value;
  
    // Display selected values in a popup
    var message = "";
    for (var key in selectedValues) {
      message += key + ": " + selectedValues[key] + "\n";
    }
    alert(message);
  
    // Reset the form
    resetForm();
  });
  