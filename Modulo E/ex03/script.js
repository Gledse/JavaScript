function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML +=`${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for(let c = 1; c >= f; c -= p) {
                res.innerHTML +=`${c} \u{1F449} `
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
}

    

