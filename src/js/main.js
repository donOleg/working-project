$(document).ready(function() {

	$('.navbar-toggler').click(function(){
		$('.sandwich').toggleClass('active');
	});
	$('.nav-link').click(function() {
		$('.navbar-collapse').fadeOut(600);
		$('.sandwich').toggleClass('active');
	})

	$('.navbar-toggler').click(function(){
		if($('.sandwich').hasClass('active')) {
			$('.navbar-collapse').fadeIn(600);
		} else {
			$('.navbar-collapse').fadeOut(600);
		};
	});

	/*** Стилизация checkbox, select ***/
	$('.styled').styler();
	/*** Стилизация checkbox, select  end ***/

	/*** Slide ***/
	$('.reviews_slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		speed: 1000,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1
				}
			}
		]
	});
	/*** Slide end ***/


	/*** Slide ***/
	$('.partenrs_slide').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		speed: 1000,
		dots: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
				  slidesToShow: 5
				}
			},
			{
				breakpoint: 1350,
				settings: {
				  slidesToShow: 4
				}
			},
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3
				}
			},
			{
				breakpoint: 620,
				settings: {
				  slidesToShow: 2
				}
			}
		]
	});
	/*** Slide end ***/

	/*** Slide ***/
	$('.news_slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		speed: 1000,
		dots: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
				  slidesToShow: 3
				}
			},
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
				  slidesToShow: 1
				}
			}
		]
	});
	/*** Slide end ***/

	/*** Tabs ***/
	$('.js-tab-link').click(function(){
		$(this).parents('.js-tabs-wrap').find('.tabs-cont').addClass('tabs-cont_hide');
		$(this).parent().siblings().removeClass('active');
		var s = $(this).attr("href");
		return (
			$(s).removeClass("tabs-cont_hide"),
			$(this)
			.parent()
			.addClass("active"),
			!1
		);
	});
	/*** Tabs end ***/

});


/* Preloader*/
document.body.onload = function () {

	setTimeout( function () {
		var preloader = document.getElementById('pagePreloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);

};