const links = [
  { icon: "person", text: "Sobre mim", href: "#sobre_sec" },
  { icon: "downhill_skiing", text: "Habilidades", href: "#habilidades_sec" },
  { icon: "file_present", text: "Projetos", href: "#projetos_sec" },
  // { icon: "article", text: "Artigos", href: "#artigos_sec" },
];

const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

links.forEach((link) => {
  const menuItem = document.createElement("a");
  menuItem.classList.add("button", "transparent");
  menuItem.href = link.href;
  menuItem.innerHTML = `
      <div class="row">
        <i>${link.icon}</i>
        <span>${link.text}</span>
      </div>
    `;
  menu.appendChild(menuItem);

  const navItem = document.createElement("a");
  navItem.classList.add("button", "transparent");
  navItem.href = link.href;
  navItem.innerHTML = `
      <i>${link.icon}</i>
      ${link.text}
    `;
  navLinks.appendChild(navItem);
});
