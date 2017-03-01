// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function doClick(e) {
	var firstPage = Alloy.createController('index').getView();
	firstPage.open();
}

$.win.open();
