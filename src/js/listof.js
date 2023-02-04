// Header burger button
const checkbox = document.getElementById("burger-menu");
const box = document.getElementById("test");

checkbox.addEventListener("click", function handleClick() {
  if (checkbox.checked) {
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
});
