const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  openBtn.setAttribute("aria-expanded", "true");
  closeBtn.setAttribute("aria-expanded", "false");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  openBtn.setAttribute("aria-expanded", "false");
  closeBtn.setAttribute("aria-expanded", "true");
});


const slideContents = document.querySelector(".slide-contents");
const totalSlides = document.querySelectorAll(".slide-content");
const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

let currentSlide = 0;
const totalSlidesLength = totalSlides.length;

function showSlide() {
  slideContents.style.transform = `translateX(-${currentSlide * 100}%)`;
  prevBtn.setAttribute("aria-disabled", currentSlide === 0);
  nextBtn.setAttribute("aria-disabled", currentSlide === totalSlidesLength - 1);
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlidesLength - 1) {
    currentSlide++;
    showSlide();
  }
});