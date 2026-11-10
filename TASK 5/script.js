const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;

  if (name === "" || email === "" || password === "" || age ==="") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
  } else if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
  } else if (password !== confirm) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful!";
    form.reset();
  }
});