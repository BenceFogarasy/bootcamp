
const {sequelize, DataTypes, Model} = require('./sequelize_index');
const MenuItem = require('./MenuItem');
/**
 * Represents a Restaurant
 */
class Menu extends Model {

    // add methods here

}

Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Menu.hasMany(MenuItem, {as: 'menuItems', foreignKey: 'menu_id'})
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'})


module.exports = Menu;