// console.log(global)
global.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

//Se tirar o Object.freeze(), os valores de minhaApp poderão ser alterados por outros arquivos.