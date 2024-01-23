$(document).ready(function(){
	$('#header').hide();
	$('.pop').hide();

	$('.ham').click(function(){
		$('#header').slideDown();
	});

	$('#header .close').click(function(){
		$('#header').slideUp();
	});

	$('.modal>p').click(function(){
		$('.pop').fadeIn();
	});

	$('.pop>.close').click(function(){
		$('.pop').fadeOut();
	});
	
	$('.modal>.modal_close').click(function(){
		$('.modal').slideUp();
	});
});