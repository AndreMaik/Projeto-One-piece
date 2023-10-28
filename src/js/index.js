// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
//passo 1 - pegar os botoes no JS pra poder verificar quando o usúario clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - quando clicar no botão do personagem mostras as informações do personagem
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
       botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");
        

        //passo 3 - verificar se já existe um personagem selecionado, se si, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");
    });
});
