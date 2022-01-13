const { App } = require("./App");
const BankPayment = require('./BankPayment');
const PaypalPayment = require('./PaypalPayment');


class ScooterStation {
    static scooters = [];
    static stations = [];
    
    location = []; isLocked; cRate;

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
        let Payment;

        if (method == "b")
        {
            Payment = new BankPayment();
        }else if(method == "p")
        {
            Payment = new PaypalPayment();
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