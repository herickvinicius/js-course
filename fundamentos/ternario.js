// Função arrow
// variável que vai receber a função    =   parâmetro(s)    =>  expressão cujo valor será retornado
// const resultado                      =   nota            =>  nota >= 7 ? 'Aprovado' : 'Reprovado'    <--- operação ternária

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))