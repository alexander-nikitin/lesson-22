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
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  bullets.css('left', prev.width() +30 )
  next.css('left', prev.width() + 30 + bullets.width() + 30);
});