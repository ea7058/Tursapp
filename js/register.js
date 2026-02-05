function register() {
  const u = document.getElementById("username").value;
  const p1 = document.getElementById("password").value;
  const p2 = document.getElementById("password2").value;
  const rules = document.getElementById("rules").checked;

  if (!u || !p1 || !p2) {
    alert("Boş bırakma");
    return;
  }

  if (p1 !== p2) {
    alert("Şifreler aynı değil");
    return;
  }

  if (!rules) {
    alert("Kuralları kabul et");
    return;
  }

  alert("Kayıt başarılı (şimdilik demo)");
}
