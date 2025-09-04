let isLogin = true;

function toggleForm() {
  const formTitle = document.getElementById("form-title");
  const signupExtra = document.getElementById("signup-extra");
  const authBtn = document.getElementById("auth-btn");
  const toggleText = document.querySelector(".toggle-link");

  if (isLogin) {
    formTitle.textContent = "Signup";
    signupExtra.style.display = "block";
    authBtn.textContent = "Signup";
    toggleText.textContent = "Already have an account? Login";
  } else {
    formTitle.textContent = "Login";
    signupExtra.style.display = "none";
    authBtn.textContent = "Login";
    toggleText.textContent = "Don't have an account? Signup";
  }
  isLogin = !isLogin;
}

document.getElementById("auth-form").addEventListener("submit", function(e) {
  e.preventDefault();
  if (isLogin) {
    alert("Logging in with username: " + document.getElementById("username").value);
  } else {
    alert("Signing up new user: " + document.getElementById("username").value);
  }
});
