const express = require('express');
const app = express();
const sequelize = require('../helper/database');
const bodyParser = require('body-parser');
const indexRoutes = require('../src/routes/index');
const path = require('path');
const Todo = require('./models/Todo'); 

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(indexRoutes);


sequelize.sync().then(result => {
    app.listen(3000);
    console.log('ciao');
}).catch(err => console.log(err));