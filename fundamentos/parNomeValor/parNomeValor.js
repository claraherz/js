//par nome/valor
const saudacao = 'Opa' //contexto l�xico 1

function exec(){
    const saudacao = 'Falaaa' //contexto l�xico 2
    return saudacao
}

//Objetos s�o grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    pero: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)