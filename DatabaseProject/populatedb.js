const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('restaurants.sqlite');

try {
    db.serialize(function () { 

    let stmt;
    let query2;
    let query3;

        try {
            stmt = db.prepare(`INSERT INTO Restaurant (name, imagelink) VALUES (?, ?)`);
            stmt.run('Bayroot', 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/England/Brighton/brighton-restaurants-hotel-du-vin-bistro.jpg');
            stmt.run("McDonalds", "link2");
            stmt.run("Starbucks", "link3");
            stmt.run("KFC", "link4");


            query2 = db.prepare(`INSERT INTO Menu (title,restaurant_id) VALUES (?, ?)`);
            query2.run("Main Menu",1);
            query2.run("Coffees",2);
            query2.run("Chicken",3);
            query2.run("Drinks",3);

            query3 = db.prepare(`INSERT INTO MenuItem (name,price,menu_id) VALUES (?, ?, ?)`);


            query3.run( "Burger", 2,1);
            query3.run( "McChicken", 1.50,1);
            query3.run( "Latte", 1.50,2);
 
            query3.run( "Black Coffee", 2,2);
            query3.run( "Capuccino", 3,2);
            query3.run( "Hot Chocolate", 3,2);
            query3.run( "Fried Chicken", 5,3);
            query3.run( "Meal 1", 15,3);
        
        } finally {
            // release resources 
            stmt.finalize();
            query2.finalize();
            query3.finalize();
        }

        // select the rows and print them out
        db.each("SELECT * FROM Restaurants",
            function (err, rows) {  
                console.log(rows);  
            }
        );
    });
} finally {
    // release resources 
    db.close();  
}