const funcionario = require("../funcionario")
const funionario = require("../funcionario")

test("Salário será verdadeiro ao ser igual a um valor passado",()=>{
   expect( funcionario.getsalario().toBe(1300))
})