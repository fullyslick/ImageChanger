$(document).ready(function() {
  // Get the services links-images, to know how clases holding images should be loop through
  const services = $(".service");
  // Get the banner
  const banner = $("#banner");
  // Holds the current banner image number, it is related to  the class "banner-"
  var currentImage = 1;

  // Changes the background and elements inside banner
  function changeBackground() {
    //Logs the the time of the image change
    console.log('New image loaded');
    //Clear all classes from the banner to remove the previous background image
    banner.removeClass();
    //Add a class with the new background image
    banner.addClass('banner-' + currentImage);
  }

  //Loop function that switches images
  function slideShow() {
    // Call a 3s setTimeout when the loop is called
    setTimeout(function() {
      // Change background
      changeBackground();
      currentImage++;
      //  if the index < the number of the services, call the loop function
      if (currentImage < services.length + 1) {
        slideShow(); //  ..  again which will trigger another
      } else {
        // Return to first image by setting the currentImage to 1
        currentImage = 1;
        slideShow();
      }
    }, 3000) //  ..  setTimeout() delay between image switching
  }

  // Call change background to set the first default image
  changeBackground()
  // Set the currentImage to next one to prevent double loading of the first image
  currentImage++;
  // Execute the slide show
  slideShow();
});
