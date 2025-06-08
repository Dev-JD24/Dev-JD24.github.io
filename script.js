document.getElementById("toggleParallax").addEventListener("click", function () {
  document.body.classList.toggle("no-parallax");
  this.textContent = document.body.classList.contains("no-parallax")
    ? "Enable Parallax"
    : "Disable Parallax";
});
