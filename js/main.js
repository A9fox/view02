$(function() {

	function open() {
		$('.hover').show();
		$('.popup').show();
	}

	function close(){
		$('.hover').hide();
		$('.popup').hide();
	}

	$(".reqCall").on('click', open);
	$(".hover").on('click', close);

	var link = $('.m-nav-btn'),
		menu = $('.m-nav'),
		closeNav = $('.close-nav');

		function active() {
			menu.toggleClass('m-nav__active');
			// closeNav.removeClass("remove");
			// $(this).addClass("remove");
			// closeNav.addClass("active");
		}

		function noActive(){
			menu.toggleClass('m-nav__active');
			// $(this).addClass("remove");
			// link.removeClass("remove");
		}

	link.on('click', active);
	closeNav.on('click', noActive);


	$('#phone').mask("+7 ( 999 ) 999 - 99 - 99 ", {placeholder:" "});


	let blockColor = $('.block-color-watch');

	function chooseColor(){
		let watchId = $(this).attr('data-img');
		blockColor.removeClass('active');
		$(this).addClass("active");
		$(".overview-img").attr("src", watchId);
	}

	blockColor.on('click', chooseColor);



	$(".eventNav").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),


			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});

});