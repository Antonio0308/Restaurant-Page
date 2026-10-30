export function menuContent() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const title = document.createElement("h1");
  title.innerText = "Menu";

  const titleMenu = [
    "NOS ENTRÉES",
    "NOS PLATS",
    "NOS DESSERTS",
    "NOS BOISSONS",
  ];
  const entreesList = [
    "Velouté de Potimarron & Épices — 8 €",
    "Tartelette Tiède aux Oignons Confits & Chèvre — 9 €",
    "Œuf Parfait & Émulsion de Champignons — 10 €",
  ];
  const platsList = [
    "Joues de Bœuf Braisées au Vin Rouge — 18 €",
    "Filet de Bar Poêlé & Risotto au Citron — 20 €",
    "Gnocchis Artisanal à la Crème de Parmesan & Sauge — 16 €",
  ];
  const dessertsList = [
    "Tarte Fine aux Pommes Caramel Beurre Salé — 7 €",
    "Mousse au Chocolat Noir 70% & Éclats de Haché — 6,50 €2",
    "Café ou Thé Gourmand — 8 €",
  ];
  const boissonsList = [
    "Limonade Artisanale au Citron & Menthe (33cl) — 4,50 €",
    "Jus de Pomme Artisanal Pressoir Local (25cl) — 4,00 €",
    "Eau Minérale / Gazeuse (75cl) — 4,50 €",
    "Verre de Vin Rouge - AOC Bordeaux Côtes de Cérons — 6,00 €",
    "Verre de Vin Blanc - Chardonnay Vallée de la Loire — 5,50 €",
  ];

  const elemMenuTitle = [];
  const divList = [];

  for (let i = 0; i < titleMenu.length; i++) {
    const menuTitle = document.createElement("h3");
    menuTitle.style.textAlign = "center";
    menuTitle.style.color = "#e67e22";
    menuTitle.style.textDecoration = "underline";
    menuTitle.innerText = titleMenu[i];
    if (i === 0) {
      menuTitle.style.marginTop = "20px";
    }
    elemMenuTitle.push(menuTitle);
  }

  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.border = "solid 1px #333333";
    div.style.borderRightWidth = "0px";
    div.style.borderLeftWidth = "0px";
    div.style.borderTopWidth = "0px";
    div.style.padding = "20px";
    div.style.marginTop = "10px";
    divList.push(div);
  }

  for (let i = 0; i < entreesList.length; i++) {
    const p = document.createElement("p");
    if (i !== 0) {
      p.style.marginTop = "12px";
    }
    p.innerText = entreesList[i];
    divList[0].append(p);
  }

  for (let i = 0; i < platsList.length; i++) {
    const p = document.createElement("p");
    if (i !== 0) {
      p.style.marginTop = "12px";
    }
    p.innerText = platsList[i];
    divList[1].append(p);
  }

  for (let i = 0; i < dessertsList.length; i++) {
    const p = document.createElement("p");
    if (i !== 0) {
      p.style.marginTop = "12px";
    }
    p.innerText = dessertsList[i];
    divList[2].append(p);
  }

  for (let i = 0; i < boissonsList.length; i++) {
    const p = document.createElement("p");
    if (i !== 0) {
      p.style.marginTop = "12px";
    }
    p.innerText = boissonsList[i];
    divList[3].append(p);
  }

  menu.append(
    title,
    elemMenuTitle[0],
    divList[0],
    elemMenuTitle[1],
    divList[1],
    elemMenuTitle[2],
    divList[2],
    elemMenuTitle[3],
    divList[3],
  );

  return menu;
}
