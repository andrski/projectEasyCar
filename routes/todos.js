// JavaScript source code
// R O U T I N G!!!
const { Router } = require('express');
const router = Router(); // creare var router by func Router
const Car = require('../models/todo.js');

router.get('/', async (req, res) => {
    const cars = await Car.find({});

    res.render('index.hbs', {
        title: 'CarList',
        isIndex: true,
        cars,
    })// рендерим страницу index
});
// second Obj in render it is TITLE!!!
router.get('/create', (req, res)=> {
    res.render('create.hbs', {
        title: 'Create a Car',
        isCreate: true,
    })// make render create.HBS!!!!! extension, because add module 'express-handlebars'
});

router.post('/create', async (req, res) => {
    const car = new Car({
        car: req.body.car,   //req.body.car value from browser
        power: req.body.power, //req.body.power value from browser(number)
      });

    await car.save(); // await, because return promise
    res.redirect('/');
});

router.post('/completed', async (req, res) => {
    const car = await Car.findById(req.body.id) // in template called id !!! because id

    car.tuning = !!req.body.completed;
    await car.save();

    res.redirect('/');
});

module.exports = router;

// нет доступа к обьекту body and his properties

