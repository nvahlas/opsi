var Security = function() {

	/* Link to the protected submit page ... */
	this.submitLink = "<t4 type="navigation" id="597"/>";
	this.checkLink = "<t4 type="navigation" id="598" />";
	this.doLoginLink = "<t4 type="navigation" id="599" />";

	/*
	Binds a click to the login button
	*/
	this.init = function() {
		$('ul.action li.login a').click($.proxy(function() {
			this.login();
		}, this));
	}

	/*
	Checks if the user is logged in and if yes, calls updateUI
	*/
	this.check = function() {
		console.log('security::check()');
		$.ajax({
			type: "GET",
			url: this.checkLink,
			crossDomain: true
		}).success($.proxy(function(data) {
				if ( data === 'GO' ) {
					this.updateUI();
				}
			}, this)
		).fail(function() {
			console.log('fail ... user not logged in');
		});
	}

	/*
	Opens a iframe with the following URL: /site/opsi/secure/login/do
	If the guys is already logged in, it will go directly to the requested page
	If not, it will go to the login.oecd.org page and then back to the requested page
	The requested page will call security.updateUI in the parent window.
	*/
	this.login = function() {
		console.log('security::login()');
		if ( $('#loginFrame').length ) {
			$('#loginFrame').show();
			$('#loginFrame').attr('src', function(idx, old) { return old; });
		} else {
			$('<iframe/>', {
				name: "loginFrame", 
				id:"loginFrame", 
				src:this.doLoginLink, 
				"class": "loginFrame",
				border: "0",
				frameBorder: "0",
				scrolling: "no"
			}).appendTo("body");
		}
	}

	/*
	Updates the UI:
	- Submit link goes to the private submit
	- Login is hidden
	- Logout is shown
	- Link to the user's list of forms is shown
	*/
	this.updateUI = function() {
		console.log('security::updateUI()');
		$('ul.browse li:nth-child(6) a').attr('href', this.submitLink);
		$('ul.action li.login').hide();
		$('ul.action li.logout').show();
		$('ul.action li.forms').show();
		$('.loginFrame').hide();
	}

}

var security = new Security();

$(function() {
	security.init();
	security.check();
})