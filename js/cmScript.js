$(function(){
	var $headerCm = $('#cm-header');
	var $topHeader = $headerCm.offset().top;
	var $btnScroll = $('.circle');
	var $video = $(".tapa");
	var pantalla = $(window).width();
	var $titulo = $("#titulo");
	$(window).on('scroll',function(){
		var $top = $(window).scrollTop();
		if($top > $topHeader){
			$headerCm.css({'position':'fixed'});
		}else{
			$headerCm.css({'position':'relative'});
		}
	});
	$btnScroll.on('click',function(){
		 $('body , html').animate({scrollTop:$topHeader},1000,'easeInOutExpo');
	});
	$video.on("click",function(){
		var youtube = $(this).siblings("iframe");
		$(youtube).attr("src","https://www.youtube.com/embed/-shCDK2nPxU?autoplay=1&rel=0&controls=0&showinfo=0&modestbranding=0");
		var myVar = setInterval(function(){ $video.css("display","none") }, 1500);
		
	});

	if(pantalla < 480){
		$titulo.css("font-size","3.5em");
	}
	if (pantalla > 480 && pantalla < 769){
		$titulo.css("font-size","4.8em");
	}

});