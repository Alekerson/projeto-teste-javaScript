const freteGratis = require("../desconto")

test("frete será verdadeiro para valores maior ou igual a 150", ()=>{
    expect(freteGratis(200)).toBeTruthy()//Espero que o resultado seja verdadeiro
})

test("frete será verdadeiro para valores menor ou igual a zero",() =>{
    expect(freteGratis(-8)).toBeLessThanOrEqual(0)
})