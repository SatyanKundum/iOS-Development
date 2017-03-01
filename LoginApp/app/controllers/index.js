var username = "Rao";
var password = "Allada@1234";

function doClick(e) {
	if ((null == $.usernameTextField.value && null == $.passwordTextField.value) || ("" == $.usernameTextField.value && "" == $.passwordTextField.value)) {
		alert("Please enter Credntials!");
	} else if ($.usernameTextField.value == username && $.passwordTextField.value == password) {
		var secondPage = Alloy.createController('secondPage').getView();
		secondPage.open();
	} else {
		alert("Invalid Credentials");
	}
}

$.win.open();
