$(document).ready(function(){
	$(".parallax[data-type='background']").each(function(){
		var $parallax = $(this);
		$(window).scroll(function(){
			var $coordY = -($(window).scrollTop()/$parallax.data('speed'));
			var $coordination = "0" + $coordY + "px";
			$parallax.css("background-position", $coordination);
		});
	});
});