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
    
    /*
     * generate jumplinks
     */
    $('h2').each(function(index) {
        // add id's to h2's for jump links
        $(this).attr('id','section' + index);
        // if jump links nav is showing add jump link
        if ($('.jump-links').length > 0) {
            // get heading text
            var headingTitle = $(this).text();
            // create list item and link
            var jumpLink = '<li><a href="#section' + index + '">' + headingTitle +'</a></li>';
            // add list item to nav
            $('.jump-links').append(jumpLink);
        }
    });
});