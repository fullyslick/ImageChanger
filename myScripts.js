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

    // Loop through all service elements and remove the active class
    for (var i = 0; i < services.length; i++) {
      $(services[i]).removeClass('active');
    }
    //Make only the current service .active
    $(services[currentImage-1]).addClass('active');
  }

  //Loop function that switches images automaticly
  function slideShow() {
    // This will cause the delay between switching images
    setTimeout(function() {
      // Call changeBackground() to swotch the images
      changeBackground();

      currentImage++;
      //  if the currentImage < the number of the services, call the slideShow function again
      if (currentImage < services.length + 1) {
        slideShow();
      } else {
        // It is now on the last image so reset the currentImage to 1
        // And start the slideShow again
        currentImage = 1;
        slideShow();
      }
    }, 3000) //  ..  setTimeout() delay between image switching
  }

  // Call change background to set the first default image on page load
  changeBackground()
  // Set the currentImage to the second to prevent double loading of the first image in the slideShow
  currentImage++;
  // Now execute the slide show
  slideShow();
});
