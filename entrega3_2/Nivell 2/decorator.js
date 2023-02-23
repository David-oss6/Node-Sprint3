const monedas = require("./currency_conversions.json");

const decorate = (art) => {
  moneda = art.moneda.toLowerCase();
  switch (moneda) {
    case "usd":
      art = {
        ...art,
        euros: art.valor * monedas.USD_EUR,
      };
      break;
    case "gbp":
      art = {
        ...art,
        euros: art.valor * monedas.GBP_EUR,
      };
      break;
    case "chf":
      art = {
        ...art,
        euros: art.valor * monedas.CHF_EUR,
      };
      break;
    case "jpy":
      art = {
        ...art,
        euros: art.valor * monedas.JPY_EUR,
      };
      break;
    case "cad":
      art = {
        ...art,
        euros: art.valor * monedas.CAD_EUR,
      };
      break;
    case "cny":
      art = {
        ...art,
        euros: art.valor * monedas.CNY_EUR,
      };
      break;
    default:
      console.log("la moneda no existe");
  }
  return art;
};

module.exports = { decorate };
