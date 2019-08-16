import "./import/modules.js";


$( document ).ready(function() {
var men=true;
	var glschet =1;
$("#sandwich").click(function()
	{
		if(men==false)
		{
			$(".sub__menu").slideUp();
			men=!men;
		}
		else
		{
			$(".sub__menu").slideDown();
			men=!men;
		}
	});
		$("#sandwich, .menu_item").click(function() {
		 $("#sandwich").toggleClass("active");
	});
	$(".sub__menu ul li").click(this, function(){

			$(this).find("ul").toggle(500);	
	});


	$(".menu_main_responsive_button").click(function(){
		$('.menu_main_responsive').toggle('fast');

	});
	$(".menu_main_responsive > li").click(function(){
		$(this).children("ul").toggle('fast');

	});

	$(".brands .img img").css("display", "block");


})
$(function() {
$(window).on('load resize', function() {
        if(document.documentElement.clientWidth < 758){
        	$('.add-pesponsive-class').addClass("responsive_menu");
        }else{
        	$('.add-pesponsive-class').removeClass("responsive_menu");
        }
	});
});