let valores = [9, 8, 2, 6, 3, 5]
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('') // esses dois for tem a mesma função
*/
for(let pos in valores) { // para cada posição dentro do valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('')

// Para buscar um valor no vector e me mostrar a posição
let pos = valores.indexOf(9) // irá procurar no vector se tem o valor 9 e se tiver irá me mostrar a posição desse valor
console.log(`O valor está na posição ${pos}`)