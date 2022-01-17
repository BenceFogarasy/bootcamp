const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a Restaurant
 */
class MenuItem extends Model {

    // add methods here

}
MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    MenuItem
};