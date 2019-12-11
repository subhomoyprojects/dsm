jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 38) {
    jQuery(".navbar").addClass('sticky');
  } else {
    jQuery(".navbar").removeClass('sticky');
  }
});
// sticky menu end


jQuery(document).ready(function () {

  //logo_slider
  $('.partners-logo').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

// Light Box

  $('#lightgallery').lightGallery();

  // Animation

  AOS.init();

  // Active Navigation


});