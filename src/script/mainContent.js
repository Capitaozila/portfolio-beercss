import { renderHabilidades } from "./habilidades.js";
import { renderProjetos } from "./projetos.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHabilidades("habilidades");
  renderProjetos("projetos");
});
