let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // com let, mesmo não sendo uma função ele fica somente dentro do bloco, ou seja, isso funciona como let (não é possivel criar dois lets com a mesma nomenclatura no mesmo escopo, mas em blocos diferentes isso é possivel, diferente de var)
}

console.log('fora =', numero)