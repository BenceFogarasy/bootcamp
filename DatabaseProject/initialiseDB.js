const sqlite3 = require('sqlite3').verbose();

function initialise() {
    const db = new sqlite3.Database('restaurants.sqlite');

    try {
        console.log("works here");
        db.serialize(function () { 
            db.run("CREATE TABLE Restaurant(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT);");
            db.run("CREATE TABLE Menu(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurant_id INTEGER, FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id));");
            db.run("CREATE TABLE MenuItem(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price DOUBLE, menu_id INTEGER, FOREIGN KEY (menu_id ) REFERENCES menu(id));");

            console.log("works");
        });
    }catch(err)
    {
        throw(err);
    } finally { 
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    }
}
initialise();