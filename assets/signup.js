
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();











// console.log("hi melissa");

// const form = document.getElementById("signup");
// const firstName = document.getElementById("inputFirstName");
// const lastName = document.getElementById("inputLastName");
// const birthday = document.getElementById("inputBirthday");
// const address = document.getElementById("inputAddress");
// const city = document.getElementById("inputCity");
// const zip = document.getElementById("inputZip");
// const phone = document.getElementById("inputPhone");
// const email = document.getElementById("inputEmail4");

// form.addEventListener("submit", function () {
//   event.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   const fnameValue = firstName.value.trim();
//   const lnameValue = lastName.value.trim();
//   const birthdayValue = birthday.value.trim();
//   const addressValue = address.value.trim();
//   const cityValue = city.value.trim();
//   const zipValue = zip.value.trim();
//   const phoneValue = phone.value.trim();
//   const emailValue = email.value.trim();

//   if (fnameValue === "") {
//     // show error message
//     setErrorFor(firstName, "Required");
//   } else {
//     return false;
//   }
//   if (lnameValue === "") {
//     // show error message
//     setErrorFor(lastName, "Required last name");
//   } else {
//     return false;
//   }




// }

// function setErrorFor(input, message) {
//   const formGroup = input.parentElement;
//   const span = formGroup.querySelector("span");

//   span.innerHTML = message;

//   formGroup.className = "form-group error";
// }



















// const firstName = document.getElementById('inputFirstName').value;
// const lastName = document.getElementById('inputLastName').value;
// const birthday = document.getElementById('inputBirthday').value;
// const address = document.getElementById('inputAddress').value;
// const city = document.getElementById('inputCity').value;
// const zip = document.getElementById('inputZip').value;
// const phone = document.getElementById('inputPhone').value;
// const email = document.getElementById('inputEmail4').value;

// if (firstName == "") {
//   document.getElementById('fName').innerHTML= "Required";
//   return false
// }

// if (lastName == "") {
//   document.getElementById('lName').innerHTML= "Required";
//   return false
// }
// if (birthday == "") {
//   document.getElementById('dob').innerHTML= "Required";
//   return false
// }
// if (address == "") {
//   document.getElementById('address').innerHTML= "Required";
//   return false
// }
// if (city == "") {
//   document.getElementById('city').innerHTML= "Required";
//   return false
// }
// if (zip == "") {
//   document.getElementById('zip').innerHTML= "Required";
//   return false
// }
// if (phone == "") {
//   document.getElementById('phone').innerHTML= "Required";
//   return false
// }
// if (email == "") {
//   document.getElementById('email').innerHTML= "Required";
//   return false
// }

//   function validation () {
// }
