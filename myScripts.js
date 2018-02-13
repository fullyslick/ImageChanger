$(document).ready(function() {
  // Get the width of the windiw and assign it to a  variable
  var width = $(window).width();

  //  Listen for on change of screen size
  $(window).resize(function() {
    width = $(window).width();
    console.log(width);
  });

  // Get the services links-images
  const services = $(".service");
  // Get the banner
  const banner = $("#banner");
  // Holds the current banner image number
  var currentNumber = 1;

  // If it is in desktop mode change background, but do not go to link
  // if it is in mobile mode work as normal link
  services.click(function(e) {
    console.log("test");
    if (width > 650) {
      e.preventDefault();
      var clickedElement = $(e.target);
      console.log(clickedElement);
      if (clickedElement.is('#service-1')) {
        currentNumber = 1;
      } else if (clickedElement.is('#service-2')) {
        currentNumber = 2;
      } else if (clickedElement.is('#service-3')) {
        currentNumber = 3;
      } else if (clickedElement.is('#service-4')) {
        currentNumber = 4;
      }
      // Change Background
      changeBackground();
    } else {
      return true;
    }
  });

  // Changes the background and elements inside banner
  function changeBackground() {
    switch (currentNumber) {
      case 1:
        banner.removeClass();
        banner.addClass('service-1');
        break;
      case 2:
        banner.removeClass();
        banner.addClass('service-2');
        break;
      case 3:
        banner.removeClass();
        banner.addClass('service-3');
        break;
      case 4:
        banner.removeClass();
        banner.addClass('service-4');
        break;
    }
  }

  changeBackground();
});
