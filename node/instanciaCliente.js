const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// Instancia unica: mudanças feitas por contadorA.inc() também refletem em contadorB
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// Instância nova: mudanças feitas por contadorC.inc() não afetam contadorD, pois trata-se de outra instância.
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)