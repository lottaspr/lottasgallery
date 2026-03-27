document.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const topBush = document.querySelector(".top");

  if (!left || !right || !topBush) return; // stoppt, wenn Bilder fehlen

  window.addEventListener("scroll", () => {
    const scrollY = Math.min(window.scrollY, 500); // max Bewegung

    left.style.transform = `translateX(${-scrollY * 0.5}px)`;
    right.style.transform = `translateX(${scrollY * 0.5}px)`;
    topBush.style.transform = `translateY(${-scrollY * 0.6}px)`;
  });
});
