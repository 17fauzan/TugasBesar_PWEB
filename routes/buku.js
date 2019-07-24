const express = require('express');

const router = express.Router();

const controlBuku = require ('../controllers/buku');

const auth = require('../configs/auth');

<<<<<<< HEAD
router.get('/', auth.verifyToken,controlBuku.getIndexBuku);

=======
router.get('/', auth.verifyToken, controlBuku.getIndexBuku);
>>>>>>> 12ebc2fe2341deeb8a8dc6ca57f61fb8a3233431
module.exports = router;