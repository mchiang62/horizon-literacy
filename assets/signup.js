console.log("hi melissa")

function validation () {

  var firstName = document.getElementById('inputFirstName').value;
  var lastName = document.getElementById('inputLastName').value;
  var birthday = document.getElementById('inputBirthday').value;
  var address = document.getElementById('inputAddress').value;
  var city = document.getElementById('inputCity').value;
  var zip = document.getElementById('inputZip').value;
  var phone = document.getElementById('inputPhone').value;
  var email = document.getElementById('inputEmail4').value;

  if (firstName == "") {
    document.getElementById('fName').innerHTML= "Required";
    return false
  }

  if (lastName == "") {
    document.getElementById('lName').innerHTML= "Required";
    return false
  }
  if (birthday == "") {
    document.getElementById('dob').innerHTML= "Required";
    return false
  }
  if (address == "") {
    document.getElementById('address').innerHTML= "Required";
    return false
  }
  if (city == "") {
    document.getElementById('city').innerHTML= "Required";
    return false
  }
  if (zip == "") {
    document.getElementById('zip').innerHTML= "Required";
    return false
  }
  if (phone == "") {
    document.getElementById('phone').innerHTML= "Required";
    return false
  }
  if (email == "") {
    document.getElementById('email').innerHTML= "Required";
    return false
  }



}



