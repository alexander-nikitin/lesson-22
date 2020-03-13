/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const closeModal = document.querySelector('.modal');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }
  const closeModalEsc = () => {
    modal.classList.remove('modal_visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);

  closeModal.addEventListener('click', function(e){
    if (e.target === modal && e.target != modalDialog) {
      closeModalEsc();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      closeModalEsc();
    }
  });
}); */

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
  
});