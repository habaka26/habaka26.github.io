$(function() {

	/* Fixed header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);

	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* smooth scroll */
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let blockId =$(this).data('scroll');
		let blockOffset = $(blockId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: blockOffset - 70
		}, 700);

	});

	/* nav Toggle */
	

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");


	});

	/* reviews */
	let slider = $("#reviewsSlider");

	slider.slick({
		infinite:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade:true,
		arrows: false,
		dots:true
	});
});