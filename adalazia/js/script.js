AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
    
    });

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__nav, body').toggleClass('active');  
    })
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
})

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body = document.querySelector('body');
if(isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow')
    for(i=0;i<arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling
        let subMenu = arrow[i].nextElementSibling
        let thisArrow = arrow[i]

        thisLink.classList.add('parent')
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open')
            thisArrow.classList.toggle('active')
        })
    }
} else {
    body.classList.add('mouse');
}