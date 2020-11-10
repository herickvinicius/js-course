const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const template = `
    Olá
    ${nome}!`

console.log(template)

//Expressões
console.log (`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Não se preocupe com essa função agora.
console.log(`Ei... ${up('cuidado')}!`)