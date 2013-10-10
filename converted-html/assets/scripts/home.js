$(function() {
  	$('.iosSlider').iosSlider({
		snapToChildren: true,
		infiniteSlider: true,
		autoSlide: true,
		autoSlideTimer: 7000,
		onSlideChange: slideChange
	});
});

function slideChange(args) {
	$('.selectorsBlock .selectors .item').removeClass('selected');
	$('.selectorsBlock .selectors .item:eq(' + (args.currentSlideNumber-1) + ')').addClass('selected');
	try {
		console.log(args);
	} catch(err) {
	}
}