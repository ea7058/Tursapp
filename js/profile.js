// Giriş kontrolü
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!username) {
  window.location.href = "login.html";
}

// Profil kodu kontrolü / üretme
let code = localStorage.getItem("profileCode");

if (!code) {
  code = "TRK-" + Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("profileCode", code);
}

// Ekrana yazdır
document.getElementById("username").innerText = username;
document.getElementById("userCode").innerText = code;

// Çıkış
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  window.location.href = "login.html";
}
