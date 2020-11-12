function lancarErro(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function gritarNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        lancarErro(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Robertinho'}
gritarNome(obj)