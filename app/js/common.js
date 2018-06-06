$(function() {

	$('.carousel-present').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: true,
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				nav: false
			},
			320: {
				center: true,
				nav: false
			},
			992: {
				nav: true
			}
		}
	});

	$('.carousel-content').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: false,
		items: 2,
		autoWidth: false,
		margin: 20,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			540: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: false
			},
			992: {
				nav: true
			}
		}
	});

	$('.carousel-news').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		responsive: {
			0: {
				nav: false
			},
			768: {
				nav: false
			},
			992: {
				nav: true
			}
		}
	});

	$('.carousel-feedbacks').owlCarousel({
		items: 2,
		dots: false,
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			768: {
				items: 2
			},
			992: {
				nav: true
			}
		}
	});

	$('.carousel-usefulls').owlCarousel({
		items: 5,
		dots: false,
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 3,
				nav: false
			},
			768: {
				items: 5,
				nav: false
			},
			768: {
				items: 5
			},
			992: {
				nav: true
			}
		}
	});

	$('.menu').on('click', function(){
		$('.sidebar').toggleClass('none')
	});

});
