const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// fromDollarToYen
test("One dollar should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dollar son 156.5 yen, entonces 3.5 dolares debe ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1 dolar son 156.5 yen, entonces 3.5 dolares deberían ser = (3.5 * 156.5)
})

// fromYenToPound
test("156.5 yen should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(200);

    // Si 156.5 yen son 0.87 pound, entonces 200 yen debe ser (200 * 0.87)
    const expected = 200 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(200)).toBe(174); // 156.5 yen son 0.87 pound, entonces 200 yen deberían ser = (200 * 0.87)
})