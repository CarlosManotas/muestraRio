$(function(){
	var $headerCm = $('#cm-header');
	var $topHeader = $headerCm.offset().top;
	var $btnScroll = $('.circle');
	$(window).on('scroll',function(){
		var $top = $(window).scrollTop();
		if($top > $topHeader){
			$headerCm.css({'position':'fixed'});
		}else{
			$headerCm.css({'position':'relative'});
		}
	});
	$btnScroll.on('click',function(){
		 $('body , html').animate({scrollTop:$topHeader},1000);
	});
});