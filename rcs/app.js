$(function() {
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

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#menu a").removeClass("active");
        $("#menu").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });


    /* menu nav toggle */

    $("#menu__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#menu").toggleClass("active");

    });

    /* Modal
    ================================*/

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



    });
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

    /* hide categories */
    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");

        } else {

            $("[data-cat]").each(function(){

            let workCat = $(this).data('cat');

            if(workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
        }


    });

    let salam = $("[data-salam]");

    salam.on("click", function(event){
        event.preventDefault();

        let lol = $(this).data('salam');

        if(lol == 'ok') {
            $("[data-lol]").removeClass("hide");


            $("#services__all").addClass("hide");

        } else {

            $("[data-lol]").each(function(){

            let workLol = $(this).data('lol');

            if(workLol != lol) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
        }


    });

    $(".form__input").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


});
