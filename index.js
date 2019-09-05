$('.nav-link').on('click', function(e){
  $('.nav-link').removeClass('active');
  $(e.target).addClass('active');
})
