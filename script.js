// script.js

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// script.js

// Glitter trail config
const colors = ["#00ffcc", "#ff66cc"];
const maxGlitters = 100;
const glitters = [];

function createGlitter(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "glitter";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(sparkle);
  glitters.push(sparkle);
 
  
  setTimeout(() => {
   sparkle.remove();
   glitters.shift();
}, 1000); // glitter disappears after 1 second
}

// Track mouse movement
window.addEventListener("mousemove", (e) => {
  if (glitters.length < maxGlitters) {
    createGlitter(e.pageX, e.pageY);
  }
});