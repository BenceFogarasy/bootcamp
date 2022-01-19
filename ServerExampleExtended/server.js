const express = require('express');
const  Menu  = require('./Menu');;
const  Restaurant  = require('./Restaurant');
const bodyParser = require('body-parser')
const {sequelize, DataTypes, Model} = require('./sequelize_index');
const { check, validationResult } = require('express-validator');
const MenuItem = require('./MenuItem');

const restaurantRouter = require('./routes/restaurant.route');
const restaurantsRouter = require('./routes/restaurants.route');

const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/restaurant', restaurantRouter);
app.use('/restaurants', restaurantsRouter);

app.get("/flipcoin", (request, response) => {
    const choice = Math.floor((Math.random() * 10) + 1);
    let answer;
    if (choice==2){
        answer="Tail";
    }else{
        answer="Heads";
    }
    response.send(answer);
  });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})