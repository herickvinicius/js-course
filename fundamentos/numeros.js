const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)  //print media's value
console.log(media.toFixed(2))   //print media's value with 2 decimals
console.log(media.toString(2))  //print media's value in binary (as a string)
console.log(typeof media)   //print media's type