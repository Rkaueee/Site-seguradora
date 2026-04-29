document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("menu-servicos");
  const menu = document.getElementById("submenu");

  botao.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("ativo");
  });

  document.addEventListener("click", function(e) {
    if (!botao.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("ativo");
    }
  });
});