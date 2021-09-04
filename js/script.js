//Scrolling Animation
$(document).ready(function(){
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });

//Hamburger
$(document).ready(function () {
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });