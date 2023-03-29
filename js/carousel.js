// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 15,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			items: 2,
			startPosition: 1,
		},
		1000: {
			items: 3,
			margin: 15,
		},
		1200: {
			items: 3,
			margin: 20,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});