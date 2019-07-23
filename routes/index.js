const express = require("express");

//instansiasi router
const router = express.Router();

//ngarouter halaman
router.get('/', (req, res) => {
	res.render("index");
});

module.exports = router;