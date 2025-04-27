const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  if (emailValue === "" || passValue === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailValue,
    password: passValue,
  };
  console.log(formData);
  logForm.reset();
});
