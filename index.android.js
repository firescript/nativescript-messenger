var application = require("application");

function send(phoneNumber, message, subject) {
    
    return new Promise(function (resolve, reject) {
            
        if(phoneNumber && phoneNumber.constructor === Array){
            var theNumber = phoneNumber[0].toString();
            try {
                var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                intent.setData(android.net.Uri.parse("sms:" + theNumber));
                intent.putExtra("sms_body", message);
                application.android.foregroundActivity.startActivity(intent);
                console.log("Message Sent.");
                resolve({
                    response: "sent",
                    message: "Message sent."
                });
            } catch(ex) {
                console.log("Something Failed.");
                reject(Error("Message send failed."));
            }            
        } else {
            console.log("Something Failed.");
            reject(Error("Message send failed."));            
        }
        
    });
}

exports.send = send;
