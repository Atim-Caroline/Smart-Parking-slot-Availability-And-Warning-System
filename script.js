
// SHOW REGISTER FIRST
window.onload = function () {
  document.getElementById("registerPage").style.display = "block";
  document.getElementById("loginPage").style.display = "none";
};

// REGISTER FUNCTION
async function register() {
  const email = document.getElementById("regEmail").value;
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  // Validation
  if (!email || !username || !password) {
    alert("Please fill in all fields");
    return;
  }

  if (password.length < 8 || !/\d/.test(password)) {
    alert("Password must be longer than 8 characters and contain at least one number.");
    return;
  }

  try {
    const response = await fetch("http://192.168.100.197:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, username, password })
    });

    const data = await response.text();

    if (response.ok) {
      alert("Registration successful! Please log in.");
      goToLogin();
    } else {
      alert("Registration failed: " + data);
    }

  } catch (err) {
    alert("Backend not connected");
    console.log(err);
  }
}

// SWITCH TO LOGIN PAGE
function goToLogin() {
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

// LOGIN FUNCTION
async function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // FIXED validation
  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const response = await fetch("http://192.168.100.197:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.text();

    if (response.ok) {
      alert("Login success: " + data);
    } else {
      alert("Login failed");
    }

  } catch (err) {
    alert("Backend not connected");
    console.log(err);
  }
}