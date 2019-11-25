jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 38) {
    jQuery(".navbar").addClass('sticky');
  } else {
    jQuery(".navbar").removeClass('sticky');
  }
});
// sticky menu end


jQuery(document).ready(function () {
  /*--toggle menu for mobile--*/
  jQuery('.navbar-toggler').click(function () {
    jQuery(this).toggleClass('open');
  });
  /*--END-toggle menu for mobile--*/

  // wordpress menu open
  jQuery("<span class='clickD'></span>").insertAfter(".navbar-nav > li.menu-item-has-children > a");
  if (jQuery(window).width() < 992) {
    $('.navbar-nav li .clickD').click(function (e) {
      e.preventDefault();
      var $this = $(this);

      if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
        $this.next().hide();
      } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.parent().parent().find('.sub-menu').hide();
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
        $this.next().show();
      }
    });

    $('html').click(function () {
      $('.navbar-nav li .clickD').removeClass('toggled');
    });
    $(document).click(function () {
      $('.navbar-nav li .clickD').removeClass('toggled');
    });
    $('.navbar-nav').click(function (e) {
      e.stopPropagation();
    });
  }
  // wordpress menu end

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
        breakpoint: 1199,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
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


});