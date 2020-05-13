console.log("hi melissa")

function validation () {

  var firstName = document.getElementById('inputFirstName').value;
  var lastName = document.getElementById('inputLastName').value;

  if (firstName == "") {
    document.getElementById('fName').innerHTML= "Required";
    return false
  };

  if (lastName == "") {
    document.getElementById('lName').innerHTML= "Required";
    return false
  }



}



