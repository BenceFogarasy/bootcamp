class User {
    id;
    name;
    username;
    password;
    email;
    phoneNumber;
    dob;
    location;

    constructor(id,name,username,password,email,phoneNumber,dob,location){
        this.id=id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
        this.location = location;

        if (!id || !name || !username || !password || !email || !phoneNumber){
            throw new Error("Must initialise User with complete details.");
        }
    }
}

exports.User = User;