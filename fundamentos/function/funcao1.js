//Fun��o sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // resultado ser� NaN (not a number)
imprimirSoma(2, 10, 4 , 5, 6, 7, 8) // pega os dois primeiros numeros e ignora o resto
imprimirSoma() // resultado ser� NaN (not a number)

//Fun��o com retorno
function soma(a, b = 1) //quando colocamos que b � igual a 0, significa que caso a segunda variavel n�o for declarada/inserida automaticamente b � igual a 0
{ 
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //resultado ser� NaN (not a number)