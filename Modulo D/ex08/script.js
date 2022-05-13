function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'Imagens/manha.png'
        document.body.style.background = 'rgba(25, 100, 3, 0.836)'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'Imagens/tarde.png'
        document.body.style.background = 'rgba(97, 48, 3, 0.815)'
    } else {
        // Boa noite
        img.src = 'Imagens/noite.png'
        document.body.style.background = 'rgba(13, 2, 71, 0.699)'
    }
}