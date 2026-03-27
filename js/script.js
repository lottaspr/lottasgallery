let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

showSlide(current);

document.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const topBush = document.querySelector(".top");

  if (!left || !right || !topBush) return; // stop if images not found

  window.addEventListener("scroll", () => {
    const scrollY = Math.min(window.scrollY, 500); // limit movement

    // Move bushes
    left.style.transform = `translateX(${-scrollY * 20}px)`;
    right.style.transform = `translateX(${scrollY * 20}px)`;
    topBush.style.transform = `translateY(${-scrollY * 20}px)`;
  });
});
