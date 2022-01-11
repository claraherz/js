const a = 1
const b = 2
const c = 3

// antes
const obj1 = {a: a, b: b, c: c}
//depois do es2015
const obj2 = {a, b, c} // caso vc queira mudar o nome do objeto é necessario fazer como está em obj1
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)