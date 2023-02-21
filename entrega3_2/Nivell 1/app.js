const { Calculadora } = require("./Claculadora");
const { Middleware } = require("./Middleware");
const params = require("./params.json");
const calcu = new Calculadora();
const mid = new Middleware(calcu);

function cuadrado(z) {
  z.x = z.x * z.x;
  z.y = z.y * z.y;
  return z;
}
function cubo(z) {
  z.x = z.x * z.x * z.x;
  z.y = z.y * z.y * z.y;
  return z;
}
function division(z) {
  z.x = z.x / z.y;
  z.y = z.y / z.x;
  return z;
}

// modificamos {objeto enviado}
mid.use((req, next) => {
  req = cuadrado(req);
  console.log("cuadrado", req);
  req = cubo(req);
  console.log("cubo", req);
  req = division(req);
  console.log("division", req);
  next(); //llama a middleware
});

console.log("SUMA", mid.sumar({ x: params.dos, y: params.tres }));
console.log("RESTA", mid.restar({ x: params.tres, y: params.dos }));
console.log(
  "MULTIPLICACION",
  mid.multiplicar({ x: params.tres, y: params.tres })
);
