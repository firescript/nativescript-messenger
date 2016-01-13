var application = require("application");

function sendMessage(number, message, subject) {
	try {
		var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
		intent.setData(android.net.Uri.parse("sms:" + number));
		intent.putExtra("sms_body", message);
		application.android.foregroundActivity.startActivity(intent);
		return true;

	} catch(ex) {
		//alert("Unable to open sms");
		//console.log("phone.sms failed: " + ex);
		return false;
	}
}

function groupMessage(numbers, message){
    console.log("Not yet implemented.");
}

exports.groupMessage = groupMessage;
exports.sendMessage = sendMessage;
