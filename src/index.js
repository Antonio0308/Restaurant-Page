import "./css/styles.css";
import { homeContent } from "./components/home.js";
import { footerPage } from "./components/footer.js";
import { menuContent } from "./components/menu.js";

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((rmClassBtn) => {
      rmClassBtn.classList.remove("clicked");
    });
    btn.classList.toggle("clicked");
  });
});

const content = document.querySelector("#content");
content.append(menuContent(), footerPage());
