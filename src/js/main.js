$(document).ready(function() {

	// фиксация header
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 57) {
					$('.header').addClass('fix');
			} else {
					$('.header').removeClass('fix');
			}
		});
	});

	ScrollReveal({ reset: true }).reveal('.headline', { delay: 300 });
	ScrollReveal({ reset: true }).reveal('.tagline', { delay: 300 });
	ScrollReveal({ reset: true }).reveal('.punchline', { delay: 300 });

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


	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Фон + фосфоритная мука 1т/га', 'Фон(Контроль) ц/га'],
			datasets: [{
				label: 'Фон + фосфоритная мука 1т/га',
				data: [38.7, 29],
				backgroundColor: [
					'rgb(59, 133, 69)',
					'rgb(21, 51, 54)'
				]
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Яровой рапс',
				fontColor: '#0F3F44',
				fontSize: 22
			},
			legend: {
				display: false,
				text: 'Фон + фосфоритная мука 1т/га',
				position: 'bottom'
			}
		}
	});


	var ctx2 = document.getElementById('myChart2').getContext('2d');
	var myChart2 = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ['Фон + фосфоритная мука 1т/га', 'Фон(Контроль) ц/га'],
			datasets: [{
				label: 'Фон + фосфоритная мука 1т/га',
				data: [41.86, 31.32],
				backgroundColor: [
					'rgb(59, 133, 69)',
					'rgb(21, 51, 54)'
				]
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Ячмень',
				fontColor: '#0F3F44',
				fontSize: 22
			},
			legend: {
				display: false,
				text: 'Фон + фосфоритная мука 1т/га',
				position: 'bottom'
			}
		}
	});

	var ctx3 = document.getElementById('myChart3').getContext('2d');
	var myChart3 = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: ['Фон + фосфоритная мука 1т/га', 'Фон(Контроль) ц/га'],
			datasets: [{
				label: 'Фон + фосфоритная мука 1т/га',
				data: [47.5, 32.75],
				backgroundColor: [
					'rgb(59, 133, 69)',
					'rgb(21, 51, 54)'
				]
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Кукуруза',
				fontColor: '#0F3F44',
				fontSize: 22
			},
			legend: {
				display: false,
				text: 'Фон + фосфоритная мука 1т/га',
				position: 'bottom'
			}
		}
	});

	var ctx4 = document.getElementById('myChart4').getContext('2d');
	var myChart4 = new Chart(ctx4, {
		type: 'bar',
		data: {
			labels: ['Фон + фосфоритная мука 1т/га', 'Фон(Контроль) ц/га'],
			datasets: [{
				label: 'Фон + фосфоритная мука 1т/га',
				data: [47, 39.9],
				backgroundColor: [
					'rgb(59, 133, 69)',
					'rgb(21, 51, 54)'
				]
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Пшеница',
				fontColor: '#0F3F44',
				fontSize: 22
			},
			legend: {
				display: false,
				text: 'Фон + фосфоритная мука 1т/га',
				position: 'bottom'
			}
		}
	});

	var ctx5 = document.getElementById('myChart5').getContext('2d');
	var myChart5 = new Chart(ctx5, {
		type: 'bar',
		data: {
			labels: ['Фон + фосфоритная мука 1т/га', 'Фон(Контроль) ц/га'],
			datasets: [{
				label: 'Фон + фосфоритная мука 1т/га',
				data: [175.3, 124.3],
				backgroundColor: [
					'rgb(59, 133, 69)',
					'rgb(21, 51, 54)'
				]
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Клевер (2 укоса)',
				fontColor: '#0F3F44',
				fontSize: 22
			},
			legend: {
				display: false,
				text: 'Фон + фосфоритная мука 1т/га',
				position: 'bottom'
			}
		}
	});

	var myCircle = Circles.create({
		id:                  'circles-1',
		radius:              140,
		value:               15.1,
		maxValue:            100,
		width:               25,
		text:                function(value){return value + '%' + " " + "Пшеница";},
		colors:              ['#B2B5B8', '#3B8545'],
		duration:            400,
		wrpClass:            'circles-wrp',
		textClass:           'circles-text',
		valueStrokeClass:    'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper:        true,
		styleText:           true
	});

	var myCircle2 = Circles.create({
		id:                  'circles-2',
		radius:              140,
		value:               29,
		maxValue:            100,
		width:               25,
		text:                function(value){return value + '%' + " " + "Клевер (2 укоса)";},
		colors:              ['#B2B5B8', '#3B8545'],
		duration:            400,
		wrpClass:            'circles-wrp',
		textClass:           'circles-text',
		valueStrokeClass:    'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper:        true,
		styleText:           true
	});

	var myCircle3 = Circles.create({
		id:                  'circles-3',
		radius:              140,
		value:               33.4,
		maxValue:            100,
		width:               25,
		text:                function(value){return value + '%' + " " + "Яровой рапс";},
		colors:              ['#B2B5B8', '#3B8545'],
		duration:            400,
		wrpClass:            'circles-wrp',
		textClass:           'circles-text',
		valueStrokeClass:    'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper:        true,
		styleText:           true
	});

	var myCircle4 = Circles.create({
		id:                  'circles-4',
		radius:              140,
		value:               33.7,
		maxValue:            100,
		width:               25,
		text:                function(value){return value + '%' + " " + "Ячмень";},
		colors:              ['#B2B5B8', '#3B8545'],
		duration:            400,
		wrpClass:            'circles-wrp',
		textClass:           'circles-text',
		valueStrokeClass:    'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper:        true,
		styleText:           true
	});

	var myCircle5 = Circles.create({
		id:                  'circles-5',
		radius:              140,
		value:               45,
		maxValue:            100,
		width:               30,
		text:                function(value){return value + '%' + " " + "Кукуруза";},
		colors:              ['#B2B5B8', '#3B8545'],
		duration:            400,
		wrpClass:            'circles-wrp',
		textClass:           'circles-text',
		valueStrokeClass:    'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper:        true,
		styleText:           true
	});

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