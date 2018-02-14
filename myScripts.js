$(document).ready(function() {
  // Get the services links-images, to know how clases holding images should be loop through
  const services = $(".service");
  // Get all banners
  const banner = $('#banner-holder').children();
  // Holds the current banner image number, it is related to  the class "banner-"
  var currentImage = 0;
  // Holds the position of previous banner before the active one
  var previousBanner = 0;
  // Change this to set the delay time between switching banners
  const delayTime = 3000;

  // Changes the background and elements inside banner
  function changeBackground() {
    // Loop through all service elements and remove the 'active' class to remove the highlight
    // and hide all banners (the sub class sets the z-index = 1 it is default )
    for (var i = 0; i < services.length; i++) {
      $(services[i]).removeClass('active');
      $(banner[i]).removeClass('show');
    }

    // Set the array position of the previous banner, by -1 of the current
    previousBanner = currentImage - 1;
    if (previousBanner == -1) {
      // If this is the first picture/banner displayed, make the previous banner = last
      previousBanner = services.length - 1;
    }

    // Set the behind class for the previous banner,
    // making it stand out from all absolute positioned banners,
    // but just behind the current
    $(banner[previousBanner]).addClass('behind');

    // Make only the current service .active or highlighted
    $(services[currentImage]).addClass('active');

    // Make only current banner visible
    $(banner[currentImage]).addClass('show');

     // Remove the previous banner class behind to make it with a standard z-index
     setTimeout(function functionName() {
       $(banner[previousBanner]).removeClass('behind')
     }, delayTime)
  }

  //Loop function that switches images automaticly
  function slideShow() {
    // This will cause the delay between switching images
    setTimeout(function() {
      //Increment the current image to switch background
      currentImage++;
      // Call changeBackground() to switch the images
      changeBackground();
      if (currentImage < services.length) {
        slideShow();
      } else {
        // It is now on the last image so reset the currentImage to 1
        // And start the slideShow again
        currentImage = 0;
        changeBackground()
        slideShow();
      }
    }, delayTime) //  ..  setTimeout() delay between image switching
  }

  // On page laod execite the slideShow, do not forget to set the first banner in html with class show
  slideShow();
});
