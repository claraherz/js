let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //  a exclamação  aparece como 'not', fazendo aquilo se tornar um boolean. ou seja !isAtivo == false && !!isAtivo == true, já que !isAtivo 'sounds like' a variavel não é o número '1' e !!isAtivo diz exatamente que a variavel é = 1

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo =true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //sem o !! retorna o primeiro valor verdadeiro encontrado na sequencia

let nome = 'Lucas'
console.log(nome || 'Desconhecido')