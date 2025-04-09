document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usuarioInput = document.getElementById("login-usuario").value.trim();
    const senhaInput = document.getElementById("login-senha").value.trim();
  
    const erroUsuario = document.getElementById("erro-login-usuario");
    const erroSenha = document.getElementById("erro-login-senha");
  
    erroUsuario.textContent = "";
    erroSenha.textContent = "";
  
    const dados = JSON.parse(localStorage.getItem("dadosFormulario"));
  
    if (!dados) {
      erroUsuario.textContent = "Nenhum usuário cadastrado.";
      return;
    }
  
    if (usuarioInput !== dados.usuario) {
      erroUsuario.textContent = "ID de usuário incorreto.";
    } else if (senhaInput !== dados.senha) {
      erroSenha.textContent = "Senha incorreta.";
    } else {
      alert("Login realizado com sucesso!");
      // Redireciona para outra página, se desejar
      // window.location.href = "dashboard.html";
    }
  });
  