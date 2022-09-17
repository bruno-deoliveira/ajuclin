function verificar() {
let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color = "green";
    }
}

/* Esse arquivo foi criado para manipular o menu responsivo */

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".barra__menu-ativo");

menuIcon.addEventListener("click", function () {
  // quando houver clique no ícone de menu
    menu.classList.toggle("active");
})