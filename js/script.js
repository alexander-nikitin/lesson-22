$(document).ready(function(){
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function(){
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function(){
    modal.removeClass('modal_visible');
  });
  $(document).on('keydown', function(){
    if (event.keyCode == 27) {
      modal.removeClass('modal_visible');
    }
  });

  modal.on('click', function(e){
    if (e.target != modalDialog[0] && modalDialog.has(e.target).length === 0) {
      modal.removeClass('modal_visible');
    }
  });

  $(window).on('scroll', function(){
    var control = $('.control').offset().top;
    if ( $(window).scrollTop() > control) {
      $('.arrow').show();
    } else {
      $('.arrow').hide();
    }
  })
  $('.arrow').on('click', function(){
    $('html,body').stop().animate({ scrollTop: 0 }, 1000);
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container-projects', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  bullets.css('left', prev.width() +30 )
  next.css('left', prev.width() + 30 + bullets.width() + 30);

  var mySwiperSteps = new Swiper ('.swiper-container-steps', {
    // loop: true,
    pagination: {
      el: '.swiper-pagination-steps',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next-steps',
      prevEl: '.swiper-button-prev-steps',
    },
    on: {
			slideNextTransitionStart: function () {
        var index = mySwiperSteps.activeIndex + 1;
        var index2 = mySwiperSteps.activeIndex;
        $('.steps__item').removeClass("active");
        $(".steps__item:nth-child("+index+")").addClass("active");
        $(".step-fraction span").text(index);
        mySwiperStepsTwo.slideTo(index2);
			},
			slidePrevTransitionStart: function () {
        var index = mySwiperSteps.activeIndex + 1;
        var index2 = mySwiperSteps.activeIndex;
        $('.steps__item').removeClass("active");
        $(".steps__item:nth-child("+index+")").addClass("active");
        $(".step-fraction span").text(index);
        mySwiperStepsTwo.slideTo(index2);
      }
		}
  });

  $(".steps__item").click(function() {
    var index = $(this).index();
    mySwiperSteps.slideTo(index);
  });

  var mySwiperStepsTwo = new Swiper ('.swiper-container-steps-two', {
  });

  var nextStep = $('.swiper-button-next-steps');
  var prevStep = $('.swiper-button-prev-steps');
  var bulletsStep = $('.swiper-pagination-steps');

  bulletsStep.css('left', prevStep.width() +30 );
  nextStep.css('left', prevStep.width() + 30 + bulletsStep.width() + 30);

  // mySwiperSteps.on('slideChangeTransitionEnd', function () {
  //   console.log(($('.swiper-container-steps .swiper-slide-active').index()));
  // });
  

});