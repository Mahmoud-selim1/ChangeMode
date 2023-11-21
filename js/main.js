let moon = document.getElementById("moon");
let moonSection = document.querySelector(".moon");
let changeMode = () => {
  if (!moonSection.classList.contains("dark")) {
    moonSection.classList.add("dark");
    moon.style.rotate = "360deg";
    moon.classList = "fa-regular fa-sun text-light";
  } else {
    moon.style.rotate = "700deg";
    moonSection.classList.remove("dark");
    moon.classList = "fa-solid fa-moon";
  }
};
moon.addEventListener("click", changeMode);
