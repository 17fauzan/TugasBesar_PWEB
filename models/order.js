const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class Order extends Sequelize.Model {}

Order.init({
  bukuId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, { sequelize, modelName: 'order' });

module.exports = Order;