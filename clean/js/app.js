$(function(){
    $(document).ready(function(){
        $('.blog__slider').slick({
			arrows:true,
			prevArrow: '<img class="blog__arrow-prev" src="img/blog/prev.svg">',
			nextArrow: '<img class="blog__arrow-next" src="img/blog/next.svg">',
			infinite:true,
			dots: true,
		});
		$('.quotes__slider').slick({
			dots:true,
			infinite: true,
			arrows:false,
			fade:true,
		});
	  });
    var header = $("#header"),
		introH = $("#intro").innerHeight(),
	 	scrollOffset = $(window).scrollTop();
	 	/* header fixed*/
	checkScroll(scrollOffset); 	

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});


	function checkScroll() {
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


    	/* collapse */
	$("[data-collapse]").on("click", function(event){

		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('collapse');	
		$this.toggleClass("active");	

    });
    
    /* smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500)
	});
	/* menu nav toggle */

	$("#menu__toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#menu__left").toggleClass("active");
		$("#menu__socials-nav").toggleClass("active");

	});
});