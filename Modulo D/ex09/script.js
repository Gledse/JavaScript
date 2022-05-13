function verificar() {
   var data = new Date()
   var ano = data.getFullYear() // Irá levar somente 4 digitos exemplo 20019 >>> 0019 
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number(fano.value) > ano) { // Se ele não digitar o ano ou se o ano for maior que ano actual irá dar erro
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // para poder selecionar o radio
        var genero = ''
        var img = document.createElement('img') // estou criando uma variavel com id
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'Imagens/BebêMasculino.jpg') // estou add a imagem na variavel img
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Imagens/JovemMasculino.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/AdultoMasculino.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'Imagens/velhoMasculino.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'Imagens/BebêFemenino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Imagens/JovemFemenino.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/AdultoFemenino.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'Imagens/VelhaFemenino.jpg')
            }
        }
        res.innerHTML = `Detectamos uma pessoa do gênero ${genero} com ${idade} anos.`
        res.style.textAlign = 'center' // para centralizar a imagem, e res acima
        res.appendChild(img) // para fazer aparecer a imagem, e irá aparecer por baixo da mensagem "Detectamos..."
   }
}