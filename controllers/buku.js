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
                Buku.findAll()
                    .then((buku) => {
                        res.json(buku);
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

module.exports.postBuku = (req, res) => {
    jw.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Buku.create({
                    judul_buku: req.body.judul_buku,
					penerbit: req.body.penerbit,
					penulis: req.body.penulis,
                    harga: req.body.harga
                })
                    .then((buku) => {
                        res.json(buku);
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

module.exports.putBuku = (req, res) => {
    jw.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            if (authData['roles'] == "admin") {
                Buku.update({
                    judul_buku: req.body.judul_buku,
					penerbit: req.body.penerbit,
					penulis: req.body.penulis,
                    harga: req.body.harga
                }, {
                        where: {
                            id: req.params.id
                        }
                    }).then((buku) => {
                        res.json(buku);
                    }).catch((error) => {
                        throw error;
                    })
            } else {
                res.sendStatus(403);
            }
        }
    })
}

module.exports.FindAll = (req, res) => {
    Buku.findAll({
    })
        .then((buku) => {
            res.json(buku);
        })
        .catch((error) => {
            throw error;
        })
}

module.exports.FindJudulBuku = (req, res) => {
    Buku.findAll({
        where: {
            judul: req.params.judul
        }
    }).then((buku) => {
        res.json(buku);
    }).catch((error) => {
        throw error;
    });
}