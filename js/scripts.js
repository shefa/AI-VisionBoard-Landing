/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 60) {
        mainNav.classList.add("navbar-scrolled");
      } else if (window.scrollY < 60) {
        mainNav.classList.remove("navbar-scrolled");
      }
    });

    // Get references to the video elements
    const video1 = document.getElementById("fade");
    const video2 = document.getElementById("demo-screen");

    // Function to play both videos simultaneously
    function playVideos() {
      video1.play();
      video2.play();
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;

      // Schedule the first transition
      setTimeout(playNextVideo, 8000);  // 8 seconds for the next video
    }

    window.addEventListener("load", playVideos);
    
    const videoElements = [
        document.getElementById("fade"),
        document.getElementById("fade2")
    ];
    const videoSources = ["assets/background/0.mp4", "assets/background/1.mp4", "assets/background/2.mp4", "assets/background/3.mp4"];
    let currentVideoIndex = 0;
    let currentVideoElement = videoElements[0];
    let nextVideoElement = videoElements[1];
    
    function playNextVideo() {
        // console.log('gluposti');
        // console.log(currentVideoIndex);
        nextVideoElement.src = videoSources[currentVideoIndex];
        nextVideoElement.load();
        nextVideoElement.play();

        // Cross-fade between current and next video
        nextVideoElement.classList.add("active");
        currentVideoElement.classList.remove("active");

        // Switch references for the next iteration
        [currentVideoElement, nextVideoElement] = [nextVideoElement, currentVideoElement];

        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;

        // Schedule the next transition
        setTimeout(playNextVideo, 8000);  // Schedule the next video change after 8 seconds
    }

    // Start the first video
    
  }
});
