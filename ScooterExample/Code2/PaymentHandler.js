class PaymentHandler {

    transactionID; paymentAmount; senderDetails; recipientDetails;

    constructor(transactionID, paymentAmount, senderDetails, recipientDetails){
        this.transactionID = transactionID; 
        this.paymentAmount = paymentAmount; 
        this.senderDetails = senderDetails; 
        this.recipientDetails = recipientDetails;
    }

}

exports.PaymentHandler = PaymentHandler;