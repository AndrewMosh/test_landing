const slides = document.querySelectorAll(".main__slide");
let currentSlide = 0;
function showSlide(n) {
    slides[currentSlide].classList.remove("main__active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("main__active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000);
