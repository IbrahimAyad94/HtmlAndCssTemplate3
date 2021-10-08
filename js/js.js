/*$, alert, console, global*/
$(function(){
	'use strict'

  //  $("html").niceScroll();
  
  // header height
  //$('.header').height($(window).height());
 // $('.intro').css('margin-top', $('.intro').height() /);
  $('.show').click(function(){
	  $('.our .hidden').slideDown(2000);
  });
  // check cleints 
  var left = $('.testim .fa-chevron-left');
  var  right = $('.testim .fa-chevron-right');
  
  function check(){
	  
	  if ($('.client:first').hasClass('active') ){
		  
		  left.fadeOut();
	  } else{
		  left.fadeIn();
	  }
	  if ($('.client:last').hasClass('active')){
		  right.fadeOut();
	  } else{
		  right.fadeIn();
	  }
	  
  }
check();

	$('.testim i').click(function(){
		
		if ($(this).hasClass('fa-chevron-right')){
			
			$('.testim .active').fadeOut(100, function(){
				
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				
				check();
			});
			
			
		} else{
			$('.testim .active').fadeOut(100, function(){
				
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				
				check();
			});
		}
		
		
	});
});