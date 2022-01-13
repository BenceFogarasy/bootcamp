class Notification {

    static Notify (from,to,message) {
        console.log(from.toString() + " -> " + to.toString() + ":  " + message);
    }
}
exports.Notification = Notification; 