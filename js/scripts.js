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

    // Function to play both videos simultaneously
    function playVideos() {
      //video1.play();
      //video2.play();

      playNextVideo();
    }

    window.addEventListener("load", playVideos);
    
    const videoElements = [
        document.getElementById("fade"),
        document.getElementById("fade2")
    ];
    const demoElements = [
        document.getElementById("demo-screen1"),
        document.getElementById("demo-screen2")
    ];

    const videoSources = [
        "assets/background/0.mp4",
        "assets/background/1.mp4",
        "assets/background/2.mp4",
        "assets/background/3.mp4"
    ];
    let currentVideoIndex = 0;

    const screenshotSources = [
        "assets/visionboard_screenshots/screenshot_visionboard_long1.png",
        "assets/visionboard_screenshots/screenshot_visionboard_long2.png",
        "assets/visionboard_screenshots/screenshot_visionboard_long3.png",
        "assets/visionboard_screenshots/screenshot_visionboard_long4.png"
    ];
    let currentScreenshotIndex = 0;

    let currentVideoElement = videoElements[0];
    let nextVideoElement = videoElements[1];

    let currentDemoScreenshot = demoElements[0];
    let nextDemoScreenshot = demoElements[1];

    function preloadNextVideo() {
        const preloadIndex = (currentVideoIndex + 1) % videoSources.length;
        const preloadVideoElement = new Image();
        preloadVideoElement.src = videoSources[preloadIndex];
    }

    function playVideoForwardReverse(videoElement, source) {
      videoElement.src = source;
      videoElement.load();
      videoElement.play();
      videoElement.onended = () => { reverseVideo(videoElement); };
    }

    function reverseVideo(videoElement) {
      videoElement.pause();
      const reverseInterval = setInterval(() => {
        // Decrement currentTime to move backwards (approximately 30 fps)
        if (videoElement.currentTime > 0) videoElement.currentTime -= 0.033;
        else clearInterval(reverseInterval);
      }, 33); // Repeat every 33 milliseconds (approximately 30 fps)
    }

    function swapToNextImage() {
      nextDemoScreenshot.src = screenshotSources[currentScreenshotIndex];

      const anim = nextDemoScreenshot.style.animation;
      nextDemoScreenshot.style.animation = "none";
      void nextDemoScreenshot.offsetWidth;
      nextDemoScreenshot.style.animation = anim;

      nextDemoScreenshot.classList.add("active");
      currentDemoScreenshot.classList.remove("active");
      [currentDemoScreenshot, nextDemoScreenshot] = [nextDemoScreenshot, currentDemoScreenshot];
      currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshotSources.length;
    }

    function playNextVideo() {
      swapToNextImage();
      playVideoForwardReverse(nextVideoElement, videoSources[currentVideoIndex]);
      nextVideoElement.classList.add("active");
      currentVideoElement.classList.remove("active");
      [currentVideoElement, nextVideoElement] = [nextVideoElement, currentVideoElement];
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      
      preloadNextVideo();
      setTimeout(playNextVideo, 8000);  // Schedule next video change
    }

  }
});
