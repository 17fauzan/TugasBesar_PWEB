const Buku = require('../models/buku');

const jw = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexBuku = (req, res) => {
	jw.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Book.findAll()
                    .then((book) => {
                        res.json(book);
					})
					.catch((error) => {
                        throw error;
                    })
            } else {
                res.sendStatus(403);
            }
        }
    });
}