class BankPayment extends PaymentHandler {
    constructor(transactionID, paymentAmount, senderDetails, recipientDetails){
        super(transactionID, paymentAmount, senderDetails, recipientDetails);

        if (!transactionID || !paymentAmount || !senderDetails || !recipientDetails ){
            throw new Error("Must initialise BankPayment with complete details.");
        }
    }
    
    takePayment()
    {
        // pass (email) and details for external api
        //external process
        let response = true;
        return response;
    }
}

exports.BankPayment = BankPayment;