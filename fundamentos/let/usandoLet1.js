let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // com let, mesmo n�o sendo uma fun��o ele fica somente dentro do bloco, ou seja, isso funciona como let (n�o � possivel criar dois lets com a mesma nomenclatura no mesmo escopo, mas em blocos diferentes isso � possivel, diferente de var)
}

console.log('fora =', numero)