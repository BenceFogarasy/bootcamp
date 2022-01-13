class PayPalPayment extends PaymentHandler {
    constructor(transactionID, paymentAmount, senderDetails, recipientDetails,email){
        super(transactionID, paymentAmount, senderDetails, recipientDetails);

        if (!transactionID || !paymentAmount || !senderDetails || !recipientDetails || !email){
            throw new Error("Must initialise PayPalPayment with complete details.");
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

exports.PayPalPayment = PayPalPayment;