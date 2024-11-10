import { projetos } from "./data.js";

export function renderProjetos(containerId) {
  const projetosContainer = document.getElementById(containerId);

  projetos.forEach((projeto) => {
    const article = createArticle(projeto);
    const div = createDiv();
    div.appendChild(article);
    projetosContainer.appendChild(div);
  });
}

function createArticle(projeto) {
  const article = document.createElement("article");
  article.classList.add("no-padding", "secondary-container");
  article.innerHTML = `
  <img class="responsive small" src="${projeto.image}" />
  <div class="padding center-align">
    <h5>${projeto.name}</h5>
    <p>${projeto.description}</p>
    <nav class="center-align">
      <a class="button" href="${projeto.linkDemo}" >Demo</a>
      <a class="button" href="${projeto.linkCode}" >Código</a>
    </nav>
  </div>
  `;
  return article;
}

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("s12", "m6", "l4");
  return div;
}
