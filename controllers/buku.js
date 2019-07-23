const Buku = require('../models/buku');

module.exports.getIndexBuku = (req, res) =>{
	jw.verify(req.token, process.env.SECRETKEY, (error, authData) =>{
		if(error){
			res.sendStatus(403);
		}else{
			res.json({
				message: 'SIP',
				authorData: authData
			})
		}
	})
}

module.exports.cariSemua = (req, res) => {
	Buku
		.findAll({
		}).then((buku) => {
			res.json(buku);
		}).catch((error) => {
			throw error;
		})
}

module.exports.cariBuku = (req, res) => {
    Buku.findByPk(
			req.params.id
    ).then((buku) => {
        res.json(buku);
    }).catch((error) => {
        throw error;
    });
}


	