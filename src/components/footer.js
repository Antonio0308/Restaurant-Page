export function footerPage() {
  const p = document.createElement("p");
  p.innerText = "© 2026 Le Bistro";
  p.style.fontSize = "20px";
  p.style.textAlign = "center";
  p.style.color = "#fdfbf7";
  p.style.backgroundColor = "#2c3e50";
  p.style.marginTop = "25px";
  p.style.padding = "15px";
  return p;
}
