document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envio automático
    let valid = true;
  
    document.querySelectorAll(".erro").forEach(span => span.textContent = "");
  
    const mostrarErro = (id, msg) => {
      document.getElementById(id).textContent = msg;
      valid = false;
    };
  
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const get = (id) => document.getElementById(id).value.trim();
  
    if (get("nome") === "") mostrarErro("erro-nome", "Preencha seu nome.");
    if (get("data") === "") mostrarErro("erro-data", "Informe a data de nascimento.");
    if (get("cpf") === "" || isNaN(get("cpf"))) mostrarErro("erro-cpf", "Digite um CPF válido.");
    if (get("email") === "") {
      mostrarErro("erro-email", "O campo de e-mail é obrigatório.");
    } else if (!validarEmail(get("email"))) {
      mostrarErro("erro-email", "Digite um e-mail válido.");
    }
    if (get("telefone") === "") mostrarErro("erro-telefone", "Informe o telefone.");
    if (!document.getElementById("sexo").value) mostrarErro("erro-sexo", "Selecione o sexo.");
    if (!document.getElementById("identidade").value) mostrarErro("erro-identidade", "Envie a identidade.");
    if (get("cep") === "") mostrarErro("erro-cep", "Informe o CEP.");
    if (get("rua") === "") mostrarErro("erro-rua", "Informe a rua.");
    if (get("numero") === "" || isNaN(get("numero"))) mostrarErro("erro-numero", "Número inválido.");
    if (get("cidade") === "") mostrarErro("erro-cidade", "Informe a cidade.");
    if (get("estado") === "") mostrarErro("erro-estado", "Informe o estado.");
    if (!document.getElementById("comprovante").value) mostrarErro("erro-comprovante", "Envie o comprovante.");
  
    const trilhasSelecionadas = Array.from(document.querySelectorAll(".trilha")).filter(t => t.checked);
    if (trilhasSelecionadas.length !== 1) mostrarErro("erro-trilha", "Selecione apenas uma trilha.");
  
    if (!document.getElementById("termosCheck").checked) {
      mostrarErro("erro-termos", "Você precisa aceitar os termos.");
    }
  
    if (get("usuario") === "") mostrarErro("erro-usuario", "Informe o ID de usuário.");
    if (get("senha") === "" || get("senha").length < 6) {
      mostrarErro("erro-senha", "A senha deve ter pelo menos 6 caracteres.");
    }
  
    if (valid) {
      alert("✅ Inscrição realizada com sucesso!");
      // this.submit(); // Caso queira enviar para o backend futuramente, descomente esta linha
    }
  });
  
  document.getElementById("salvar").addEventListener("click", function () {
    const campos = [
      "nome", "data", "cpf", "sexo", "email", "telefone", "identidade",
      "cep", "rua", "numero", "cidade", "estado", "comprovante",
      "usuario", "senha"
    ];
  
    let dados = {};
  
    campos.forEach(campo => {
      const elemento = document.getElementById(campo);
      if (elemento) {
        if (elemento.type === "file") {
          dados[campo] = elemento.value ? elemento.value.split("\\").pop() : "";
        } else {
          dados[campo] = elemento.value;
        }
      }
    });
  
    const trilhas = Array.from(document.querySelectorAll(".trilha"))
      .filter(t => t.checked)
      .map(t => t.value);
    dados["trilha"] = trilhas;
  
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
    alert("📝 Informações salvas com sucesso!");
  });
  