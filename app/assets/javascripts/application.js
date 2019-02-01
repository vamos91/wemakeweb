//= require jquery


//= require rails-ujs
//= require_tree .



var menu = 0;
function close_banner(){
  if (menu == 0)
  {
    $('.banner-bg-video').animate({width: '81%'}, 800);
    // $('.banner-bg-video').addClass('banner-bg-video-retract');
    menu = 1;
  }
  else{
    $('.banner-bg-video').animate({width: '100%'}, 800);
    menu = 0;
  }
};
