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

    // lazy loading for images with class "lazy"
    // var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    // if ("IntersectionObserver" in window) {
    //   let lazyImageObserver = new IntersectionObserver(function (
    //     entries,
    //     observer
    //   ) {
    //     entries.forEach(function (entry) {
    //       if (entry.isIntersecting) {
    //         let lazyImage = entry.target;
    //         lazyImage.src = lazyImage.dataset.src;
    //         lazyImage.srcset = lazyImage.dataset.srcset;
    //         lazyImage.classList.remove("lazy");
    //         lazyImageObserver.unobserve(lazyImage);
    //       }
    //     });
    //   });

    //   lazyImages.forEach(function (lazyImage) {
    //     lazyImageObserver.observe(lazyImage);
    //   });
    // } else {
    //   // Possibly fall back to event handlers here
    // }
  }
});
