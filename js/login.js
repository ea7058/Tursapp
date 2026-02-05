function login() {
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value;

  if (!u || !p) {
    alert("Boş bırakma");
    return;
  }

  // ADMIN BİLGİLERİ
  const adminUser = localStorage.getItem("adminUser");
  const adminPass = localStorage.getItem("adminPass");

  // NORMAL KULLANICI
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  // ADMIN GİRİŞİ
  if (u === adminUser && p === adminPass) {
    localStorage.setItem("username", adminUser);
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
    return;
  }

  // NORMAL GİRİŞ
  if (u === savedUser && p === savedPass) {
    localStorage.setItem("role", "user");
    window.location.href = "profile.html";
  } else {
    alert("Kullanıcı adı veya şifre yanlış");
  }
}
