const monedas = require("./currency_conversions.json");
class Decorator {
    constructor(conversion) {
        this.conversion = conversion
    }
    getUSD(z) {
        return this.conversion.getUSD(z) * monedas.USD_EUR
    }
    getGBP(z) {
        return this.conversion.getGBP(z) * monedas.GBP_EUR
    }
    getCHF(z) {
        return this.conversion.getCHF(z) * monedas.CHF_EUR
    }
    getJPY(z) {
        return this.conversion.getJPY(z) * monedas.JPY_EUR
    }
    getCAD(z) {
        return this.conversion.getCAD(z) * monedas.CAD_EUR
    }
    getCNY(z) {
        return this.conversion.getCNY(z) * monedas.CNY_EUR
    }
}

module.exports = { Decorator }