// Sticky NavBar
window.onscroll = function() {stickyNavigation()};

function stickyNavigation() {
    var navbar = document.querySelector(".cutshort-navbar");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//Slider img

$(document).ready(function() {
    // Initialize variables
    let currentSlide = 0;
    const slides = $('.fourth-banner-img img');
    const totalSlides = slides.length;

    // Show the first slide and hide the rest
    slides.hide();
    slides.eq(currentSlide).show();

    // Function to show the current slide
    function showSlide() {
      slides.hide();
      slides.eq(currentSlide).show();
    }

    // Function to handle the "Next" button click
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide();
    }

    // Function to handle the "Previous" button click
    function previousSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide();
    }

    // Event handlers for the buttons
    $('.next-btn').on('click', nextSlide);
    $('.prev-btn').on('click', previousSlide);
  });