const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //não existe na string mas js não mostra nada ou seja um caractere nulo

console.log(escola.charCodeAt(3)) //valor na tabela ascii ou unicode
console.log(escola.indexOf(3))
console.log(escola.substring(1)) // print: od3r
console.log(escola.substring(0, 3)) // print: Cod

//setenças que fazem a mesma coisa
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola + "!")
//end

console.log(escola.replace(/\d/, 'e')) // /\d/ substitui o primeiro digito encontrado pelo o que vc pediu e /\w/ substitui a primeira letra pelo o que vc pediu, /\d/g substitui todas os digitos pelo o que vc pediu e /\w/g substitui todas as letras pelo o que vc pediu
console.log('Ana,Maria,Pedro'.split(','))// transforma a string em um array