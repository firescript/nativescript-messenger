var application = require("application");

function send(number, message, subject) {
	try {
		var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
		intent.setData(android.net.Uri.parse("sms:" + number));
		intent.putExtra("sms_body", message);
		application.android.foregroundActivity.startActivity(intent);
		return true;
	} catch(ex) {
		return false;
	}
}

exports.send = send;
