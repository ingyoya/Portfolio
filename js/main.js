$(document).ready(function () {
	
	//티스토리 공감버튼 이벤트
	function reAction(){
		$("#startButton").trigger("click");
		setTimeout(function(){
			$("#stopButton").trigger("click");
		}, 6000);
	}
	
	$(".uoc-icon").on('click', function(){
		reAction();
	}); 

	function reAction(){
		$("#strB").trigger("click");
		setTimeout(function(){
			$("#stoB").trigger("click");
		}, 6000);
	}
	
	$(".uoc-icon").on('click', function(){
		reAction();
	}); 


	

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

	$('.modal_chk2 .btn').click(function(){
		$('.modal_bg').fadeOut();
		$('.modal_bg').removeClass('on');
	});



	window.addEventListener('scroll', function() {
		console.log(window.scrollY);
	  });
	  
	  document.querySelector('.scroll-page1').addEventListener('click', function(){
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	  });




	  document.querySelector('.scroll-page2').addEventListener('click', function(){
		window.scrollTo({
			top: 1080,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scr-page2').addEventListener('click', function(){
		window.scrollTo({
			top: 1080,
			left: 0,
			behavior: "smooth"
		})
	  });

	  document.querySelector('.scroll-page3').addEventListener('click', function(){
		window.scrollTo({
			top: 1080,
			left: 0,
			behavior: "smooth"
		})
	  });





	  document.querySelector('.scroll-yeo',).addEventListener('click', function(){
		window.scrollTo({
			top: 2160,
			left: 0,
			behavior: "smooth"
		})
	  });

	  document.querySelector('.scr-yeo').addEventListener('click', function(){
		window.scrollTo({
			top: 2160,
			left: 0,
			behavior: "smooth"
		})
	  });



	  document.querySelector('.scroll-arr').addEventListener('click', function(){
		window.scrollTo({
			top: 3240,
			left: 0,
			behavior: "smooth"
		})
	  });

	  document.querySelector('.scr-arr').addEventListener('click', function(){
		window.scrollTo({
			top: 3240,
			left: 0,
			behavior: "smooth"
		})
	  });

	  document.querySelector('.s-arr').addEventListener('click', function(){
		window.scrollTo({
			top: 3240,
			left: 0,
			behavior: "smooth"
		})
	  });



	  document.querySelector('.scroll-gyo').addEventListener('click', function(){
		window.scrollTo({
			top: 4320,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scr-gyo').addEventListener('click', function(){
		window.scrollTo({
			top: 4320,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.s-gyo').addEventListener('click', function(){
		window.scrollTo({
			top: 4320,
			left: 0,
			behavior: "smooth"
		})
	  });



	  document.querySelector('.scroll-ad').addEventListener('click', function(){
		window.scrollTo({
			top: 5400,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.scr-ad').addEventListener('click', function(){
		window.scrollTo({
			top: 5400,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.s-ad').addEventListener('click', function(){
		window.scrollTo({
			top: 5400,
			left: 0,
			behavior: "smooth"
		})
	  });


	  document.querySelector('.scr-contact').addEventListener('click', function(){
		window.scrollTo({
			top: 6480,
			left: 0,
			behavior: "smooth"
		})
	  });
	  document.querySelector('.s-contact').addEventListener('click', function(){
		window.scrollTo({
			top: 6480,
			left: 0,
			behavior: "smooth"
		})
	  });

});