const images = [
  { src: "images/image1.jpg", caption: "Chapter 1" },
  { src: "images/image2.jpg", caption: "Chapter 2" },
  { src: "images/image3.jpg", caption: "Chapter 3" },
  { src: "images/image4.jpg", caption: "Chapter 4" }
];
let current = 0;
let timer = null;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");
const dotsBox = document.getElementById("dots");
const playBtn = document.getElementById("play");

images.forEach(function (img, index) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function () {
      current = index;
      showImage();
    };
    dotsBox.appendChild(dot);
  });

function showImage() {
  photo.src = images[current].src;
  caption.textContent = images[current].caption;
  counter.textContent = "Image " + (current + 1) + " of " + images.length;

  const dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, index) {
    dot.classList.toggle("active", index === current);
  });
}

function nextImage() {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showImage();
}

function prevImage() {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showImage();
}

function toggleSlideshow() {
  if (timer === null) {
    timer = setInterval(nextImage, 2000);
    playBtn.textContent = "Pause";
  } else {
    clearInterval(timer);
    timer = null;
    playBtn.textContent = "Play";
  }
}

document.getElementById("next").onclick = nextImage;
document.getElementById("prev").onclick = prevImage;
playBtn.onclick = toggleSlideshow;

showImage();