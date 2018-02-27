$(document).ready(function() {
  // Get the smallImages
  const smallImages = $("#small-images-holder").children();
  // Get all banners
  const banner = $('#banner-holder').children();
  // Holds the position of current banner
  var currentBanner = 0;
  // Holds the position of previous banner before the active one
  var previousBanner = 0;
  // Change this to set the delay time between switching banners
  const delayTime = 3000;

  // Changes the background and elements inside banner
  function changeBackground() {
    // Remove the "active" class from all 'smallImages'
    // Remove the "show" class from all 'banners'
    for (var i = 0; i < smallImages.length; i++) {
      $(smallImages[i]).removeClass('active');
      $(banner[i]).removeClass('show');
    }

    // Get the position of the previous banner
    previousBanner = currentBanner - 1;
    if (previousBanner == -1) {
      // If this is the first banner to be displayed, then previous is actually the last one
      previousBanner = smallImages.length - 1;
    }

    // Sets the "behind" class for the previous banner,
    // making it just behind the currently displayed one
    $(banner[previousBanner]).addClass('behind');

    // Makes only the current service .active or highlighted
    $(smallImages[currentBanner]).addClass('active');

    // Makes only current banner visible
    $(banner[currentBanner]).addClass('show');

     // Since the current banner is visible,
     // remove the previous banner
     setTimeout(function functionName() {
       $(banner[previousBanner]).removeClass('behind')
     }, delayTime)
  }

  // Switches images automaticly with a delay
  function slideShow() {
    // This will cause the delay between switching images
    setTimeout(function() {
      // Increment the current image to switch background,
      // On page load the first banner & service will be displayed because of the class - show & active
      // because CSS is loaded before JS.
      // So the slide show will begin with one position ahead
      currentBanner++;
      // Call changeBackground() to switch the images
      changeBackground();
      // Call the slideShow again, this creats loop effect with delay
      if (currentBanner < smallImages.length) {
        slideShow();
      } else {
        // It is now on the last image so reset the currentBanner to 0
        // And start the slideShow again
        currentBanner = 0;
        changeBackground()
        slideShow();
      }
    }, delayTime) //  ..  The delay time between image switching
  }
  // On page laod execite the slideShow, do not forget to set the first banner in html with class show & first li witch class "active"
  slideShow();
});
