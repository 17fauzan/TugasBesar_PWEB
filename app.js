// import express
const express = require('express');

// import body parser
const bodyParser = require('body-parser');

//manggil models
const Buku = require('./models/buku');

const Sequelize = require('./configs/sequelize');
// menggunakan express
const app = express();

// menggunakan ejs sebagai view enjin
app.set("view engine", "ejs");

//manggil routes
const routeIndex = require('./routes/index');


// menggunakan body parser
app.use(bodyParser.urlencoded({ extended: false }));

//pake routes
app.use(routeIndex);

// setting port
app.listen(3000, () => {
	console.log("jalan jow");
	Sequelize.sync();
})

