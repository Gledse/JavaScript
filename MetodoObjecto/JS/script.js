// Programação orientada a objectos
class Produto {

    constructor() { // metodo construtor >>> primeira função que é chamado toda vez que nós executa a nossa classe
        this.id = 1;
        this.arrayProdutos = []; // inicializar a variavel com 0
        this.editId = null; // Toda vez que esse editId for diferente de null, quer dizer que estarei a fazer uma actualizacao
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampo(produto)) { // metodo para verificar se os campos estao vazios
            if (this.editId == null){
                this.adicionar(produto);
            } else {
                this.actualizar(this.editId, produto)
            }
        } 

        this.listaTabela(); // para mostrar a lista ao utilizador
        this.cancelar();
    }

    listaTabela() {

        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow(); // função responsavel por add uma nova linha na nossa tabela
            let td_id = tr.insertCell(); // função responsavel por add uma nova coluna na nossa tabela
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].precoProduto;

            td_id.classList.add('center'); // criando uma classe no meu td_id

            let imgEdit = document.createElement('img');
            imgEdit.src = 'Imagens/icone_edit.png'; // adicionando uma imagem

            imgEdit.setAttribute("onclick",`produto.prepararEdicao(${JSON.stringify(this.arrayProdutos[i])})`); // iremos passar o nosso array para o html convertido

            let imgDelete = document.createElement('img');
            imgDelete.src = 'Imagens/icone_delete.png';

            imgDelete.setAttribute("onclick",`produto.deletar(${this.arrayProdutos[i].id})`); // criando atributo para dar um evento a essa imagem, add o mesmo id da linha em que esta a imagem deletar

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto) {
        produto.precoProduto = parseFloat(produto.precoProduto)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    actualizar(id, produto) {
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].precoProduto = produto.precoProduto;
            }
        }
    }
    prepararEdicao(dados) {
        this.editId = dados.id;
        document.getElementById('nomeProduto').value = dados.nomeProduto;
        document.getElementById('precoProduto').value = dados.precoProduto;

        document.getElementById('btn1').innerHTML = `Actualizar`
    }

    lerDados() {
        let produto = {} // objecto produto

        produto.id = this.id // inicializar a variavel com o valor 1
        produto.nomeProduto = document.getElementById('nomeProduto').value; // O nosso obecto vai receber os dados desse campo
        produto.precoProduto = document.getElementById('precoProduto').value;

        return produto;
    }

    validaCampo(produto) { // metodo para verificar se os campos estao vazios
        let msg = '';

        if (produto.nomeProduto == ''){
            msg += `informe o nome do produto \n`
        }
        if (produto.precoProduto == '') {
            msg += `informe o preço do produto \n`
        }
        if (msg != '') {
            window.alert(msg)
            return false
        }
        return true
    }

    cancelar() {
    document.getElementById('nomeProduto').value = ''
    document.getElementById('precoProduto').value = '' // para limpar o nosso input nome e preco

    document.getElementById('btn1').innerHTML = `Salvar`;
    this.editId = null;
    }

    deletar(id) {

        if (window.confirm(`Deseja realmente deletar o produto do ID ${id}?`)) {

            let tbody = document.getElementById('tbody')
    
            for(let i = 0; i < this.arrayProdutos.length; i++){ // para saber qual é a linha que estamos a percorer
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, id); // para remover o item do nosso array
                    tbody.deleteRow(i); // para eliminar o item na tabela
    
                }
            }
        }
    }
}
var produto = new Produto(); // instanciar
