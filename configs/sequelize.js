const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_tugasbesar', 'root', '',{
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;