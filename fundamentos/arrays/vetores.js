const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // mostra o tamanho do vetor, quantos indices existem
valores.push({id:3}, false, null, 'teste') //adiciona itens ao seu vetor
console.log(valores)

console.log(valores.pop()) //remove o ultimo item do seu vetor
delete valores[0] //deleta o item do indice que vc selecionar
console.log(valores)
console.log(typeof valores) // tipo == objeto