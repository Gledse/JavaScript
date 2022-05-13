function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // para limpar a minha tabuada 
        while (c <= 10) {
            let item = document.createElement('option') // criando um option atrveis do Js ao inves do HTML
            item.text = `${n} X ${c} = ${n*c}` // criando um values atrveis do Js ao inves do HTML
            item.value = `tab ${c}` // vai chamar tab 1, 2, etc
            tab.appendChild(item)
            c++
        }
    }
}