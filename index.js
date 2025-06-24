document.addEventListener("DOMContentLoaded", () => {
  // after document loaded
  document.getElementById("userName").addEventListener("input", validateConnectForm);
  validateConnectForm();
  let connectForm = document.getElementById("connectForm");
  connectForm.addEventListener("submit", connectToRoom);
  document.getElementById("messageContainer").style.display = "none";
  this.connectToRoom({});
});

function validateConnectForm() {
  let button = document.querySelector("#connectForm button[type='submit']");
  let connectForm = document.getElementById("connectForm");
  button.disabled = !connectForm.checkValidity();
}

function connectToRoom(e) {
  e.preventDefault();
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("messageContainer").style.display = "flex";
}
