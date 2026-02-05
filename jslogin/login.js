function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (!u || !p) {
    alert("Boş bırakma");
    return;
  }

  // DEMO KONTROL (şimdilik)
  // Gerçekte DB/Firebase olacak
  const kayitliUser = localStorage.getItem("username");
  const kayitliPass = localStorage.getItem("password");

  if (u === kayitliUser && p === kayitliPass) {
    alert("Giriş başarılı");
    window.location.href = "profile.html";
  } else {
    alert("Kullanıcı adı veya şifre yanlış");
  }
}
