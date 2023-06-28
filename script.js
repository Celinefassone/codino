document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("#scene");
  const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
});
