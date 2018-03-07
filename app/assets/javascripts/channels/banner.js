(function(){
    $(window).scroll(function() {

        if($(this).scrollTop() > 50) {
            $('.banner-title').addClass('transparency');
        } else {
            $('.banner-title').removeClass('transparency');
            $('.navbar-wagon-root').removeClass('nav--sticky');
        }
    });
  })();
