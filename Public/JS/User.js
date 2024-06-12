document.addEventListener("DOMContentLoaded", function() {
  let UserReg = document.getElementById("UserReg");

  if (UserReg) {
    UserReg.addEventListener('submit', register);
  }

  function register(e) {
    e.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let address = document.getElementById("shipping-address").value
    let mobileno = document.getElementById("mobile").value
    let paymentmethod = document.getElementById("payment-method").value;
    let confirmpassword = document.getElementById("confirm-password").value


    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    let userData = {
      name: name,
      email: email,
      username: username,
      password: password,
      address: address,
      mobileno: mobileno,
      paymentmethod: paymentmethod
    };

    console.log("User registered successfully:", userData);
    alert("User registered successfully.");

  }
});
