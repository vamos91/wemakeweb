//= require jquery

//= require bootstrap-sprockets
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

//-----------------------------------



$(".scroll_up").ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



$('.scroll_up').hide();
  (function(){
    $(window).scroll(function() {

        if($(this).scrollTop() > 500) {
            $('.scroll_up').fadeIn();
        } else {
            $('.scroll_up').hide();
        }
    });
  })();

function up_to_header(){
    $("html, body").animate({scrollTop: $('.video').offset().top}, 1000);
  };

  function down_to_contact_form(){
    $("html, body").animate({scrollTop: $('#contact_form').offset().top}, 1000);
  };

  function down_to_about(){
    $("html, body").animate({scrollTop: $('#about').offset().top}, 1000);
  };
function down_to_service(){
    $("html, body").animate({scrollTop: $('#our_service').offset().top}, 1000);
  };

