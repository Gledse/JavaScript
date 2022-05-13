var agora = new Date() // Agora em código
var hora = agora.getHours() // para ter a hora actual do sitema ou do cliente
var minuto = agora.getMinutes()
console.log(`Agora são extamente ${hora}:${minuto} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}