import { habilidades } from "./data.js";

export function renderHabilidades(containerId) {
  const habilidadesContainer = document.getElementById(containerId);
  habilidadesContainer.style.display = "flex";

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  
  habilidades.forEach((habilidade) => {
    const icon = document.createElement("i");
    icon.classList.add("extra");
    const img = document.createElement("img");
    img.alt = habilidade.name;
    img.src = habilidade.icon;
    icon.appendChild(img);

    gridContainer.appendChild(icon);
  });

  habilidadesContainer.appendChild(gridContainer);
}