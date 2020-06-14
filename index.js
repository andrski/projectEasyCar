// JavaScript source code
const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;

const exphbs = require('express-handlebars'); // connect model for create pages
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access'); //to not have err: with parent prototype
const todoRoutes = require('./routes/todos.js');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),  //to not have err: with parent prototype
});

app.engine('hbs', hbs.engine); //hbsName call dvijka, second is parametr!!
app.set('view engine', 'hbs');  //registration in express engine.....
app.set('views', 'views'); //registration in express folder.....

app.use(express.urlencoded({ extended: true })); // build-in function express, urlencoded!!!! for read body(browser)
app.use(express.static(path.join(__dirname, 'public'))); // for add CSSengine

app.use(todoRoutes);

const uri = '';
//create asunc function start
async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        app.listen(port, () => console.log('server has been started port: ' + port));
    }
    catch (err) { console.log(err) }
}

start();
