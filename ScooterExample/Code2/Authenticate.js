class Authenticate {

    id;
    imgID;
    name;
    username;
    password;
    email;

    constructor(id,imgID,name,username,password,email){
        this.id = id;
        this.imgID =imgID;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email =email;
    }

    generateToken()
    {
        //external token generation 
        let token = "297B!)*&^QXACAWEW";
        return token;
    }

    Login () {
        //external authentication
        let response = true;
        return response;
    }

    Register (){
        //external authentication
        let response = true;
        return response;
    }

    AuthenticateID()
    {
        //external authentication
        let response = true;
        return response;
    }

    AuthenticateAge()
    {
        //external authentication
        let response = true;
        return response;
    }
}

exports.Authenticate = Authenticate;