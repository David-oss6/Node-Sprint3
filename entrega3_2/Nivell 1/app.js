const { Calculadora } = require("./Claculadora");
const { Middleware } = require("./Middleware");
const params = require("./params.json");

const calcu = new Calculadora();
const app = new Middleware(calcu);

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

// añadimos las funciones que ejecutara middleware antes de las funciones calculadora
app.use((data, next) => {
  cuadrado(data);
  console.log("cuadrado", data);
  next();
});

app.use((data, next) => {
  cubo(data);
  console.log("cubo", data);
  next();
});

app.use((data, next) => {
  division(data);
  console.log("division", data);
  next();
});

console.log("SUMA", app.sumar({ x: params.dos, y: params.tres }));
// console.log("RESTA", app.restar({ x: params.tres, y: params.dos }));
// console.log(
//   "MULTIPLICACION",
//   app.multiplicar({ x: params.tres, y: params.tres })
// );
