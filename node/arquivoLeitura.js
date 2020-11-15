const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono (não recomendado)...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// como nosso arquivo a ser lido é um JSON, podemos simplificar fazendo:
const config = require('./arquivo.json') //require transforma arquivo JSON em objeto.
console.log(config.db) // repare que esse log é executado antes do log assíncrono.

// ler conteúdo de um diretório:
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})