/*custom.min*/
	
jQuery(document).ready(function($){
	//portfolio - show link
	$('.fdw-background').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);	
});



$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	$("#slideshow-nav").css("visibility", "visible");
	$("#slideshow-nav a[href=#lambo1]").addClass("active");
	
	$("#slideshow-nav").localScroll({
  		target:'#slideshow', axis: 'x'
	});
	
	$("#slideshow-nav a").click(function(){
		$("#slideshow-nav a").removeClass("active");
		$(this).addClass("active");
	});
	
});






   