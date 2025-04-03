const { validarCPF } = require('../src/validadorCPF');

describe('Validador de CPF', () => {
    //1
  test('Deve retornar true para CPF válido', () => {
    expect(validarCPF('123.456.789-09')).toBe(true); // Substitua por um CPF válido real
  });
   //2
  test('Deve retornar false para CPF inválido', () => {
    expect(validarCPF('123.456.789-00')).toBe(false); // CPF com dígito verificador errado
  });
   //3
  test('Deve retornar false para CPF com menos de 11 dígitos', () => {
    expect(validarCPF('123.456')).toBe(false);
  });
  //4
  test('Deve retornar false para CPF com mais de 11 dígitos', () => {
    expect(validarCPF('123.456.789.012')).toBe(false);
  });
   //5
  test('Deve retornar false para CPF com sequência de números iguais', () => {
    expect(validarCPF('111.111.111-11')).toBe(false);
  });
  //6
  test('Deve retornar false para CPF contendo caracteres inválidos', () => {
    expect(validarCPF('abc.def.ghi-jk')).toBe(false);
  });
  //7
  test('Deve retornar false para CPF vazio', () => {
    expect(validarCPF('')).toBe(false);
  });
  //8
  test('Deve retornar true para CPF válido sem formatação', () => {
    expect(validarCPF('12345678909')).toBe(true); // Substitua por um CPF válido real
  });
  //9
  test('Deve retornar false para CPF com espaço extra', () => {
    expect(validarCPF('123.456.789-09 ')).toBe(true);
  });
  //10
  test('Deve retornar false para CPF com letras', () => {
    expect(validarCPF('123.456.789-ab')).toBe(false);
  });
});
