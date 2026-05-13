const menuServicos = document.getElementById('menu-servicos');

const submenu = document.getElementById('submenu');

menuServicos.addEventListener('click', function(e){

    e.preventDefault();

    submenu.classList.toggle('ativo');

});

document.addEventListener('click', function(e){

    if(
        !menuServicos.contains(e.target) &&
        !submenu.contains(e.target)
    ){

        submenu.classList.remove('ativo');

    }

});





