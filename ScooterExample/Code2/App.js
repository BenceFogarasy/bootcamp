class App {
    par;

    constructor(par){
        this.par = par;

        if (!par){
            throw new Error("bag must have a weight");
        }
    }

    static askForPayment()
    {
        console.log("Type B for Bank payment. Type P for Paypal.");
        let answer = "b"; 
        return answer;
    }
}

exports.App =App;
