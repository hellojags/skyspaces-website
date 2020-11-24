// JavaScript Document
				
			$(".device-nav").click(function(){
				$(this).find('span').toggleClass('fa-times').toggleClass('fa-bars');
				$("nav").toggleClass("reveal");
			});
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll > 100) {
					$("header").addClass("change");
				} else {
					$("header").removeClass("change");
				}
			});
			$('#community-slider').slick({
			    dots: false,
			    infinite: true,
			    speed: 1000,
			    autoplay: true,
			    autoplaySpeed: 2000,
			    slidesToShow: 2,
			    slidesToScroll: 1,
			    arrows:true,
			    prevArrow: $('.cx_prevc'),
		        nextArrow: $('.cx_nextc'),
				responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				},
			  ]
			});