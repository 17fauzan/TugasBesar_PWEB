const express = require('express');

const router = express.Router();

const controlOrder = require('../controllers/order');

router.post('/add', controlOrder.postOrder);
router.get('/detail', controlOrder.getDetail);

module.exports = router;