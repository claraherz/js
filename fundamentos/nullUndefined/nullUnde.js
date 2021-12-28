//const a = {name: 'Teste'}
//console.log(a)
//const b = a
//console.log(b)
//b.name = 'Opa'
//console.log(a)

//let c = 3
//let d = c
//d++
//console.log(c, d)

let valor //não iniciada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) não funciona, pois null não tem nenhuma referencia ao toString()

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined, deixar que a maquina atribua isso, procure outras formas de zerar o objeto.
console.log(!!produto.preco)
console.log(produto)
console.log(produto.preco)
//delete produto.preco se vc quiser deletar um atributo de um objeto essa é a forma correta

produto.preco = null //sem preço
//caso precise usar um dos dois, opte usar o null do que o undefined ;)
console.log(!!produto.preco)
console.log(produto)
