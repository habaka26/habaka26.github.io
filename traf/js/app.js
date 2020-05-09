new WOW().init();

$(function(){

    $("[data-collapse]").on("click", function(event){

		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('collapse');	
        $this.toggleClass("active");

    });

});