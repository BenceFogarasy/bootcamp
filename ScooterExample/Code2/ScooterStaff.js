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
}
exports.ScooterStaff = ScooterStaff;