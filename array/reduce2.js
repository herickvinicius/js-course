const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
// Desafio 1: Todos os alunos são bolsistas?
const saoTodosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(function(anterior, atual) {
    return anterior && atual
})

//Desafio 2: Algum aluno é bolsista?
const temBolsista = alunos.map(aluno => aluno.bolsista).reduce((anterior, atual) => anterior || atual ) // No reduce, dessa vez, utilizei retorno implícito.

console.log(saoTodosBolsistas, temBolsista)