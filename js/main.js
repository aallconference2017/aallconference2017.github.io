$(document).ready(function(){
	/*
	 * mobile menu toggle
	 */
	$('.mobile-menu-toggle').click(function(event){
		event.preventDefault();
		$('.main-nav').toggleClass('open');
		$('html').toggleClass('overlay-on');
	});
	
	/* 
	 * smooth scroll
	 */
	$('a[href*="#"]:not([href="#"])').click(function() {
        var scrollPosition;
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            scrollPosition = target.offset().top;
            if (target.length) {
                 $('html,body').animate({
                     scrollTop: scrollPosition
                }, 1000);
                return false;
            }
        }
    });
});