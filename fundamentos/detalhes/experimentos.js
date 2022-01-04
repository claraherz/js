let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'


console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var ou let!
abc = 3 // não faça isso Lala
console.log(global.abc)

//module.exports = { f: 456, g: false, h: 'teste' }