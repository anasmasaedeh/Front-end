
function enableEditing() {
    let inputs = document.querySelectorAll("input");
    let card=document.querySelector(".card")
    inputs.forEach(function(input) {
      input.disabled = false;
      input.style.cursor = "auto";
      input.style.boxShadow="0px 0px 5px 0px #a03f3f"
      card.style.boxShadow="0px 0px 10px 0px #a03f3f"
    });
    document.getElementById("edit-button").innerHTML = "Save";
    document.getElementById("edit-button").style.backgroundColor="#a03f3f"
    document.getElementById("edit-button").setAttribute("onclick", "submitForm()");

  }
  async function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const data = { firstName, lastName, email, age };

    const token = sessionStorage.getItem('token');
    const userId= sessionStorage.getItem('userId')
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const jsonResponse = await response.json();
    if (jsonResponse.success) {
        sessionStorage.setItem('user', JSON.stringify(jsonResponse.user));
        let inputs = document.querySelectorAll("input");
        inputs.forEach(function(input) {
          input.disabled = true;
          input.style.cursor = "not-allowed";
         input.style.boxShadow="0px 0px 5px 0px #4f84a7"
    
        });
        document.getElementById("edit-button").innerHTML = "Edit";
        document.getElementById("edit-button").style.backgroundColor="#4f84a7"
        document.getElementById("edit-button").setAttribute("onclick", "enableEditing()");
        alert("User data updated successfully!");
    } else {
        alert(jsonResponse.error);
    }
}
window.onload = async function(){
  let user = JSON.parse(sessionStorage.getItem('user'));
  document.getElementById("first-name").value = user.name;
  document.getElementById("last-name").value = user.nationality;
  document.getElementById("email").value = user.email;
  document.getElementById("age").value = user.phoneNumber;
  document.getElementById("edit-button").setAttribute("onclick", "enableEditing()");
}


  const getUser = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const userId = sessionStorage.getItem('userId');
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method:"GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      document.getElementById('first-name').value = data.name;
      document.getElementById('last-name').value = data.nationality;
      document.getElementById('email').value = data.email;
      document.getElementById('age').value = data.phoneNumber;
    } catch (error) {
      console.error(error);
    }
  };
  getUser();
  document.getElementById("logout").addEventListener("click", function() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
  
    window.location.href = '/views/test.html';
  });
  