const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 // evitar atributos com espa?o

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

'{ "nome": "Camisa Polo", "preco": 79.90 }' //json

console.log(prod2)