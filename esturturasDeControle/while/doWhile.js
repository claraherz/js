function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

//o do while é mias difiicl de ser utlizado (não é comum)

do {
    opcao = getInteiroAleatorioEntre(-1, 30)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)
console.log('Até a próxima!')