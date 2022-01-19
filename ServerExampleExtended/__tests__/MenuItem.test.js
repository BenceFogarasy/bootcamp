const {sequelize} = require('../sequelize_index');
const MenuItem = require('../MenuItem')

describe('MenuItem', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a menuItem', async () => {
        const menuItem = await MenuItem.create({ name: 'Apple Pie', price: 3.50 })
        expect(menuItem.id).toBe(2 || 1)
    })
})