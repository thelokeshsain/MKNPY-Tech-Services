$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(this).scrollTop()>35)
        {
            $('.header').css({'background':'#fff','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
       
        $('#navTag').addClass('scrolled');
        
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
            $('#navTag').removeClass('scrolled');
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
    });
  });
  
function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var whatsappMessage = encodeURIComponent("New Message from Contact Form\n\nName: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nMessage: " + message);
    var whatsappLink = "https://wa.me/+918890646334?text=" + whatsappMessage; 
  
    window.open(whatsappLink, "_blank");
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    sendWhatsAppMessage(); 
  });