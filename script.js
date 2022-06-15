const form = document.getElementById("form");
const container = document.querySelector(".container");
const sign = document.querySelector(".text-signup-text");
const login = document.querySelector(".text-signin-text");
const username = document.getElementById("username");
const email = document.getElementById("theEmail");
const password1 = document.getElementById("thePassword1");
const password2 = document.getElementById("thePassword2");
const but = document.getElementById("myBtn");
const emailIN = document.getElementById("Email-Sign-in");
const passwordIN = document.getElementById("PasswordSignin");
const butLognin = document.querySelector(".but");

//to appear signup and longin form 
    sign.addEventListener("click",()=> {
        container.classList.add("active");
        console.log("workingIN")
    })

    login.addEventListener("click", () => {
        container.classList.remove("active");
         console.log("working");
    })

butLognin.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputsIN();
  console.log("oiIn");
});

function checkInputsIN() {
 
  const emaiInlvalue = emailIN.value.trim();
  const passwordInvalue = passwordIN.value.trim();
 
    if (emaiInlvalue === "") {
      // show error, add error class
      setErrorFor(emailIN, "Email cannot be blank");
    } else if (!isEmail(emaiInlvalue)) {
      setErrorFor(emailIN, "Email is not valid");
    } else {
      setSuccessFor(emailIN, "");
    }

      if (passwordInvalue === "") {
        setErrorFor(passwordIN, "Password cannot be blank");
      } else {
        setSuccessFor(passwordIN, "");
      }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("oi");
  checkInputs();

});

function checkInputs() {
  //get the values from the inputs
  //the trim() is to remove white spaces

  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const password1value = password1.value.trim();
  const password2value = password2.value.trim();

  if (usernamevalue === "") {
    // show error, add error class
    setErrorFor(username, "User name cannot be blank");
  } else {
    //add success clas
    setSuccessFor(username, "");
  }

  if (emailvalue === "") {
    // show error, add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailvalue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email, "");
  }

  if (password1value === "") {
    setErrorFor(password1, "Password cannot be blank");
  } else {
    setSuccessFor(password1, "");
  }

  if (password2value === "") {
    // show error, add error class
    setErrorFor(password2, "Password cannot be blank");
  } else if (password1value !== password2value) {
    setErrorFor(password2, "The passwords must be equal");
  } else {
    setSuccessFor(password2, "");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  // add error  message inside small
  small.innerText = message;

  //add error class

  formControl.className = "form-control error";
}



function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/.test(
    email
  );
}
but.addEventListener("click", 
function act() {
  if (
    (form.value, username.value, email.value, password1.value, password2.value)
  ) {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block"

      // When the user clicks on <span> (x), close the modal
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
})
