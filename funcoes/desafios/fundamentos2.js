function recebeLados(lado1, lado2, lado3){
    if((lado1+lado2+lado3)/3 == lado1)
    {
        return 'É um triangulo Equilátero'
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return 'É um triangulo Isóceles'
    }
    else{
        return 'É um triangulo Escaleno'
    }
}

console.log(recebeLados(1,1,1))
console.log(recebeLados(1,1,2))
console.log(recebeLados(2,1,1))
console.log(recebeLados(1,2,1))
console.log(recebeLados(1,2,3))