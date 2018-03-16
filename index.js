function verifyCompatible(){
    if (document.getElementById("signUp_compatible_isVerified").checked === true) {
        toggleInputEditable(false);
    } else {
        toggleInputEditable(true);
    }
}

function toggleInputEditable(value) {
    document.getElementById('signUp_total_thermostats_needed').disabled = value;
    document.getElementById('signUp_total_cwires_needed').disabled = value;
    document.getElementById('signUp_thermostat_color').disabled = value;
    document.getElementById('signUp_has_wifi_100_pct').disabled = value;
    document.getElementById('signUp_has_central_ac').disabled = value;
    document.getElementById('signUp_utility_firstName').disabled = value;
    document.getElementById('signUp_utility_lastName').disabled = value;
    document.getElementById('signUp_utility_location_address1').disabled = value;
    document.getElementById('signUp_utility_location_address2').disabled = value;
    document.getElementById('signUp_utility_location_city').disabled = value;
    document.getElementById('signUp_utility_location_state').disabled = value;
    document.getElementById('signUp_utility_location_zipcode').disabled = value;
    document.getElementById('signUp_utility_phone').disabled = value;
    document.getElementById('signUp_utility_email').disabled = value;
    document.getElementById('signUp_mostExcited').disabled = value;
    document.getElementById('signUp_legal_accepted').disabled = value;

    document.getElementById('btnLinkUtilityAccount').disabled = value;
    document.getElementById('btn_signup_enroll').disabled = value;
    document.getElementById('btn_signup_cancel').disabled = value;
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  // } else {
  //   document.getElementById("prevBtn").style.display = "inline";
  // }
  if (n == (x.length - 1)) {
    document.getElementById("btnTogglePage").innerHTML = "Previous";
    document.getElementById("section-TC").style.display = "block";
    document.getElementById("section-LinkUtility").style.display = "block";
    document.getElementById("divButtonSubmissions_signUp").style.display = "block";

  } else {
    document.getElementById("btnTogglePage").innerHTML = "Next";
    document.getElementById("section-TC").style.display = "none";
    document.getElementById("section-LinkUtility").style.display = "none";
    document.getElementById("divButtonSubmissions_signUp").style.display = "none";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev() {
    console.log(document.getElementById("btnTogglePage").innerHTML  );
    if (document.getElementById("btnTogglePage").innerHTML === "Next") {
        n = 1;
    } else {
        n = -1;
    }
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}