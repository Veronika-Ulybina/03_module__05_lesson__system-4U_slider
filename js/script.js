$(window).on("load resize", function(){
	var width = $(document).width();
	
	if (width > 480) {
		$('.benefits-list').slick('unslick');
	} else {
		$('.benefits-list').not('.slick-initialized').slick({ 
			speed: 500,
			infinite: false,
			waitForAnimate: false
		});
	}
});