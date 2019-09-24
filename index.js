$('.nav-link').on('click', function(e){
  $('.nav-link').removeClass('active');
  $(e.target).addClass('active');
})

// Hide Header on on scroll down - taken from the internet, modified to support two navs
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.sticky-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st < 156){
      $('.sticky-header').removeClass('nav-down').addClass('nav-up').addClass('hide');
    } else if (st > lastScrollTop && st > navbarHeight){
        $('.sticky-header').removeClass('nav-down').addClass('nav-up').addClass('hide');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.sticky-header').removeClass('nav-up').addClass('nav-down').removeClass('hide')
        }
    }

    lastScrollTop = st;
}
