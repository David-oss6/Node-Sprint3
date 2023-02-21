class Calculadora {
  sumar(z) {
    return z.x + z.y;
  }

  restar(z) {
    return z.x - z.y;
  }

  multiplicar(z) {
    return z.x * z.y;
  }
}

module.exports = { Calculadora };
