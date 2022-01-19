const express = require('express')
const router = express.Router()
const  Menu  = require('../Menu');;
const  Restaurant  = require('../Restaurant');
const bodyParser = require('body-parser')
const {sequelize, DataTypes, Model} = require('../sequelize_index');
const { check, validationResult } = require('express-validator');
const MenuItem = require('../MenuItem');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


router.get('/', async (request,response) => {
    const Restaurants = await Restaurant.findAll();
    response.send( JSON.stringify(Restaurants, null, 2));
});


router.delete('/', async (req,res) => {
    const deleteRestaurant = await Restaurant.destroy({where: {}},
        {truncate: false});
    res.sendStatus(202);
    console.log("Successful delete");
   
});

router.post('/',async (request,response) => {
    let nameIn = request.body.name;
    let url = request.body.image;
    const restaurant = await Restaurant.create({name: nameIn, image: url})
    response.sendStatus(201);
});

module.exports = router