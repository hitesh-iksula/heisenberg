jQuery(document).ready(function($) {

	// var fontIconElement = '<div class="font-awesome fa fa-shopping-cart"></div>';
	// $('button.btn-cart').prepend(fontIconElement);

	var fontIconElement = '<div class="font-awesome fa fa-bars"></div>';
	$('a.level-top').prepend(fontIconElement);

	var html = $('ul.level0').html();
	$('ul.level0').remove();
	$('.header-drawer .html').html('<ul class="custom-navigation">' + html + '</ul>');

	$('#nav').click(function(e) {
		e.preventDefault();
		$('.header-drawer').slideToggle();
	});

	$('.close-drawer').click(function() {
		$('.header-drawer').slideToggle();
	})

});
