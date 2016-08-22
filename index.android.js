function send(numbers, message, subject) {
    return new Promise(function (resolve, reject) {
        if(Array.isArray(numbers)){
            const numList = numbers.map((n,i)=>{
                if(i === numbers.length - 1){
                    return n;
                }else{
                    return n+','
                }
            }).join("");
            try {
                var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                intent.setData(android.net.Uri.parse("smsto:" + numList));
                intent.putExtra("sms_body", message);
                intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
                com.tns.NativeScriptApplication.getInstance().startActivity(intent);
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
