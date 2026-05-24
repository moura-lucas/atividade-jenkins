const { cParaF, fParaC } = require("./conversor");

describe("Suíte de Testes: Conversão de Temperatura", () => {
  // Casos de Teste: fahrenheit para celsius
  test("1. Deve converter 32°F para 0°C", () => {
    expect(fParaC(32)).toBe(0);
  });

  test("2. Deve converter 212°F para 100°C", () => {
    expect(fParaC(212)).toBe(100);
  });

  // Casos de Teste: celsius para fahrenheit
  test("3. Deve converter 0°C para 32°F", () => {
    expect(cParaF(0)).toBe(32);
  });

  test("4. Deve converter -40°C para -40°F", () => {
    expect(cParaF(-40)).toBe(-40);
  });

  // Caso de Teste de Exceção
  test("5. Deve lançar um erro se o parâmetro não for um número", () => {
    expect(() => fParaC("trinta")).toThrow("O input deve ser um número");
  });
});
