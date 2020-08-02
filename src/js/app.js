'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'owl.carousel2/dist/owl.carousel';
import 'slick-carousel/slick/slick';
import '@fancyapps/fancybox/dist/jquery.fancybox';
import './accordion';
import './carousel';

$(function () {
  //Nav changed on scroll
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('#service_number').css("box-shadow" , "#106ca9d7 5px 0px 20px 2px");
      $('#service_number').addClass('active');
    } else {
      $('#service_number').css("box-shadow" , "none");
      $('#service_number').removeClass('active');
    }
  });

  //Chat container
  $(".c_h").click(function (e) {
    $("#chat_container").slideDown("slow");
    $(".icon").fadeIn()
    $(".right_c").addClass("active");
    $('.message').addClass('active');
  });
  $(".icon").click(function (e) {
    $("#chat_container").slideUp("slow");
    $(".icon").fadeOut();
    $(".right_c").removeClass("active");
  });
  $("#chat_container").click(function () {
    $(".c_h").click();
  });

  // Tab
  // Show the first tab by default
  $('.tabs-stage .tab-div').hide();
  $('.tabs-stage .tab-div:first').show();
  $('.tabs-nav li:first').addClass('tab-active');

  // Change tab class and display content
  $('.tabs-nav a').on('click', function (event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .tab-div').hide();
    $($(this).attr('href')).show();
  });


  //date picker
  $('.datepicker').datepicker({
    startDate: '-3d'
  });

  // Accordion

  $(document).ready(function () {
    $(".set > .asd").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(400);
        $(".set > .asd i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > .asd i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > .asd").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(400);
        $(this)
          .siblings(".content")
          .slideDown(400);
      }
    });
  });


  // Calendar
  $('#datepicker').datepicker();
  $('#datepicker').on('changeDate', function () {
    $('#my_hidden_input').val(
      $('#datepicker').datepicker('getFormattedDate')
    );
  });


  //MENU BUTTON TRANSFORM TO X AND TOGGLE MENU
  $('#toggleMenuButton').click(function () {
    $(this).toggleClass('active');
    $('.toggle_menu').slideToggle();
    //$('body').toggleClass('active');
  });


  // OWL CAROUSEL
  $('#home_page .brend-items .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      700: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  })


  $("#home_page .project_carousel .owl-carousel").owlCarousel({
    items: 1,
    stagePadding: 30,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      768: {
        items: 3,
        stagePadding: 0
      },

      992: {
        items: 4,
        stagePadding: 0
      },

      1200: {
        items: 5,
        stagePadding: 0
      }
    }
  });


  $('#home_page .promise-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: ["<", ">"],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })



  //Fancy box
  $('#home_page [data-fancybox]').fancybox({
    buttons: ['close'],

    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });




});