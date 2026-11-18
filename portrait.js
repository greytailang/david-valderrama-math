const avatar = document.querySelector("button.avatar");
const portrait = document.querySelector("#portrait-dialog");

avatar.addEventListener("click", () => portrait.showModal());
portrait.addEventListener("click", (event) => {
  if (event.target === portrait) portrait.close();
});
