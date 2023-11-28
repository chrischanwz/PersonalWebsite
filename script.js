// // Get the link element by its ID
// const link = document.getElementById("changeTextLink");

// // Define the text to change to on hover
// const newText = "New Text on Hover";

// // Event listener for hover effect
// link.addEventListener("mouseenter", function () {
//   // Change the text content
//   link.textContent = "I won't bite!";
// });

// // Event listener for mouse leave to revert to the original text
// link.addEventListener("mouseleave", function () {
//   // Change the text content back to the original text
//   link.textContent = "Get In Touch";
// });

const link = document.getElementById("changeTextLink");
const newText = "I won't bite!";
const originalText = link.textContent;

link.addEventListener("mouseenter", function () {
  setTimeout(function () {
    link.textContent = newText;
  }, 200);
});

link.addEventListener("mouseleave", function () {
  setTimeout(function () {
    link.textContent = originalText;
  }, 200);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  // Define the tablinks and tabContents arrays

  // Remove the "active-link" class from all tablinks
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Remove the "active-tab" class from all tabContents
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  // Add the "active-link" class to the clicked tablink
  event.currentTarget.classList.add("active-link");

  // Show the corresponding tabContent
  document.getElementById(tabName).classList.add("active-tab");
}

// const prevButton = document.getElementById("prevBtn");
// const nextButton = document.getElementById("nextBtn");
// const slider = document.querySelector(".carousel-slider");
// const images = document.querySelectorAll(".carousel-slider img");

// let counter = 0;

// // Function to change the slide/images/runwithme.png
// function changeSlide(index) {
//   const slideWidth = images[index].clientWidth; // Get the width of each slide
//   slider.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// // Event listener for previous button
// prevButton.addEventListener("click", () => {
//   counter--;
//   if (counter < 0) {
//     counter = images.length - 1;
//   }
//   changeSlide(counter);
// });

// // Event listener for next button
// nextButton.addEventListener("click", () => {
//   counter++;
//   if (counter >= images.length) {
//     counter = 0;
//   }
//   changeSlide(counter);
// });

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const slider = document.querySelector(".carousel-slider");
const slides = document.querySelectorAll(".carousel-slide");

let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

prevButton.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
});

nextButton.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
});

// Show the initial slide
showSlide(currentSlideIndex);

// prevButton.addEventListener("click", () => {
//   currentSlideIndex--;
//   if (currentSlideIndex < 0) {
//     currentSlideIndex = slides.length - 1;
//   }
//   slideTo(currentSlideIndex);
// });

// nextButton.addEventListener("click", () => {
//   currentSlideIndex++;
//   if (currentSlideIndex >= slides.length) {
//     currentSlideIndex = 0;
//   }
//   slideTo(currentSlideIndex);
// });

// // Show the initial slide
// slideTo(currentSlideIndex);
