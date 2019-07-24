// import express
const express = require('express');

// import body parser
const bodyParser = require('body-parser');

//manggil models
const modelBuku = require('./models/buku');
const modelUser = require('./models/user');
const modelorder = require('./models/order');
const modelsession = require('./models/session');

const Sequelize = require('./configs/sequelize');
// menggunakan express
const app = express();

// menggunakan ejs sebagai view enjin
app.set("view engine", "ejs");

//manggil routes
const routeIndex = require('./routes/index');
const routeBuku = require('./routes/buku');
const routeUser = require('./routes/user');
const routeOrder = require('./routes/order');

// menggunakan body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//pake routes
app.use('/index',routeIndex);
app.use('/buku',routeBuku);
app.use('/user',routeUser);
app.use('/order',routeOrder);

// setting port
app.listen(3104, () => {
	console.log("jalan jow");
	Sequelize.sync();
})

