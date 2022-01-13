const fsp = require('fs').promises; // Node.js file system module with promises

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('restaurants.sqlite');

let stmt;

let query2;

async function load() { 
    
    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./data.json');
    const restaurants = (JSON.parse(String(buffer)));
    
    

    stmt = db.prepare(`INSERT INTO Restaurant (name, imagelink) VALUES (?, ?);`);
    query2 = db.prepare(`INSERT INTO Menu (title, restaurant_id) VALUES (?, ?);`);
    for ( arr in restaurants){

        restaurantObject = restaurants[arr];

        let name = restaurantObject.name;
        let image = restaurantObject.image;

        let menus = restaurantObject.menus;


        let menuItem = [];
        let menu = [];

        //add restaurant
        try {
            db.serialize(function () { 
               try {

                stmt.run([name,image]);

               } finally {
                   stmt.finalize();
               }
               db.get("SELECT id FROM Restaurant WHERE name=?",[name], (err, row)=>{
                    for (m in menus){
                        restaurantID = row.id;
                        try{
                            console.error(err);
                            console.log(restaurantID);
                            query2.run([menus[m].title,restaurantID]);
                        }finally{
                            query2.finalize();
                        }
                    }
                });
                
               
           });
       } finally {
           // release resources 
             
       }
        return;
    }
    db.close();
}


load();



