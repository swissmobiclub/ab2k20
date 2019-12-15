/*
	Project Name : Getin
	+ Load
		- Loader
		- Popup
	+ Document Ready
		- Navbar
		- Isotope Filter
		- Counter
		- Countdown
		- Pie Chart
		- Carousel Types
		- Progress Bar
		- Wow Init
		- Maps
		
*/
(function($){
	"use strict"
	$(window).on('load',function(){
		/*	Popup	*/
		var popUp = $(".work-gallery");
		var popUpPlayer = $(".popup-player");
		popUp.magnificPopup({
			tLoading:"",
			gallery:{enabled:!0},
			mainClass:"mfp-fade",
			type: 'inline'
		});
		popUpPlayer.magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					  '</div>',

				srcAction: 'iframe_src',
				}
		});
	});
	$(document).ready(function(){
		/*	Isotope Filter	*/
		var e;
		var $isoImageLoad = $('.mi-items-list');
		if (typeof imagesLoaded === 'function') {
			imagesLoaded($isoImageLoad, function() {
				$isoImageLoad.isotope({
					itemSelector:".mi-single-item",
					layoutMode:"masonry",
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					},
					filter:0
				});

			});
		};
		$('[data-toggle="popover"]').popover();   
		var filter = $(".filter li a");
		filter.on("click",function(){
			return $(".filter li").removeClass("active"),
			$(this).parent().addClass("active"),
			e=$(this).attr("data-filter"),
			$(".mi-items-list").isotope({
				itemSelector:".mi-single-item",
				layoutMode:"masonry",
				filter:e
			}),!1
		});
		/*		Scroll		*/
		$('body').scrollspy({target: "", offset: 50});   
		$(".mi-smooth a").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top-100
				}, 800);
			} 
		});
		/*	Counter	 */
		var counter = $('.counter');
		counter.counterUp({
			delay: 10,
			time: 1000
		});
		/*		Progress Bar		*/
		var progressBar = $('.mi-progress-bar > span');
		progressBar.each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		/*		Pie Chart		*/
		var chartVar = $('.mi-chart');
		chartVar.waypoint(function() {
			$(this).easyPieChart({
				barColor:'black',
				trackColor: 'rgba(30,30,30,0.1)',
				scaleColor:false,
				lineWidth:4,
				size:150,
				animate:{
					duration:1000,
					enabled:true
				},
				onStep: function(a, b, c) {
					$(this.el).find(".mi-chart-percent").text(Math.round(c));
				}
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
		var oneCarousel = $('.mi-one-carousel');
		var twoCarousel = $('.mi-two-carousel');
		var threeCarousel = $('.mi-three-carousel');
		var fourCarousel = $('.mi-four-carousel');
		var fiveCarousel = $('.mi-five-carousel');
		var featureCarousel = $('.mi-feature-carousel');	
		var workCarousel = $('.mi-work-carousel');
		var centerCarousel = $('.mi-center-carousel');
		oneCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});	
		twoCarousel.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		});	
		threeCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1280:{
					items:3
				}
			}
		});
		fourCarousel.owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});	
		fiveCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		});
		featureCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1280:{
					items:3
				}
			}
		});	
		workCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});	
		centerCarousel.owlCarousel({
			center: true,
			loop:true,
			margin:20,
			nav:false,
			slideSpeed:350,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:2
				}
			}
		});
		
		/*   Counter Time   */
		var countTimer = $('.mi-counter-timer');
		countTimer.countdown("2020/02/20", function(event) {
			var offset = event.offset;
			$('.cday').text(offset.totalDays);
			$('.chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
			$('.cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
			$('.cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
		});
		countTimer.countdown('2018/02/20', function(event) {
			$(this).text(event.strftime('%D Days | %H H | %M M | %S S'));
		});
		
		/*	 Maps	*/
		if($("#mi-map-default").length === 1){
			google.maps.event.addDomListener(window, 'load', init);		
		}
		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions1 = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(40.6700, -73.9400), // New York
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
							{
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#e9e9e9"
									},
									{
										"lightness": 17
									}
								]
							},
							{
								"featureType": "landscape",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f5f5f5"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 17
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 29
									},
									{
										"weight": 0.2
									}
								]
							},
							{
								"featureType": "road.arterial",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 18
									}
								]
							},
							{
								"featureType": "road.local",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"featureType": "poi",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f5f5f5"
									},
									{
										"lightness": 21
									}
								]
							},
							{
								"featureType": "poi.park",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#dedede"
									},
									{
										"lightness": 21
									}
								]
							},
							{
								"elementType": "labels.text.stroke",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"color": "#ffffff"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"elementType": "labels.text.fill",
								"stylers": [
									{
										"saturation": 36
									},
									{
										"color": "#333333"
									},
									{
										"lightness": 40
									}
								]
							},
							{
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f2f2f2"
									},
									{
										"lightness": 19
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#fefefe"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#fefefe"
									},
									{
										"lightness": 17
									},
									{
										"weight": 1.2
									}
								]
							}							
						]
					};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement1 = document.getElementById('mi-map-default');
				// Create the Google Map using our element and options defined above
				var map1 = new google.maps.Map(mapElement1, mapOptions1);
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(40.6700, -73.9400),
					map: map1,
					 animation:google.maps.Animation.BOUNCE,
					title: 'Location'
			});
		}
		if($("#mi-map").length === 1){
			google.maps.event.addDomListener(window, 'load', init1);		
		}
		function init1() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions1 = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(40.6700, -73.9400), // New York
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
							{
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#e9e9e9"
									},
									{
										"lightness": 17
									}
								]
							},
							{
								"featureType": "landscape",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f5f5f5"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 17
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 29
									},
									{
										"weight": 0.2
									}
								]
							},
							{
								"featureType": "road.arterial",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 18
									}
								]
							},
							{
								"featureType": "road.local",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#ffffff"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"featureType": "poi",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f5f5f5"
									},
									{
										"lightness": 21
									}
								]
							},
							{
								"featureType": "poi.park",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#dedede"
									},
									{
										"lightness": 21
									}
								]
							},
							{
								"elementType": "labels.text.stroke",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"color": "#ffffff"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"elementType": "labels.text.fill",
								"stylers": [
									{
										"saturation": 36
									},
									{
										"color": "#333333"
									},
									{
										"lightness": 40
									}
								]
							},
							{
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#f2f2f2"
									},
									{
										"lightness": 19
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#fefefe"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#fefefe"
									},
									{
										"lightness": 17
									},
									{
										"weight": 1.2
									}
								]
							}							
						]
					};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement1 = document.getElementById('mi-map');
				// Create the Google Map using our element and options defined above
				var map1 = new google.maps.Map(mapElement1, mapOptions1);
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(40.6700, -73.9400),
					map: map1,
					 animation:google.maps.Animation.BOUNCE,
					title: 'Location'
			});
		}
		// google map below		
		if($("#mi-map-black").length === 1){
			google.maps.event.addDomListener(window, 'load', init2);		
		}
		function init2() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions1 = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(40.6700, -73.9400), // New York
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
							{
								"featureType": "all",
								"elementType": "labels.text.fill",
								"stylers": [
									{
										"saturation": 36
									},
									{
										"color": "#000000"
									},
									{
										"lightness": 40
									}
								]
							},
							{
								"featureType": "all",
								"elementType": "labels.text.stroke",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"color": "#000000"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"featureType": "all",
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "administrative",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 17
									},
									{
										"weight": 1.2
									}
								]
							},
							{
								"featureType": "landscape",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 20
									}
								]
							},
							{
								"featureType": "poi",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 21
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 17
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "geometry.stroke",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 29
									},
									{
										"weight": 0.2
									}
								]
							},
							{
								"featureType": "road.arterial",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 18
									}
								]
							},
							{
								"featureType": "road.local",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 16
									}
								]
							},
							{
								"featureType": "transit",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 19
									}
								]
							},
							{
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"color": "#000000"
									},
									{
										"lightness": 17
									}
								]
							}
						]
				};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement1 = document.getElementById('mi-map-black');
				// Create the Google Map using our element and options defined above
				var map1 = new google.maps.Map(mapElement1, mapOptions1);
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(40.6700, -73.9400),
					map: map1,
					 animation:google.maps.Animation.BOUNCE,
					title: 'Location'
				});
		}
	});
	/*	Navbar	*/
	$('.dropdown-menu').on('click',function(e) {
		e.stopPropagation();
	});		
	/* Navigation */
	$('.dropdown-menu .dropdown').on('mouseenter mouseleave', function() {
	  $(this).toggleClass("open");
	});
	$(window).on("scroll", function() {
		var scroll_top = $(window).scrollTop();
		var menu_value = $(".mi-slider-part").height();
		if (scroll_top > 10) {
			$(".navbar").addClass('stick_nav');
			$(".navbar .nav-address").addClass('none-display');
			$(".scroll_logo").attr("src", "img/logo.png");
		} else {
			$(".navbar").removeClass('stick_nav');
			$(".navbar .nav-address").removeClass('none-display');
			$(".scroll_logo").attr("src", "img/logo_black.png");
		}
	}); 
})(jQuery);