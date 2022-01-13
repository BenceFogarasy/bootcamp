const ScooterStaff = require('../ScooterStaff');


describe('ScooterStaff', function(){

    test('No parameters', () => {
        expect(() => new ScooterStaff.ScooterStaff()).toThrowError('Must initialise User with complete details.');
    });
});