const nome = 'Rebecca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`
console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

//função arrow
const up = texto => texto.toUpperCase()
console.log(`Eiii... ${up('cuidado')}!`)