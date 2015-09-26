$(document).ready(function() {
	// First defense against email/telephones collectors
	var e1 = 'my',
		e2 = 'email',
		e3 = '@',
		e4 = 'examp',
		e5 = 'le.com';

	var p1 = '+ 1 ',
		p2 = '(123) ',
		p3 = '456-',
		p4 = '78',
		p5 = '90';

	var email = e1+e2+e3+e4+e5;
	$('#contact-email').text(email).attr('href','mailto:'+email);

	$('#phone-number').text(p1+p2+p3+p4+p5);
});
