let passInp = document.getElementById("password");
let ConfPassInp = document.getElementById("confirm-password");

function ShowPass() {
  if (passInp.type === "password") {
    passInp.type = "text";
  } else {
    passInp.type = "password";
  }
}
function ShowConfPass() {
  if (ConfPassInp.type === "password") {
    ConfPassInp.type = "text";
  } else {
    ConfPassInp.type = "password";
  }
}
let status = true;
let name = document.getElementById("username");
let nationality = document.getElementById("country");
let phoneNumber = document.getElementById("number");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

function validateRegistration() {
  let span2 = document.querySelector(".country");
  let span1 = document.querySelector(".username");
  let span3 = document.querySelector(".number");
  let span4 = document.querySelector(".email");
  let span5 = document.querySelector(".password");
  let span6 = document.querySelector(".confirm-password");
  
  if (name.value == "") {
    span1.style.visibility = "visible";
    name.focus();
    status = false;
  }

  if (nationality.value == "Select Your Nationality") {
     span2.style.visibility = "visible";
    nationality.focus();
    status = false;
  }

  if (phoneNumber.value == "") {
     span3.style.visibility = "visible";
    phoneNumber.focus();
    status = false;
  }

  if (email.value == "") {
     span4.style.visibility = "visible";
    email.focus();
    status = false;
  }

  if (password.value == "") {
     span5.style.visibility = "visible";
    password.focus();
    status = false;
  }

  if (confirmPassword.value == "") {
     span6.style.visibility = "visible";
    confirmPassword.focus();
    status = false;
  }

  if (password.value != confirmPassword.value) {
    alert("Passwords do not match.");
    password.focus();
    status = false;
  }
return status;
}


const selectors = [
  "#username",
  "#country",
  "#number",
  "#email",
  "#password",
  "#confirm-password",
];

selectors.forEach((element) => {
  document.querySelector(element).addEventListener("input", (event) => {
    let emailMatch=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    switch (event.target.id) {
      case "username":
        if (event.target.value.length ===0 || !isNaN(event.target.value))
        document.querySelector(`.${event.target.id}`).style.visibility =
            "visible";
            
        else
        document.querySelector(`.${event.target.id}`).style.visibility =
            "hidden";
        break;
      case "country":
        if (event.target.value === "Select Your Nationality")
        document.querySelector(`.${event.target.id}`).style.visibility =
        "visible";
        else
        document.querySelector(`.${event.target.id}`).style.visibility =
          "hidden";
          break;
          case "number":
            if (event.target.value.length ===0 || isNaN(event.target.value))
            document.querySelector(`.${event.target.id}`).style.visibility =
                "visible";
            else
            document.querySelector(`.${event.target.id}`).style.visibility =
                "hidden";
                break;
          case "email":
            if (event.target.value.length === 0 || event.target.value.match(emailMatch))
            document.querySelector(`.${event.target.id}`).style.visibility =
                "hidden";
                else
                document.querySelector(`.${event.target.id}`).style.visibility="visible";
                break;
          case "password":

                if (event.target.value.length < 8 )
            document.querySelector(`.${event.target.id}`).style.visibility =
                "visible";
            else
            document.querySelector(`.${event.target.id}`).style.visibility =
                "hidden";
                break;
          case  "confirm-password":

                if (event.target.value.length === 0 )
            document.querySelector(`.${event.target.id}`).style.visibility =
                "visible";
            else
            document.querySelector(`.${event.target.id}`).style.visibility =
                "hidden";
                break;

    
      default:
        break;
    }
  });
});
const form=document.querySelector(".form");
form.addEventListener('submit',async (event)=>{
  event.preventDefault()

  const data = {
    name: name.value,
    nationality: nationality.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    password:password.value
  };
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    if(jsonResponse.success){
      console.log(jsonResponse);
    window.location.href = '/views/test.html';
    } else {
      alert("Please complete the Registration form")
    }
  } catch (error) {
    console.error(error);
  }
});

