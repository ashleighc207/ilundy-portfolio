$('.nav-link').on('click', function(e){
  $('.nav-link').removeClass('active');
  $(e.target).addClass('active');
})

if($('.header-slant')) {
  $('body').addClass('white-text-variant')
}
