class Scooter {

    id; speed; location; batteryLevel; isFaulty;
    isParked; journeyTime; distanceLeft; userID; isLocked;

    constructor(id, speed, location = Null,batteryLevel, isLocked,isFaulty, isParked, journeyTime=0, distanceLeft, userID)
    {
        this.id = id; 
        this.speed = speed; 
        this.location = location; 
        this.batteryLevel = batteryLevel; 
        this.isFaulty = isFaulty;
        this.isParked = isParked; 
        this.isLocked = isLocked;
        this.journeyTime = journeyTime; 
        this.distanceLeft = distanceLeft; 
        this.userID = userID;
    }

    Unlock(){
        this.isLocked = false;
    }

    Lock()
    {
        this.isLocked = true;
    }

    CheckChargeLevel()
    {
        if (this.batteryLevel < 0.1){
            this.isLocked = true;
            Notification.Notify("System","Staff","Charge");
        }
    }

    MarkBroken (from,to,message)
    {
        this.isFaulty = true;
        Notification.Notify(from,to,message);
    }

    Park()
    {
        this.isParked = true;
    }

    Rent (user)
    {
        if (!this.isFaulty && !this.isLocked && this.isParked && this.batteryLevel > 0.4 && this.userID == 0)
        {
            this.userID = user.id;
            this.isParked = false;
            StartJourney();

        }else{
            throw new Error("Scooter currently unavailable!");
        }
    }

    StartJourney()
    {
        //increment every so often
        this.distanceLeft = 32 * this.batteryLevel;
    }
}

exports.Scooter = Scooter;