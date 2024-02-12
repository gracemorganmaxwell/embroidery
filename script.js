const button = document.querySelector("#themeToggle");
const body = document.body; // Get the body element

function toggleTheme() {
  if (body.classList.contains("darkTheme")) {
    body.classList.replace("darkTheme", "lightTheme");
    button.textContent = "Dark Mode";
  } else {
    body.classList.replace("lightTheme", "darkTheme");
    button.textContent = "Light Mode";
  }
}

button.addEventListener("click", toggleTheme);
