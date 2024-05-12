const express = require('express');
const app = express();
const sequelize = require('../helper/database');
const bodyParser = require('body-parser');
const indexRoutes = require('../src/routes/index');

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(indexRoutes);


sequelize.sync({force: true}).then(result => {
    app.listen(3000);
}).catch(err => console.log(err));