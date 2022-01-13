const fsp = require('fs').promises; // Node.js file system module with promises

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('restaurants.sqlite');

let stmt;

let query2;
let query3;


stmt = db.prepare(`INSERT INTO Restaurant (name, imagelink) VALUES (?, ?);`);

query2 = db.prepare(`INSERT INTO Menu (title, restaurant_id) VALUES (?, ?);`);

query3 = db.prepare(`INSERT INTO MenuItem (name,price,menu_id) VALUES (?, ?, ?)`);

async function load() { 
    
    

    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./data.json');
    const restaurants = (JSON.parse(String(buffer)));
    try{
    
        for ( arr in restaurants){
            console.log("works unitl here1");

            restaurantObject = restaurants[arr];

            let name = restaurantObject.name;
            let image = restaurantObject.image;

            let menus = restaurantObject.menus;


            let menuItem = [];
            let menu = [];
            let menuID = 0;

            //add restaurant
            try {
                db.serialize(function () { 
                    try {
                        
                    

                        stmt.run([name,image]);
                            //insert restaurant
                        console.log("works unitl here");
                db.get("SELECT id FROM Restaurant WHERE name=?",[name], (err, row)=>{
                    
                    console.log(row);
                        for (m in menus){
                            restaurantID = row.id;
                            try{
                                if (err)
                                    console.error(err);

                                query2 = db.prepare(`INSERT INTO Menu (title, restaurant_id) VALUES (?, ?);`);
                                query2.run([menus[m].title,restaurantID]);

                                for (mI in menus[m].items){

                                    menuItem = (menus[m].items[mI]);
                                    let currentMenuItemName = menuItem.name;
                                    let currentMenuItemPrice = menuItem.price;
                                   
                                    db.get("SELECT id FROM Menu WHERE title=?",[menus[m].title], (erro, menuRow)=>{
                                        menuID = menuRow.id;
                                        console.log(currentMenuItemName+ "  -   "+ currentMenuItemPrice + "  -   "+ menuID);
                                        try{
                                            query3 = db.prepare(`INSERT INTO MenuItem (name,price,menu_id) VALUES (?, ?, ?)`);
                                            query3.run([currentMenuItemName,currentMenuItemPrice,menuID]);
                                        }catch(dbError1){
                                            console.error(dbError1);
                                        }
                                    });
                                    
                                }
                            }catch(err){
                                console.error(err);
                            }
                        }
                    });
                    
                    
                }catch(err){
                    console.error(err);
                } finally {

                }
                });
            } finally {
            }
        
        
            // return;
        }
    }finally{
        
    }
        
    
    
    
}

(async() => {
    try{
        await load();
    }finally{
        stmt.finalize();  
        query2.finalize();   
        query3.finalize(); 
        db.close();
    }
})();



