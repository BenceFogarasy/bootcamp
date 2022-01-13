const { ScooterStation } = require('./ScooterStation');
const User = require('./User');

class ScooterStaff extends User.User {

    staffID;

    constructor(id,name,username,password,email,phoneNumber,dob,location,staffID){
        super(id,name,username,password,email,phoneNumber,dob,location);

        this.staffID = staffID;

        if (!id || !name || !username || !password || !email || !phoneNumber || !staffID){
            throw new Error("Must initialise User with complete details.");
        }
    }

    chargeScooter(ScooterID)
    {
        for ( i in ScooterStation.scooters)
        {
            if(ScooterStation.scooters[i].id = ScooterID){
                ScooterStation.scooters[i].batteryLevel = 1;
            }
        }
    }

    getScooters(StationID)
    {
        return 
    }
}
exports.ScooterStaff = ScooterStaff;