"use strict";
const email = /^(([0-9a-zA-Z\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~("")]+?\.)*[0-9a-zA-Z\!#\$ %&'\*\+\-\/\=\?\^_`\{\|\}~("")]+?)@(?:(?:(:?[0-9a-zA-Z\-]+\.)*[0-9a-zA-Z\-]+)|(?:\[.+?\]))$/;
const script = /.*<script>.*/;
function validateLogin() {
  var ifTrueUser,ifTruePassword=0;
  var name = document.forms["loginForm"]["username"];
  var tempName = name.value.trim();
    if (!email.test(tempName)) {
    invalidForm(name);
    name.setAttribute("placeholder", "Enter valid email id");
  } else {
    validForm(name);
    ifTrueUser=1;
  }
  var passwordField = document.forms["loginForm"]["password"];
  var pass = passwordField.value.trim();
  if (pass.length < 8) {
    invalidForm(passwordField);
    passwordField.setAttribute("placeholder", "Enter valid password");
  } else {
    validForm(passwordField);
    ifTruePassword=1;
  }
  var ifTrue=ifTruePassword*ifTrueUser;
  if(ifTrue === 1){
    document.getElementById("formLogin").submit();
  }
}

function validForm(name) {
  name.style.borderColor = "#329924";
  name.style.borderStyle = "solid";
  name.style.backgroundColor = "#FFFFFF";
}

function invalidForm(name) {
  name.style.borderColor = "#F90707";
  name.style.borderStyle = "dotted";
  name.style.backgroundColor = "#F6F7B7";
}

function validateRegister() {
  var ifTrue = 1;
  var first, image, email,designation;
  first = validateFirstName();
  image = validateImage();
  email = validateEmail();
  designation = validateDesignation();
  //add = validatePermenantAddress();
  //add2 = validateContactAddress();
  var phNo = document.forms["newRegister"]["phNo"].value.trim();
  if (phNo === null || phNo === "") {
    document.getElementById("phNoError").innerHTML = "Cannot be left blank";
  }
  ifTrue = first*email*image*designation;
  if(ifTrue === 1){
    document.getElementById("formRegister").submit();
  }
 
}

function validateFirstName() {
  var firstName = document.forms["newRegister"]["name"].value.trim();
  if (firstName === null || firstName === "") {
    document.getElementById("firstNameError").innerHTML = "Cannot be left blank";
  } else if (script.test(firstName)) {
    document.getElementById("firstNameError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("firstNameError").innerHTML = "";
    return 1;
  }
}

function validateImage() {
  var image = document.forms["newRegister"]["image"].value.trim();
  if (image === null || image === "") {
    document.getElementById("imageError").innerHTML = "Cannot be left blank";
  } else {
    document.getElementById("imageError").innerHTML = "";
    return 1;
  }
}

function validateDesignation() {
  var designation = document.forms["newRegister"]["designation"].value.trim();
  if (designation === null || designation === "") {
    document.getElementById("designationError").innerHTML = "Cannot be left blank";
  } else {
    document.getElementById("designationError").innerHTML = "";
    return 1;
  }
}

function validateEmail() {
  var emailTemp = document.forms["newRegister"]["email"].value;
    if (!email.test(emailTemp)) {
    document.getElementById("emailError").innerHTML = "Enter valid email";
  } else {
    document.getElementById("emailError").innerHTML = "";
    return 1;
  }
}

/*function validatePassword() {
  var password = document.forms["newRegister"]["password"].value.trim();
  var confirmPassword = document.forms["newRegister"]["confirmPassword"].value;
  if (confirmPassword === null || confirmPassword === "") {
    document.getElementById("confirmPasswordError").innerHTML = "Cannot be left blank";
  } else {
    document.getElementById("confirmPasswordError").innerHTML = "";
    if (password === confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "";
      return 1;
    } else {
      document.getElementById("confirmPasswordError").innerHTML = "Password does not match";
    }
  }
  if (password === null || password === "") {
    document.getElementById("passwordError").innerHTML = "Cannot be left blank";
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
}*/

function validateMobileNo() {
  var phNo = document.forms["newRegister"]["phNo"].value.trim();
  var phNoPattern = /^\d{10}$/;
  var phNoTemp;
  var phNoSlice = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/m;
  document.getElementById("phNoError").innerHTML = "";
  if ((phNoPattern.test(phNo)) || phNoSlice.test(phNo)) {
    document.getElementById("phNoError").innerHTML = "";
    if (phNo.length === 10) {
      phNoTemp = phNo.slice(0, 3) + "-" + phNo.slice(3, 6) + "-" + phNo.slice(6);
      document.getElementById("phNo").value = phNoTemp;
    }
  } else {
    if (phNoTemp === phNoSlice) {
      document.getElementById("phNoError").innerHTML = "";
    } else {
      document.getElementById("phNoError").innerHTML = "phno not valid";
    }
  }
}

/*function validatePermenantAddress() {
  var permenantAddress = document.forms["newRegister"]["permenantAddress"].value.trim();
  if (permenantAddress === null || permenantAddress === "") {
    document.getElementById("permenantAddressError").innerHTML = "Cannot be left blank";
  } else if (script.test(permenantAddress)) {
    document.getElementById("permenantAddressError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("permenantAddressError").innerHTML = "";
    return 1;
  }
}

function validateContactAddress() {
 
  if (document.forms["newRegister"]["checkbox"].checked === true) {
    document.forms["newRegister"]["contactAddress"].value = document.forms["newRegister"]["permenantAddress"].value;
    document.getElementById("contactAddressError").innerHTML = "";
    return 1;
  }
  var contactAddress = document.forms["newRegister"]["contactAddress"].value.trim();
  if (contactAddress === null || contactAddress === "") {
    document.getElementById("contactAddressError").innerHTML = "Cannot be left blank";
  } else if (script.test(contactAddress)) {
    document.getElementById("contactAddressError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("contactAddressError").innerHTML = "";
    return 1;
  }

}

function copyAddress(check) {
  if (check.checkbox.checked) {
    check.contactAddress.value = check.permenantAddress.value;
    check.contactAddress.setAttribute('readonly', 'readonly');
  } else {
    check.contactAddress.removeAttribute('readonly');
  }
}*/