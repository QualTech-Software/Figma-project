document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "0") {
    document.body.classList.toggle("centered-content");
  }
});
