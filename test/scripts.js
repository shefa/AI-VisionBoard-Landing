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
  const arrowscroll = document.getElementById("arrowscroll");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 60) {
        if (arrowscroll){
          arrowscroll.classList.remove("active");
        }
        mainNav.classList.add("navbar-scrolled");
      } else if (window.scrollY < 60) {
        mainNav.classList.remove("navbar-scrolled");
      }
    });

    // Get references to the video elements
    const video1 = document.getElementById("fade");

    const baseURL = "https://ai-visionboard.com/";

    var readyToPlay = true;

    // Function to play both videos simultaneously
    function playVideos() {
      //video1.play();
      //video2.play();
      
      // let xhr = new XMLHttpRequest();
      // xhr.onload = function(){
      //   nextVideoElement.src = URL.createObjectURL(xhr.response);
      //   nextVideoElement.play();
      // };

      // xhr.open("GET", baseURL + videoSources[currentVideoIndex]);

      // xhr.responseType = "blob";
      // xhr.send();

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

    const demoElements2 = [
        document.getElementById("demo-screen3"),
        document.getElementById("demo-screen4")
    ];

    const demoElements3 = [
      document.getElementById("userAz"),
      document.getElementById("userLena")
    ];


    const videoSources = [
        "../assets/background/0.mp4",
        "../assets/background/1.mp4",
        "../assets/background/2.mp4",
        "../assets/background/3.mp4"
    ];
    let currentVideoIndex = 0;

    const screenshotSources = [
        "../assets/visionboard_screenshots/screenshot_visionboard_long1.webp",
        "../assets/visionboard_screenshots/screenshot_visionboard_long2.webp",
        "../assets/visionboard_screenshots/screenshot_visionboard_long3.webp",
        "../assets/visionboard_screenshots/screenshot_visionboard_long4.webp"
    ];
    let currentScreenshotIndex = 0;

    let currentVideoElement = videoElements[0];
    let nextVideoElement = videoElements[1];

    let currentDemoScreenshot = demoElements[0];
    let nextDemoScreenshot = demoElements[1];

    function preloadNextVideo(videoElement, videoIndex) {
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
        console.log("setting src " + videoElement.id);
        videoElement.src = URL.createObjectURL(xhr.response);

        console.log("playing next " + videoElement.id);
        videoElement.play();
        setTimeout(() => {
          videoElement.pause();
        }, 100);
        console.log("paused " + videoElement.id);
      };

      xhr.open("GET", baseURL + videoSources[videoIndex]);

      xhr.responseType = "blob";
      xhr.send();
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

    function swapLenaAz() {
      for (var i=0;i<demoElements2.length;i++){
        if (!demoElements2[i].classList.contains('active')){
          const anim = demoElements2[i].style.animation;
          demoElements2[i].style.animation = "none";
          void demoElements2[i].offsetWidth;
          demoElements2[i].style.animation = anim;
        }
        demoElements2[i].classList.toggle('active');
        demoElements3[i].classList.toggle('active');
      }
    }

    function playNextVideo() {
      swapToNextImage();
      swapLenaAz();

      //playVideoForwardReverse(nextVideoElement, videoSources[currentVideoIndex]);
      
      
      if(readyToPlay) {
        [currentVideoElement, nextVideoElement] = [nextVideoElement, currentVideoElement];
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;

        console.log("playing " + currentVideoElement.id);
        
        currentVideoElement.play();
        nextVideoElement.classList.remove("active");
        // setTimeout(() => {
        //   nextVideoElement.classList.add("preload-hack");
        // }, 2000);

        currentVideoElement.classList.add("active");
        // currentVideoElement.classList.remove("preload-hack");
        
        readyToPlay = false;

        setTimeout(() => {
          nextVideoElement.src = videoSources[currentVideoIndex];
          // preloadNextVideo(nextVideoElement, currentVideoIndex);

          nextVideoElement.addEventListener('loadeddata', () => {
            readyToPlay = true;

            nextVideoElement.currentTime = 0.1;
            nextVideoElement.pause();
            console.log('Video preloaded ' + videoSources[currentVideoIndex]);
          });
        nextVideoElement.load();}, 2000);
      }

      setTimeout(playNextVideo, 8000);  // Schedule next video change
    }

  }
});
