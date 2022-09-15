let btn = document.querySelector(".btn");
let video = document.querySelector(".bg-video");
let icon = document.querySelector(".btn i");
let preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
  if (icon.classList.contains("fa-play")) {
    video.pause();
  } else {
    video.play();
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});
