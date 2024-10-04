function handleSubmit() {
  let userNameElement = document.getElementById("userName");
  let passwordElement = document.getElementById("password");
  let userNameErrElement = document.getElementById("userNameErr");
  let passWordErrElement = document.getElementById("passWordErr");
  if (userNameElement.value == null || userNameElement.value == "") {
    userNameElement.classList.add("inputError");
    userNameErrElement.textContent = "Vui lòng nhập tên đăng nhập";
    return false;
  }
  if (passwordElement.value == null || passwordElement.value == "") {
    passwordElement.classList.add("inputError");
    passWordErrElement.textContent = "Vui lòng nhập mật khẩu";
    return false;
  }
  if (passwordElement.value == "1" && userNameElement.value == "user") {
    alert("Đăng nhập thành công!");
    window.location.href = "../home/index.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    passwordElement.classList.add("inputError");
    userNameElement.classList.add("inputError");
    return false;
  }
}
function handleUserNameInput() {
  let userNameElement = document.getElementById("userName");
  userNameElement.classList.remove("inputError");
  let userNameErrElement = document.getElementById("userNameErr");
  userNameErrElement.textContent = "";
}
function handlePasswordInput() {
  let passwordElement = document.getElementById("passWord");
  passwordElement.classList.remove("inputError");
  let passWordErrElement = document.getElementById("passWordErr");
  passWordErrElement.textContent = "";
}

function showPass() {
  document.getElementById("password_hide").style.display = "none";
  document.getElementById("password_show").style.display = "block";
  document.getElementById("password").type = "text";
}
function hidePass() {
  document.getElementById("password_hide").style.display = "block";
  document.getElementById("password_show").style.display = "none";
  document.getElementById("password").type = "password";
}
