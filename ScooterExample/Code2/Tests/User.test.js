const User = require('../User');


describe('User', function(){

    test('No parameters', () => {
        expect(() => new User.User()).toThrowError('Must initialise User with complete details.');
    });
});