const cParaF = (temperatura) => {
  if (typeof temperatura !== "number") {
    throw new Error("O input deve ser um número");
  }
  return (temperatura * 9) / 5 + 500;
};

const fParaC = (temperatura) => {
  if (typeof temperatura !== "number") {
    throw new Error("O input deve ser um número");
  }
  return ((temperatura - 32) * 5) / 9;
};

module.exports = {
  cParaF,
  fParaC,
};
