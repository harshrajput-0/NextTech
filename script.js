const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
} else {
  document.body.classList.remove("dark");
  icon.classList.replace("fa-sun", "fa-moon");
}

// IMPLEMENT THEME BUTTON
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // SAVE PREFERENCE
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Adding Ripple Effects
document.querySelectorAll(".primary-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
