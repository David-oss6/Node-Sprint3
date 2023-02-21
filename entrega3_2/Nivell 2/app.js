
const { Decorator } = require("./decorator")

class Converter {
    getUSD(z) { return z }
    getGBP(z) { return z }
    getCHF(z) { return z }
    getJPY(z) { return z }
    getCAD(z) { return z }
    getCNY(z) { return z }
}

let conversion = new Converter(20)
conversion = new Decorator(conversion)

console.log(`USD to €:`, conversion.getUSD(10))
console.log(`GBP to €:`, conversion.getGBP(30))
console.log(`CHF to €:`, conversion.getCHF(15))
console.log(`JPY to €:`, conversion.getJPY(202))
console.log(`CAD to €:`, conversion.getCAD(20))
console.log(`CNY to €:`, conversion.getCNY(20))

