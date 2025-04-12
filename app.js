// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};


console.log({fromDollarToYen}, {fromEuroToDollar}, {fromYenToPound})
module.exports = {sum, fromEuroToDollar, fromDollarToYen}
