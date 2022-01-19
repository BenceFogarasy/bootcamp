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


 
router.get('/:id', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        try{
        const restaurant = await Restaurant.findOne({ where: { id: request.params.id.trim()}});
        
        response.send( JSON.stringify(restaurant, null, 2));
        }catch(err){
            console.error(err);
        }
    }else{
        response.send("Invalid ID!");
    }
    
});

router.get('/:id/menus', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        try{
        const restaurant = await Restaurant.findAll({ where: { id: request.params.id.trim()}, include: {  model: Menu, as: 'menus', attributes: [`title`,`restaurant_id`]  }});
        
        response.send( JSON.stringify(restaurant, null, 2));
        }catch(err){
            console.error(err);
        }
    }else{
        response.send("Invalid ID!");
    }
    
});

router.get('/:id/menus/menuItems', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        try{
        const restaurant = await Restaurant.findAll({ where: { id: request.params.id.trim()}, include: [{  model: Menu, as: 'menus', attributes: [`title`,`restaurant_id`], include: {model: MenuItem , as: "menuItems"} } ] } );
        
        response.send( JSON.stringify(restaurant, null, 2));
        }catch(err){
            console.error(err);
        }
    }else{
        response.send("Invalid ID!");
    }
    
});


router.put('/:id', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        let nameIn = request.body.name;
        let url = request.body.image;
        const newRestaurant = await Restaurant.update( {name:nameIn,image:url}, {where: {id: request.params.id}});
        response.sendStatus(201);
        console.log("Successful update");
        console.log(newRestaurant);
    }else{
        response.send("Invalid ID!");
    }
    
});

router.put('/:id/menus/:menuid', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        let newTitle = request.body.title;
        let menuid = request.params.menuid;
        const newRestaurant = await Menu.update( {title:newTitle}, {where: {id: menuid, restaurant_id: request.params.id}});
        response.sendStatus(200);
        console.log("Successful update");
        console.log(newRestaurant);
    }else{
        response.send("Invalid ID!");
    }
    
});

router.delete('/:id', async (req,res) => {
    if (!Number.isNaN(req.params.id.trim()) && req.params.id.trim().length < 15){
        const deleteRestaurant = await Restaurant.destroy({where: {id: req.params.id}});
        res.sendStatus(202);
        console.log("Successful delete");
    }else{
        response.send("Invalid ID!");
    }
});



module.exports = router