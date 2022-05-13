let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { // para saber se o valor é ou não um número
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) { // para saber se o número já está na lista ou não
    if(l.indexOf(Number(n)) != -1) { // -1 significa que o valor não foi encontrado na lista >>> != diferente de
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value)&& !inLista(num.value, valores)) { // !inLista não está na lista
        valores.push(Number(num.value)) // adicionando os valores no Vector
        let item = document.createElement('option') // para adicionar os elementos no select, é necessario criar uma tag option
        item.text = `Valor ${num.value} adicionando.`
        lista.appendChild(item)
        res.innerHTML = '';
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() // para o cursor voltar a piscar
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // para saber quantos elementos o meu vector tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { // (let pos = 0; pos < valores.length; pos++)
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        } 
        media = soma / tot
        res.innerHTML = '' // para limpar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`  
    }
}