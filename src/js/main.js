
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).on('ready', function () {
	var $window = $(window),
		windowWidth = $window.width(),
		windowHeight = $window.height(),
		bodyHeight = $('body').height();


		// resize
		$window.on('resize', function () {

			windowWidth = $window.width();
			windowHeight = $window.height();
			bodyHeight = $('body').height();

		});

});

$('#search-btn').on('click', function() {
	$('#input-holder').toggleClass('open');
})


$(window).on('load', function() {
	$('.collections-grid').each(function() {
		$(this).masonry({itemSelector: '.collections-item'});
	})
})

$('.menu-item').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		var dataGroup = "#" + $(this).attr('data-group');
		$('.collections-grid').removeClass('open');
		$(dataGroup).addClass('open');
		$('.collections-grid').each(function() {
			$(this).trigger('resize')
               .masonry( 'reloadItems' )
               .masonry( 'layout');
		})
	})
})
$('.bx-slider').bxSlider();