function validarCPF(cpf) {
  // Remover caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Validar tamanho
  if (cpf.length !== 11) {
    return false;
  }

  // Proibir sequência de números iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }
  let primeiroDigito = (soma * 10) % 11;
  primeiroDigito = primeiroDigito === 10 ? 0 : primeiroDigito;

  if (parseInt(cpf[9]) !== primeiroDigito) {
    return false;
  }

  // Calcular o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }
  let segundoDigito = (soma * 10) % 11;
  segundoDigito = segundoDigito === 10 ? 0 : segundoDigito;

  if (parseInt(cpf[10]) !== segundoDigito) {
    return false;
  }

  return true;
}

// Exportar a função para o arquivo de testes
module.exports = { validarCPF };
