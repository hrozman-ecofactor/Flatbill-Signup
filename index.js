function verifyCompatible(){
    if (document.getElementById("signUp_compatible_isVerified").checked === true) {
        toggleInputEditable(false);
    } else {
        toggleInputEditable(true);
    }
}

function toggleInputEditable(value) {
    // document.getElementById('inputNumOfThermostats').disabled = value;
    // document.getElementById('inputNumOfCWireAdapters').disabled = value;
    // document.getElementById('inputThermostatColor').disabled = value;
    // document.getElementById('inputHasWifi').disabled = value;
    // document.getElementById('inputHasAC').disabled = value;
    // document.getElementById('inputFirstName').disabled = value;
    // document.getElementById('inputLastName').disabled = value;
    // document.getElementById('inputAddress1').disabled = value;
    // document.getElementById('inputAddress2').disabled = value;
    // document.getElementById('inputCity').disabled = value;
    // document.getElementById('inputState').disabled = value;
    // document.getElementById('inputZip').disabled = value;
    // document.getElementById('inputPhone').disabled = value;
    // document.getElementById('inputEmail').disabled = value;
    // document.getElementById('inputUserFeedback').disabled = value;
    // document.getElementById('checkTC').disabled = value;

    document.getElementById('btnLinkUtilityAccount').disabled = value;
    document.getElementById('btn_signup_enroll').disabled = value;
    document.getElementById('btn_signup_cancel').disabled = value;
}