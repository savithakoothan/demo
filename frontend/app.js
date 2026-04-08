const BASE_URL = "http://localhost:3000/api";

// Register
async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;

  await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  alert("Registered!");
}

// Login
async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;

  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);

  alert("Logged in!");
}

// Test API
async function testAPI() {
  const res = await fetch(`${BASE_URL}/test`);
  const data = await res.json();

  alert(data.message);
}