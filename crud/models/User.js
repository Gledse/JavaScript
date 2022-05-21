const Sequelize = require('sequelize');// importando o sequelize da dependência sequelize

const db = require('./db'); // criando uma constante db para receber o arquivo db que tem a conexão com o banco de dados

// A constante User irá receber a constante que tem a conexão com o banco de dados db, db.define >> a função .define é responsavel por conferir na documentação
const User = db.define('users', { // criando a tabela users
    id: {  // coluna id
        type: Sequelize.INTEGER, // numero inteiro
        autoIncrement: true, // é como se fosse i++
        primaryKey: true // chave primaria
    },
    name: { // coluna name
        type: Sequelize.STRING, // formato de texto
        allowNull: false, // o valor não pode ser null
    },
    email: { // coluna email
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//User.sync(); // Essa instrução só é executada quando não existe uma tabela, instrução responsavel para criar uma tabela

//User.sync({ alter: true }) // Essa instrução é responsavel por verificar se há uma alteração na tabela, se tiver uma alterção ele altera na tabela também

module.exports = User; // exportando o arquivo User