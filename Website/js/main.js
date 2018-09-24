<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    
    jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop(),
            navbar = $('.fixed-top');
        
        if (scrollPosition > 400) {
            navbar.addClass('change-fix-top');
        }
        
        else {
            navbar.removeClass('change-fix-top');
        }
   });
 });

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
       

