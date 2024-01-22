$(document).ready(function () {
	

	$('.next_button').mouseenter(function () {
		$('.next>p').hide();
	});
	$('.next_button').mouseleave(function () {
		setTimeout(function () {
			$('.next>p').fadeIn();
		}, 300);
	});

	$('.modal_bg').hide();

	$('.next_button').click(function () {
		$('.modal_bg').fadeIn();
		$('.modal_chk1').fadeIn();
		$('.modal_chk2').hide();
		$('#page2 .modal_bg').hide();
	});


	$('.modal_bg .modal_chk1 .btn').click(function () {
		$('.modal_chk1').hide();
		$('.modal_chk2').show();
		$('.modal_bg').addClass('on');
	});

	$('.close').click(function () {
		$('.modal_bg').fadeOut();
		$('.modal_bg').removeClass('on');
	});


	$('.talk').click(function () {
		$('#page2 .modal_bg').fadeIn();
	});

	window.addEventListener('scroll', function() {
		console.log(window.scrollY);
	  });

	  document.querySelector('.scroll-page2').addEventListener('click', function(){
		window.scrollTo({
			top: 1085,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scroll-page3').addEventListener('click', function(){
		window.scrollTo({
			top: 1085,
			left: 0,
			behavior: "smooth"
		})
	  });

	  document.querySelector('.scroll-yeo').addEventListener('click', function(){
		window.scrollTo({
			top: 2163,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scroll-arr').addEventListener('click', function(){
		window.scrollTo({
			top: 3244,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scroll-gyo').addEventListener('click', function(){
		window.scrollTo({
			top: 4170,
			left: 0,
			behavior: "smooth"
		})
	  });


});