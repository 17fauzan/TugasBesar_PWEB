const express = require('express');

const controlUser = require('../controllers/user');

const router = express.Router();

router.post('/register',controlUser.postRegister);
router.post('/login',controlUser.postLogin);

module.exports = router;