

// Script.js — RKAR Seguros
 
// ===========================
// SUBMENU SERVIÇOS
// ===========================
const menuServicos = document.getElementById('menu-servicos');
const submenu = document.getElementById('submenu');
 
if (menuServicos && submenu) {
    // Abre/fecha ao clicar
    menuServicos.addEventListener('click', function (e) {
        e.preventDefault();
        submenu.classList.toggle('ativo');
    });
 
    // Fecha ao clicar fora
    document.addEventListener('click', function (e) {
        if (!menuServicos.contains(e.target) && !submenu.contains(e.target)) {
            submenu.classList.remove('ativo');
        }
    });
}
