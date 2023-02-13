let passInp = document.getElementById("password");
function ShowPass(){
    if (passInp.type === "password") {
        passInp.type = "text";
      } else {
        passInp.type = "password";}
      };
      let email = document.getElementById("username");
      let password = document.getElementById("password");
      
function validateLogIn() {

if (email.value == "") {
    alert("Please enter your email.");
    email.focus();
    return false;
  }
  if (password.value == "" ) {
    alert("Please enter your password.");
    password.focus()
    return false;
  }
}

const form=document.querySelector(".form");
form.addEventListener('submit',async (event)=>{
  event.preventDefault()

  const data = {
    email: email.value,
    password:password.value
  };
  try {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if(jsonResponse.success) {
      sessionStorage.setItem('token', jsonResponse.token);
      sessionStorage.setItem('userId', jsonResponse.userId)        
      window.location.href = '/views/profile.html';
    } else {
      alert("Invalid Email or Password, Please Try Again")
    }
  } catch (error) {
    console.error(error);
  }
})