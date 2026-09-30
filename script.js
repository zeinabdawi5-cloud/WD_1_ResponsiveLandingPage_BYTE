// FocusFlow - interactive behaviour
document.addEventListener("DOMContentLoaded", function () {

  // 1. Mobile menu (hamburger button)
  var menuBtn = document.getElementById("menuBtn");
  var siteNav = document.getElementById("siteNav");

  function closeMenu() {
    siteNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after a link is tapped
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // 2. Interactive demo planner: tick tasks, progress updates live
  var boxes = document.querySelectorAll(".tasks input[type='checkbox']");
  var fill = document.getElementById("progressFill");
  var bar = document.getElementById("progress");
  var text = document.getElementById("progressText");

  function updateProgress() {
    var total = boxes.length;
    var done = 0;
    boxes.forEach(function (box) {
      if (box.checked) { done++; }
    });
    fill.style.width = (done / total) * 100 + "%";
    bar.setAttribute("aria-valuenow", String(done));
    text.textContent = (done === total)
      ? "All " + total + " tasks done. Nice work!"
      : done + " of " + total + " tasks done";
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", updateProgress);
  });

  updateProgress(); // set the correct starting state
});
