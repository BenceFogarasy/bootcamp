const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('restaurants.sqlite');

try {
    db.serialize(function () { 

        // select the rows and print them out
        db.each("SELECT  MenuItem.name, Restaurant.name FROM ((Restaurant JOIN Menu ON Restaurant.id = Menu.restaurant_id ) JOIN MenuItem ON Menu.id = MenuItem.menu_id) GROUP BY (restaurant_id) ORDER BY SUM(price) DESC; ",
            function (err, rows) {  
                console.log(rows);  
            }
        );

    });
} finally {
    // release resources 
    db.close();  
}


