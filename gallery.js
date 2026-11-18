const gallery = document.querySelector(".photo-gallery");
const dots = gallery.querySelector(".gallery-dots");
const buttons = [...dots.querySelectorAll("button")];

for (const button of buttons) {
  button.addEventListener("click", () => {
    for (const option of buttons) {
      const selected = option === button;
      option.setAttribute("aria-pressed", String(selected));
      document.getElementById(option.getAttribute("aria-controls")).hidden = !selected;
    }
  });
}
dots.hidden = false;
