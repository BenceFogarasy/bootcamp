const { App } = require("./App");

class ScooterStation {
    scooters = []; location = []; isLocked; cRate;

    constructor(scooters,isLocked,cRate,location)
    {
        this.isLocked = isLocked;
        this.scooters = scooters;
        this.cRate = cRate;
        this.location = location;
    }

    parkScooter(Scooter)
    {
        Scooter.location = this.location;
        Scooter.isParked = true;
        initiatePayment(Scooter.journeyTime)
        this.scooters.push(Scooter);

    }

    initiatePayment(jTime){
        let method = App.askForPayment();
        let charge = jTime * this.cRate;
        if (method == "b")
        {
            
        }else if(method == "p")
        {

        }else{
            throw new Error("Invalid payment method!");
        }
    }

    removeScooter(Scooter)
    {
        const index = this.scooters.indexOf(Scooter);
        if (index > -1) {
            this.scooters.splice(index, 1);
        }
    }

    Lock ()
    {   
        this.isLocked = true;
    }

    Unlock()
    {
        this.isLocked = false;
    }

}

exports.ScooterStation = ScooterStation;