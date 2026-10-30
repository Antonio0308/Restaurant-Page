import clockSvg from "../assets/icons/clock.svg";
import locationJpeg from "../assets/images/location.jpeg";

export function homeContent() {
  const home = document.createElement("div");
  home.classList.add("home");
  const title = document.createElement("h1");
  title.innerText = "Le Bistro";

  const aboutUs = document.createElement("div");
  const aboutUsTitle = document.createElement("h3");
  aboutUsTitle.style.textAlign = "center";
  aboutUsTitle.style.color = "#e67e22";
  aboutUsTitle.innerText = "Qui sommes-nous ?";
  aboutUsTitle.style.marginTop = "20px";
  const aboutUsPara = document.createElement("p");
  aboutUsPara.style.textAlign = "center";
  aboutUsPara.style.marginTop = "8px";
  aboutUsPara.innerText =
    "Un petit bistro familial niché au coeur de la ville, \n proposant des classiques françaises réinventés \n avec amour et des produits frais.";
  aboutUs.append(aboutUsTitle, aboutUsPara);

  const hourly = document.createElement("div");
  hourly.style.marginTop = "30px";
  const hourlyTitle = document.createElement("h3");
  hourlyTitle.style.textAlign = "center";
  hourlyTitle.style.color = "#2c3e50";
  hourlyTitle.innerText = "Horaires d'Ouverture";
  hourly.append(hourlyTitle);
  const hourlyParaList = [
    "Lun - Sam: 12h-14h30 / 19h-22h30",
    "Dimanche: Fermé",
  ];
  for (let i = 0; i < hourlyParaList.length; i++) {
    const hourlyPara = document.createElement("p");
    hourlyPara.style.display = "flex";
    hourlyPara.style.justifyContent = "center";
    hourlyPara.style.alignItems = "center";
    hourlyPara.style.gap = "8px";
    hourlyPara.style.marginTop = "10px";
    const img = document.createElement("img");
    img.src = clockSvg;
    img.style.width = "30px";
    const span = document.createElement("span");
    span.innerText = hourlyParaList[i];
    hourlyPara.append(img, span);
    hourly.append(hourlyPara);
  }

  const location = document.createElement("div");
  location.style.marginTop = "20px";
  location.style.display = "flex";
  location.style.flexDirection = "column";
  location.style.alignItems = "center";
  const locationTitle = document.createElement("h3");
  locationTitle.innerText = "Où Nous Trouver ?";
  location.style.color = "#2c3e50";
  const imgLocation = document.createElement("img");
  imgLocation.src = locationJpeg;
  imgLocation.style.height = "100px";
  imgLocation.style.borderRadius = "10px";
  imgLocation.style.marginTop = "12px";
  const locationPara = document.createElement("p");
  locationPara.innerText = "75 Rue de la Gastronomie, \n75001 Paris";
  locationPara.style.marginTop = "10px";
  location.append(locationTitle, imgLocation, locationPara);

  home.append(title, aboutUs, hourly, location);

  return home;
}
