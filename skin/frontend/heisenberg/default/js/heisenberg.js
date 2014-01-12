jQuery(document).ready(function($) {

	function main_height() {
		var footer_container = $('.footer-container').outerHeight();
		var main_inner_offset = parseInt($('.main').css('padding-top')) + parseInt($('.main').css('padding-bottom'));
		var height_to_exclude = footer_container + main_inner_offset + parseInt($('.main-container').css('padding-top'));
		var height_to_main = $(window).outerHeight() - height_to_exclude;
		console.log(main_inner_offset);
		console.log(parseInt($('.main-container').css('padding-top')));
		$('.main').css('min-height', height_to_main);
	}

	main_height();
	$(window).resize(main_height);

	// var fontIconElement = '<div class="font-awesome fa fa-shopping-cart"></div>';
	// $('button.btn-cart').prepend(fontIconElement);

	var fontIconElement = '<div class="font-awesome fa fa-bars"></div>';
	$('a.level-top').prepend(fontIconElement);

	var html = $('ul.level0').html();
	$('ul.level0').remove();
	$('.header-drawer .html').html('<ul class="custom-navigation">' + html + '</ul>');

	$('#nav').click(function(e) {
		e.preventDefault();
		$('.header-drawer').slideToggle("fast");
	});

	$('.close-drawer').click(function() {
		$('.header-drawer').slideToggle("fast");
	});

});
