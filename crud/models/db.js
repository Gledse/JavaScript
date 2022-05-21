// Conexão com o banco de dados mysql

// criu uma constante com o nome de sequelize, dps importo o require da dependência que instalei sendo a dependência sequelize
const { Sequelize } = require('sequelize');

// criu uma constante com o nome de sequelize, será essa constante que fará a conexão com o banco de dados
const sequelize = new Sequelize('dbcrud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' // nome do banco de dados
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão com o banco de dados efectuado com sucesso!');
}).catch(function(){
    console.error('Erro: Conexão com o banco de dados não efectuado com sucesso!')
});
    
module.exports = sequelize; // exportando a conexão com o banco de dados, que está dentro da constante sequelize