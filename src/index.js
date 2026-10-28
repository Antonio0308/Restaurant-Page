import "./css/styles.css";

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((rmClassBtn) => {
      rmClassBtn.classList.remove("clicked");
    });
    btn.classList.toggle("clicked");
  });
});
