const jw = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Order = require('../models/order');

module.exports.getAll= (req, res) =>{
	Order.findAll().then(Order=> {
		res.json(Order);
	}).catch((error)=>{
		console.log(error);
	});
}

module.exports.getFindOrderId = (req, res) =>{
	Order.findByPk(req.params.id).then(order => {
		res.json(order)
	})
}

module.exports.getFindOrderUserId = (req, res) =>{
	Order.findAll({ where: { userId: req.params.userId } }).then(order => {
		res.json(order)
	}).then(Order => {
		res.json(category)
	});
}


module.exports.postAddOrder = (req, res) =>{
		jw.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="user") {
						var bukuId = req.body.bukuId;
						Order.create({
								userId: authData['id'],
								bukuId : bukuId
						})
						.then(Order => {
								res.json(Order);
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}
