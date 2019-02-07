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



$(document).ready(function(){
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




function up_to_header(){

};

