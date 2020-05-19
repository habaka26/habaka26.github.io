
 $(function (){
     $(".certificate__slider").slick ({
         infinite: true,
         slidesToShow:4,
         slidesToScroll:1,
         nextArrow: '<img class="certificate__next" src="img/certificates/next.svg">',
         prevArrow: '<img class="certificate__prev" src="img/certificates/prev.svg">',
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [

              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
 
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
     });


     $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

     const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
        });
        }, 200);
        modalClose.on("click", function(event) {
            event.preventDefault();
            let $this = $(this);
            let modalParent = $this.parents('.modal');
    
            modalParent.find(".modal__dialog").css({
                transform: "rotateX(90deg)"
            });
    
            setTimeout(function() {
                modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
    
    
            }, 200);
    
    
        });
    
        $('.modal').on("click", function(event) {
            let $this = $(this);
            $this.find(".modal__dialog").css({
                transform: "rotateX(90deg)"
            });
    
            setTimeout(function() {
                $this.removeClass('show');
                $("body").removeClass('no-scroll');
            }, 200);
        });
    
        $('.modal__dialog').on("click", function(event) {
            event.stopPropagation();
        });

        



    });
 });
let header = $("#header"),
		heroH = $("#hero").innerHeight(),
	 	scrollOffset = $(window).scrollTop();
	 	/* header fixed*/
	checkScroll(scrollOffset); 	

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});


	function checkScroll() {
		if( scrollOffset >= heroH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
    }
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;
			
		$("html, body").animate({
			scrollTop: blockOffset - 100
        }, 500);
        $(".header__menu").removeClass("active");
	});
