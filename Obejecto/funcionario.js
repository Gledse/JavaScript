// Programação orientada a objectos
class Funcionario {

    constructor() { // metodo construtor >>> primeira função que é chamado toda vez que nós executa a nossa classe
        this.codigo = 0;
        this.nome = '';
        this.sexo = ''
    }
    adicionar() {
        window.alert('Funcionou!')
    }

    visualizar() {
        window.alert('item visualizado com sucesso!')
    }

    apagar() {
        window.alert('item excluido com sucesso!')
    }
}
 var funcionario = new Funcionario(); // instanciar


/*
Obecto
    classe funcionario
        Atributos(id, nome, valor)

        Metodos (funções, adicionar(), deletar(), editar())
*/


























/*function Funcionario() {
    this.codigo = codigo
    this.nome = nome
    this.sexo = sexo
}
function cadastrar() {
    f = new Funcionario
    let cod = document.getElementById('txtCodigo')
    f.nome = document.querySelector('input#txtNome')
    let sex = document.getElementsByName('radSexo')
    f.codigo = Number(cod.value)

    let genero = ''
    if (sex[0].checked) {
        genero = 'Masculino'
        f.sexo = genero
    } else if (sex[1].checked) {
        genero = 'Femenino'
        f.sexo = genero
    }
    cod.value = ''
    nom.value = ''
}

function pesquisar() {
    f = new Funcionario
    let res = document.querySelector('div#res')

    res.innerHTML += `Código: ${f.codigo} <br>`
    res.innerHTML += `Nome: ${f.nome} <br>`
    res.innerHTML += `Sexo: ${f.sexo} <br>`
}*/
