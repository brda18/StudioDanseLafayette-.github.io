const show = document.getElementById("show");

const modal = document.getElementById("modal");

const close = document.getElementById("close");

show.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});