function hora() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `agora são ${hora}:${minutos} horas`
    mensagem.innerHTML = `você tem ${d}`
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML = `agora são ${hora}:${minutos} horas, Bom dia!`
        if (minutos < 10) {
            msg.innerHTML = `agora são ${hora}:0${minutos} horas, Bom dia!`
    }}
    else if (hora >= 12 && hora <= 17) {
        msg.innerHTML = `agora são ${hora}:${minutos} horas, Boa tarde!`
        if (minutos < 10) {
            msg.innerHTML = `agora são ${hora}:0${minutos} horas, Bom tarde!`
    }

    }
    else if (hora >= 17 && hora <= 0) {
        msg.innerHTML = `agora são ${hora}:${minutos} horas, Boa noite`
        if (minutos < 10) {
            msg.innerHTML = `agora são ${hora}:0${minutos} horas, Bom noite!`
    }
    }
}
function clicar() {
    let mensagem = window.document.getElementById('era')
    let ok = window.document.getElementById('ok')
    var d = 1
        ok.innerHTML = `você trabalhou e seu saldo foi para ${d}!`
        d += 10890
    mensagem.innerHTML  = `você tem ${d}`
}