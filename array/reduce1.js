const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    return acumulador + atual
})

console.log(resultado)