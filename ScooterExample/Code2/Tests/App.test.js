const App = require('../App');


describe('App', function(){

    test('No parameters', () => {
        expect(() => new App.App()).toThrowError('bag must have a weight');
    });
});