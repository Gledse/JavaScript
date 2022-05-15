// Programação orientada a objectos
class Funcionario {

    constructor() { // metodo construtor >>> primeira função que é chamado toda vez que nós executa a nossa classe
        this.id = 1
        this.arrayFuncionario = [] // o meu array

    }

    // Eventos
    adicionar() {
        let funcionario = this.lerDados()

        if (this.validaCampo(funcionario)) {

            this.adicionarNoArray(funcionario)
            this.limpar()
        }
    }

    visualizar() {
        this.verDados()
    }

    excluir() {
        window.alert('excluido!')
    }

    // Metodos
    lerDados() {
        let funcionario = {} // o meu objecto
        funcionario.id = this.id
        funcionario.codigo = document.querySelector('input#txtCodigo').value
        funcionario.nome = document.getElementById('txtNome').value
        
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Masculino'
        } else if (fsex[1].checked) {
            genero = 'Femenino'
        }
        funcionario.sexo = genero
        //res.innerHTML = `Detectamos uma pessoa do gênero ${genero}`

        return funcionario
    }

    adicionarNoArray(funcionario) {
        funcionario.codigo = parseFloat(funcionario.codigo) // convertendo para nrs decimais
        this.arrayFuncionario.push(funcionario) // add o objecto no array
        this.id++
    }

    verDados() {
        let res = document.querySelector('div#res')
        /*let cod = parseFloat(window.prompt('Digite o codigo'))*/
        let cod = document.querySelector('input#txtCodigo').value
        cod = parseFloat(cod)

        
        for(let i = 0; i < this.arrayFuncionario.length; i++) {

            if(cod > 0){
                if(cod == this.arrayFuncionario[i].codigo) {
                    res.innerHTML = `Codigo: ${this.arrayFuncionario[i].codigo} <br>
                    Nome: ${this.arrayFuncionario[i].nome} <br> 
                    Sexo: ${this.arrayFuncionario[i].sexo}<br>`
                } else { 
                    alert(`Código invalido!`)
                } 
            } else { alert(`Digite o código do funcionario para poder visualizar os dados!`) }
        }
    }
    validaCampo(funcionario) {

        let msg = '';
        if (funcionario.codigo == '' && funcionario.nome == ''){
            msg += `Preencha os campos`
        }
        if (msg != '') {
            window.alert(msg)
            return false
        }
        return true
    }
    limpar() {
        document.querySelector('input#txtCodigo').value = ''
        document.getElementById('txtNome').value = ''
        document.getElementById('radSexo').value = ''
    }
}
var funcionario = new Funcionario(); // instanciar

// Funções

