class Bag {
    weight;
    _limit;

    constructor(weight){
        this.weight = weight;
        this._limit = 23;

        if (!weight){
            throw new Error("bag must have a weight");
        }
    }

    isOverLimit(){
        return (this.weight > this._limit) ? true : false;
    }
}

class Passenger {

    name;
    passportNumber;
    seatNumber;
    bags;

    constructor(name,passportNumber,seatNumber){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(bag){
        this.bags.push(bag);
    }
}

class Plane {
    planeType;
    passengers;

    constructor(planeType){
        this.planeType = planeType;
        this.passengers = [];
    }

    boardPlane(passenger){
        this.passengers.push(passenger);
    }
}

class CrewMember{
    name;
    position;
    staffNumber;

    constructor(name,position,staffNumber){
        this.name = name;
        this.position = position;
        this.staffNumber = staffNumber;
    }
}

class Airport{
    name;

    constructor(name){
        this.name = name;
    }
}

exports.Bag = Bag;
exports.Passenger = Passenger;
exports.Airport = Airport;
exports.CrewMember = CrewMember;
exports.Plane = Plane;

