function animate(id, end) {
  const el = document.getElementById(id);
  let current = 0;
  const step = Math.ceil(end / 120);
  const timer = setInterval(() => {
    current += step;
    el.textContent = current.toLocaleString();
    if (current >= end) {
      el.textContent = end.toLocaleString();
      clearInterval(timer);
    }
  }, 20);
}

animate("guilds", 125000);
animate("users", 4500000);
animate("commands", 250);

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll("section, .card, .hero-visual").forEach((el) => {
  el.classList.add("hidden");
  obs.observe(el);
});

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
