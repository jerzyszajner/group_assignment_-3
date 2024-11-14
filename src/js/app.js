const slides = document.querySelectorAll(".slideshow__card");
const bullets = document.querySelectorAll(".slideshow__bullet");
const prevButton = document.querySelector(".slideshow__nav--prev");
const nextButton = document.querySelector(".slideshow__nav--next");
const currentImage = document.querySelector(".image-counter--current");

let currentIndex = 0;

const imageCounter = () => {
  currentImage.textContent = currentIndex + 1;
}


// Function to hide and show slides
function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("hidden", index !== currentIndex);
    bullets[index].classList.toggle("active", index === currentIndex);
    imageCounter();
  });
}

// Handling 'Next' button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

// Handling 'Previous' button
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

// Handling bullet click
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

// Initialization
updateSlide();
