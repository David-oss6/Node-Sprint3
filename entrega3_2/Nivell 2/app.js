const aJ = require("./articulos.json");
const { Articulo } = require("./Articulo");
const { decorate } = require("./decorator");
let articulos = [];
let articulosDecorated = [];

// creaacion de articulos
aJ.forEach((x) => {
  articulos.push(new Articulo(x.nombre, x.valor, x.moneda));
});

console.table(articulos);

// decoramos los articulos
articulos.forEach((elem) => {
  articulosDecorated.push(decorate(elem));
});

console.table(articulosDecorated);
