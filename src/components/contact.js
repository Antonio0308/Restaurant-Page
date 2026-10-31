import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/email.svg";

export function contactContent() {
  const div = document.createElement("div");
  div.classList.add("contact");
  const title = document.createElement("h1");
  title.innerText = "Nous contactez";

  const listTitle = ["Téléphone", "E-Mail"];
  const elemTitle = [];
  for (let i = 0; i < listTitle.length; i++) {
    const h3 = document.createElement("h3");
    h3.style.color = "#2c3e50";
    h3.style.marginTop = "20px";
    h3.style.textAlign = "center";
    h3.innerText = listTitle[i];
    elemTitle.push(h3);
  }

  const listContact = [
    [phoneIcon, "01 23 45 67 89"],
    [mailIcon, "lebistro@gmail.com"],
  ];
  const elemContact = [];
  for (let i = 0; i < listContact.length; i++) {
    const p = document.createElement("p");
    p.style.color = "#333333";
    p.style.display = "flex";
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    p.style.gap = "10px";
    p.style.marginTop = "10px";
    const img = document.createElement("img");
    img.style.width = "30px";
    img.src = listContact[i][0];
    const span = document.createElement("span");
    span.innerText = listContact[i][1];
    p.append(img, span);
    elemContact.push(p);
  }

  div.append(title, elemTitle[0], elemContact[0], elemTitle[1], elemContact[1]);
  return div;
}
