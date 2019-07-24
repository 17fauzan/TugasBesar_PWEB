const express = require('express');

const router = express.Router();

const controlBuku = require ('../controllers/buku');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, controlBuku.getIndexBuku);

router.post('/add', auth.verifyToken, controlBuku.postBuku);

router.put('/edit/:id', auth.verifyToken, controlBuku.putBuku);

module.exports = router;