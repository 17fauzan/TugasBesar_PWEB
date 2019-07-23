const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model{}

Buku.init({
	judul_buku: Sequelize.STRING,
	penerbit: Sequelize.STRING,
	penulis: Sequelize.STRING,
	harga: Sequelize.INTEGER
}, {sequelize, modelName: 'buku'});

module.exports = Buku;