$('.slick-carousel').slick({
		slidesToShow: 4,
		initialSlide: 1,
		slidesToScroll: 1,
		infinite: false,
		cssEase: 'ease-out',

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows:false,
					dots:true,
				}
			}]
	});
	$('.slick-about').slick({
    slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		cssEase: 'ease-out',

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots:true,
					

				}
			}]
	});
	$('.slids--container').slick({
    slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots:true,
		cssEase: 'ease-out',
		arrows:false,
	});





	$(document).ready(function() {
		$('.button--223').on('click',function(event){
			if($(event.target).attr('data-visible')=="false"){
				$(event.target).attr("data-visible","true");
				$(event.target).addClass("statistic-b-active");
				$('.button--44').removeClass("statistic-b-active");
				$('.button--44').attr("data-visible","false");
				$('.statistic-223').toggleClass('v-none')
				$('.statistic-44').toggleClass('v-none')
			}
			else{
			}
		})
		$('.button--44').on('click',function(event){
			if($(event.target).attr('data-visible')=="false"){
				$(event.target).addClass("statistic-b-active");
				$(event.target).attr("data-visible","true");
				$('.button--223').removeClass("statistic-b-active");
				$('.button--223').attr("data-visible","false");
				$('.statistic-44').toggleClass('v-none')
				$('.statistic-223').toggleClass('v-none')
			}
			else{
			}
		})
		$(".accordion").on('click',function(event){
			var panel = $(event.target).next(".panel");
			if (panel.css('max-height')=='0px'){
				$(event.target).toggleClass('accordion--active')
				panel.css('max-height',panel.prop('scrollHeight') + "px")
			} else {
				panel.css('max-height','0px');
				$(event.target).toggleClass('accordion--active')
			} 
		})


		

	$('.con').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('con-active');
		$('.nav-menu').slideToggle();
	  });
$('.menu-item > a').on('click', function(event) {
	$(this).parent().addClass('menu-item-active')
if($('.con').hasClass('con-active')){
	$('.nav-menu').slideToggle();
	$('.con').removeClass('con-active');
}
})

if($(window).width() >= 767) {
	$(window).scroll(function() { 
	var the_top = $(document).scrollTop();
	if (the_top > 200) {
		$('.header-bottom').addClass('fixed');
		$('body').css('padding-top','50px')
	}
	else {
		$('.header-bottom').removeClass('fixed');
		$('body').css('padding-top','0px')
    }
});
}
//open popup
$('[data-modal-open]').on('click', function(event){
	event.preventDefault();
	var openedModal=$(event.target).attr('data-modal-open');
	$('.modal[data-modal='+openedModal+']').addClass('is-visible');
});
//close popup
$('.modal').on('click', function(event){
	if( $(event.target).is('.modal-close') || $(event.target).is('.modal') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});
//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
		if(event.which=='27'){
			$('.modal').removeClass('is-visible');
		}
	});
console.log(typeof $('.zoomed-img').attr('src'));
$('img').on('click',function(event){
	if($(event.target).attr('zoom')=="true"){
		if(	$('.zoomed-img').attr('src') === $(event.target).attr('data-src') || $('.zoomed-img').attr('src') === ""){
			$('.modal[data-modal=2]').addClass('is-visible');
		}
else{

<<<<<<< HEAD
	activityIndicatorOn = function()
			{
				$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
			},
			activityIndicatorOff = function()
			{
				$( '#imagelightbox-loading' ).remove();
			},
			overlayOn = function()
			{
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
			},
			overlayOff = function()
			{
				$( '#imagelightbox-overlay' ).remove();
			};
			$( 'a[data-imagelightbox=a]' ).imageLightbox(
		{
			onStart: 	 function() { overlayOn(); },
			onEnd:	 	 function() { overlayOff(); activityIndicatorOff(); },
			onLoadStart: function() { activityIndicatorOn(); },
			onLoadEnd:	 function() { activityIndicatorOff(); }
		});
		$( 'a[data-imagelightbox=testim]' ).imageLightbox(
		{
			onStart: 	 function() { overlayOn(); },
			onEnd:	 	 function() { overlayOff(); activityIndicatorOff(); },
			onLoadStart: function() { activityIndicatorOn(); },
			onLoadEnd:	 function() { activityIndicatorOff(); }
		});


// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
  'use strict';
  $('#form').on('submit', function(e) {
		console.log('try submit')
    e.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          alert('Сообщение отправлено');
          $('#form').trigger('reset'); // очистка формы
        } else {
          alert('Ошибка');
        }
      }
    });
  });
});

=======
	$('.modal[data-modal=2]').addClass('is-visible');
	$('.zoomed-img').attr('src',$(event.target).attr('data-src'));
}
	}
})
>>>>>>> 2a351eea96e781536888670d18a18fcf2c3ad339

});