import "./css/styles.css";
import { homeContent } from "./components/home.js";
import { footerPage } from "./components/footer.js";
import { menuContent } from "./components/menu.js";
import { contactContent } from "./components/contact.js";

const btns = document.querySelectorAll("button");
const content = document.querySelector("#content");
content.append(homeContent(), footerPage());

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((rmClassBtn) => {
      rmClassBtn.classList.remove("clicked");
    });
    btn.classList.toggle("clicked");
    pageSwitch(btn.innerText);
  });
});

function pageSwitch(namePage) {
  if (namePage === "Menu") {
    content.innerHTML = "";
    content.append(menuContent(), footerPage());
  } else if (namePage === "Accueil") {
    content.innerHTML = "";
    content.append(homeContent(), footerPage());
  } else {
    content.innerHTML = "";
    content.append(contactContent(), footerPage(namePage));
  }
}
