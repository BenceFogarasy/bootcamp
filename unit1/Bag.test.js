const Libr = require('./Bag');

describe('Bag', function(){
    test('initalise bag', () => {
        const heavyBag = new Libr.Bag(50);

        expect(heavyBag.weight).toBe(50);
    });

    test('overweight bag', () => {
        const heavyBag = new Libr.Bag(50);

        expect(heavyBag.isOverLimit()).toBe(true);
    });
    test('underweight bag', () => {
        const lightBag = new Libr.Bag(13);

        expect(lightBag.isOverLimit()).toBe(false);
    });
    test('No weight', () => {
        expect(() => new Libr.Bag()).toThrowError('bag must have a weight');
    });


});

describe('Passenger', function(){
    test('Adding bags to bags list', () => {
        const passenger = new Libr.Passenger("michael","123123","123542342");

        passenger.addBag(new Libr.Bag(15));
        passenger.addBag(new Libr.Bag(13));
        
        expect(passenger.bags.length).toBe(2);
        expect(passenger.bags[1].weight).toBe(13);
    });

    test('Initialising new passenger', () => {
        const passenger = new Libr.Passenger("michael","123123","123542342");
        
        expect(passenger.name).toBe("michael");
        expect(passenger.passportNumber).toBe("123123");
        expect(passenger.seatNumber).toBe("123542342");
    });

});

describe('Plane', function(){
    test('Adding passengers to passenger list', () => {
        const plane = new Libr.Plane("british airways");

        plane.boardPlane(new Libr.Passenger("michael","123123","123542342"));
        plane.boardPlane(new Libr.Passenger("adam","68786534","32353425"));
        
        expect(plane.passengers.length).toBe(2);
        expect(plane.passengers[1].name).toBe("adam");
    });

    test('Initialising new passenger', () => {
        const plane = new Libr.Plane("british airways");
        
        expect(plane.planeType).toBe("british airways");
    });

});

describe('Crew Member', function(){


    test('Initialising new crew member', () => {
        const crewMember = new Libr.CrewMember("Sam","Pilot","1231234");
        
        expect(crewMember.name).toBe("Sam");
        expect(crewMember.position).toBe("Pilot");
        expect(crewMember.staffNumber).toBe("1231234");

    });

});

describe('Airport', function(){
    test('Initialising new airport', () => {
        const airport = new Libr.Airport("Heathrow");
        
        expect(airport.name).toBe("Heathrow");

    });

});