

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var dia = agora.getDay()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dias = agora.getUTCDay()
console.log (`agora são ${hora}:${minutos} do ano ${ano} do mês ${mes} no dia ${dias}`)
if (hora <= 14 ) {
    console.log("Bom dia!")
}
else if (hora < 18) {
    console.log("Boa tarde!")
}
else if (hora >= 18) {
    console.log("Boa noite!")
}

switch (dia) {
    case 0:
        console.log('hoje é Domingo')
        break
    case 1:
        console.log('hoje é Segunda-feira')
        break
    case 2:
        console.log('hoje é Terça-feira')
        break
    case 3:
        console.log('hoje é Quarta-feira')
        break
    case 4:
        console.log('hoje é Quinta-feira')
        break
    case 5:
        console.log('hoje é Sexta-feira')
        break
    case 6:
        console.log('hoje é Sábado')
        break
    default:
        console.log('[System] puts deu erro')
        break

    
}