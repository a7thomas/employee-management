const script = /.*<script>.*/;

function search() {
  window.location.href = '/user/search';
} 

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

function alert(){
  var modal = document.getElementById('alert1');
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function edit() {
  var element = document.getElementsByClassName("input");
  for (var i = 0; i < element.length; i++) {
    element[i].removeAttribute('readonly');
    element[i].style.background ="#FFFFFF";
  }
  var ss = document.getElementById("update"); 
  ss.style.display='block';
}

function update() {
  var element = document.getElementsByClassName("input");
  for (var i = 0; i < element.length; i++) {
    element[i].setAttribute('readonly');
    element[i].style.background ="#FFFFFF";
  }
  var ss = document.getElementById("update"); 
  ss.style.display='none';
}


function validatePersonalForm() {
  var first,last,addr=0;
  first = validateFirstName();
  last = validateLastName();
  addr = validatePermenantAddress();
  ifTrue = first*last*addr;
  if(ifTrue === 1){
    document.getElementById("updateProfile").submit();
  }
}

function validateFirstName() {
  var firstName = document.forms["updateProfile"]["firstName"].value.trim();
  if (firstName === null || firstName === "") {
    document.getElementById("firstNameError").innerHTML = "Cannot be left blank";
  } else if (script.test(firstName)) {
    document.getElementById("firstNameError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("firstNameError").innerHTML = "";
    return 1;
  }
}

function validateLastName() {
  var lastName = document.forms["updateProfile"]["lastName"].value.trim();
  if (lastName === null || lastName === "") {
    document.getElementById("lastNameError").innerHTML = "Cannot be left blank";
  } else if (script.test(lastName)) {
    document.getElementById("lastNameError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("lastNameError").innerHTML = "";
    return 1;
  }
}


function validatePhNo() {
  var phNo = document.forms["updateProfile"]["phNo"].value.trim();
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

function validatePermenantAddress() {
  var address = document.forms["updateProfile"]["address"].value.trim();
  if (address === null || address === "") {
    document.getElementById("addressError").innerHTML = "Cannot be left blank";
  } else if (script.test(address)) {
    document.getElementById("addressError").innerHTML = "Need to be valid";
  } else {
    document.getElementById("addressError").innerHTML = "";
    return 1;
  }
}


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

