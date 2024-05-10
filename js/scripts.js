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
    }

    window.addEventListener("load", playVideos);
  }
});
