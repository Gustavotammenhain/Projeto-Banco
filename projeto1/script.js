function login() {
  let cpf = document.getElementById('cpf').value
  let password = document.getElementById('password').value
  if (cpf == "1" && password == "2") {
    window.location.href = "extrato.html"
    return false;
  } else {
    alert("Senha errada")
  }
}