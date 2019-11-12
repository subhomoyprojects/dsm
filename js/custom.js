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
  $('.logo_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
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

  //review_slider
  $('.review_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false
  });


  //Horizontal Tab
  $('#parentHorizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_1', // The tab groups identifier
    activate: function (event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#nested-tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
    }
  });

});